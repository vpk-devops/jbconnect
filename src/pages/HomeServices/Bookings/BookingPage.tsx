import React, { useEffect, useState } from "react";
import { IonIcon, useIonRouter } from "@ionic/react";
import {
  calendarOutline,
  timeOutline,
  locationOutline,
  star,
  callOutline,
  closeOutline,
  searchOutline,
  chevronDownOutline,
  checkmarkCircleOutline,
  closeCircleOutline,
  refreshOutline,
  pencilOutline,
} from "ionicons/icons";
import Header from "../../../components/Header/Header";
import PageLayout from "../../../components/Layout/Layout";
import CustomButton from "../../../components/Common/CustomButton/CustomButton";
import { BookingSummaryCard } from "../../../components/Common/CustomCards/CustomCards";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { fetchAllOrders } from "../../../features/home-services/booking/bookingThunk";

const BookingPage: React.FC = () => {
  const { orders, loading } = useAppSelector((state) => state.booking);
  const dispatch = useAppDispatch();
  const ionRouter = useIonRouter();

  useEffect(() => {
    dispatch(fetchAllOrders());
  }, [dispatch]);

  const [selectedTab, setSelectedTab] = useState<"upcoming" | "completed" | "cancelled">("upcoming");
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  // ✅ Map backend orders → UI shape
  const mappedOrders = orders.map((o: any) => ({
    id: o._id,
    serviceName: o.sections?.[0]?.items?.[0]?.title || "Service",
    serviceType: o.sections?.[0]?.sectionTitle || "",
    providerName: o.agent?.name || "Assigned Soon",
    rating: o.agent?.rating ?? 4.5,
    date: new Date(o.dateTime || o.createdAt).toLocaleDateString(),
    time: new Date(o.dateTime || o.createdAt).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    address: o.address?.text || "",
    city: o.address?.text?.split(",").slice(-2, -1)[0] || "",
    specialInstructions: o.notes || "",
    cancelReason: o.cancelReason || "",
    serviceIcon: "construct-outline",
    imageSrc: o.sections?.[0]?.items?.[0]?.image || "",
    orderStatus: o.orderStatus,
  }));

  //  Split by orderStatus
  const upcomingServices = mappedOrders.filter((o) =>
    ["placed", "accepted", "in-progress"].includes(o.orderStatus)
  );
  const completedServices = mappedOrders.filter((o) => o.orderStatus === "completed");
  const cancelledServices = mappedOrders.filter((o) => o.orderStatus === "cancelled");

  const categories = ["All Services", ...new Set(orders.map(o =>
    o.sections?.[0]?.items?.[0]?.title || "Unknown Service"
  ))];

  // Filter services based on search + category
const filteredServices = (
  selectedTab === "upcoming"
    ? upcomingServices
    : selectedTab === "completed"
    ? completedServices
    : cancelledServices
).filter(service => {
  const matchesSearch = service.serviceName
    ?.toLowerCase()
    .includes(searchText.toLowerCase());

  const matchesCategory =
    selectedCategory === "All Services" ||
    service.serviceName === selectedCategory;

  return matchesSearch && matchesCategory;
});

  const summaryCards = [
    {
      key: "total",
      icon: calendarOutline,
      value: mappedOrders.length,
      label: "Total Booking",
      bgClass: "bg-blue-100",
      textClass: "text-blue-600",
    },
    {
      key: "upcoming",
      icon: timeOutline,
      value: upcomingServices.length,
      label: "Upcoming",
      bgClass: "bg-orange-100",
      textClass: "text-orange-600",
    },
    {
      key: "completed",
      icon: checkmarkCircleOutline,
      value: completedServices.length,
      label: "Completed",
      bgClass: "bg-green-100",
      textClass: "text-green-600",
    },
    {
      key: "cancelled",
      icon: closeCircleOutline,
      value: cancelledServices.length,
      label: "Cancelled",
      bgClass: "bg-red-100",
      textClass: "text-red-600",
    },
  ];

  if (loading) return <PageLayout header={<Header title="Service Booking" type="page" />}>Loading...</PageLayout>;

  return (
    <PageLayout header={<Header title="Service Booking" type="page" showRightIcon={false} />}>
      <div className="bg-white">
        {/* Booking Summary */}
        <div
          className="flex gap-4 mb-6 overflow-x-auto [&::-webkit-scrollbar]:hidden px-4 py-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {summaryCards.map((card) => (
            <BookingSummaryCard
              key={card.key}
              icon={card.icon as any}
              value={card.value}
              label={card.label}
              bgClass={card.bgClass}
              textClass={card.textClass}
            />
          ))}
        </div>

        {/* Search Bar */}
        {/* <div className="mt-6 mb-4 px-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for booking...."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full h-9 pl-8 pr-3 text-sm bg-white border border-[#132B61] rounded-md outline-none font-inter"
            />
            <IonIcon
              icon={searchOutline}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#274C77]"
            />
          </div>
        </div> */}

        {/* Filters */}
        {/* <div className="flex gap-3 mb-6 px-4">
          <div className="relative flex-1">
            <input
              type="text"
              value={selectedCategory}
              readOnly
              onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
              className="w-full h-9 pl-3 pr-8 text-sm text-[#171A1F] bg-white border border-[#274C77] rounded-md outline-none cursor-pointer font-inter"
            />
            <IonIcon
              icon={chevronDownOutline}
              className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#274C77] ${showCategoryDropdown ? "rotate-180" : ""
                }`}
            />
            {showCategoryDropdown && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#274C77] rounded-md shadow-lg z-10 max-h-48 overflow-y-auto">
                {categories.map((category) => (
                  <div
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setShowCategoryDropdown(false);
                    }}
                    className="px-3 py-2 text-sm text-[#171A1F] hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                  >
                    {category}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div> */}


        {/* Tabs */}
        <div className="flex mb-6 px-4">
          {[
            {
              key: "upcoming",
              label: `Upcoming(${upcomingServices.length})`,
              activeText: "text-[#EA916E]",
              underline: "bg-[#EA916E]",
            },
            {
              key: "completed",
              label: `Completed(${completedServices.length})`,
              activeText: "text-green-500",
              underline: "bg-green-600",
            },
            {
              key: "cancelled",
              label: `Cancelled(${cancelledServices.length})`,
              activeText: "text-red-500",
              underline: "bg-red-600",
            },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedTab(tab.key as any)}
              className={`flex-1 py-3 px-4 text-sm font-medium relative ${selectedTab === tab.key ? tab.activeText : "text-gray-600"
                }`}
            >
              {tab.label}
              {selectedTab === tab.key && (
                <div className={`absolute bottom-0 left-0 right-0 h-[3px] ${tab.underline}`} />
              )}
            </button>
          ))}
        </div>

        {/* Services List */}
        <div className="space-y-4 px-4">
          {(selectedTab === "upcoming"
            ? upcomingServices
            : selectedTab === "completed"
              ? completedServices
              : cancelledServices
          ).map((service) => (
            <div
              key={service.id}
              className={`bg-white rounded-lg border-2 ${selectedTab === "completed"
                  ? "border-green-600"
                  : selectedTab === "cancelled"
                    ? "border-red-600"
                    : "border-[#EA916E]"
                } p-4 font-inter`}
            >
              {/* Service Header */}
              <div className="flex items-start gap-3 mb-2">
                {service.imageSrc ? (
                  <div className="w-10 h-10 rounded-lg overflow-hidden">
                    <img src={service.imageSrc} alt={service.serviceName} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-400 via-blue-400 to-yellow-400 rounded-lg flex items-center justify-center">
                    <IonIcon icon={service.serviceIcon as any} className="w-5 h-5 text-white" />
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-base font-bold text-black">{service.serviceName}</h3>
                  <p className="text-sm text-[#9095a1] mt-0.5">{service.serviceType}</p>
                </div>
              </div>

              {/* Provider + Rating */}
              <div className="mb-2">
                <p className="text-base font-medium text-black">{service.providerName}</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <IonIcon icon={star} className="text-lg text-yellow-400" />
                  <span className="text-sm font-medium text-black">{service.rating}</span>
                </div>
              </div>

              {/* Booking Details */}
              <div className="space-y-1 mb-2">
                <div className="flex items-center gap-2">
                  <IonIcon icon={calendarOutline} className="w-4 h-4 text-[#274C77]" />
                  <span className="text-sm text-gray-700">{service.date}</span>
                  <IonIcon icon={timeOutline} className="w-4 h-4 text-[#274C77] ml-2" />
                  <span className="text-sm text-gray-700">{service.time}</span>
                </div>
                <div className="flex items-start gap-2">
                  <IonIcon icon={locationOutline} className="text-2xl text-[#274C77] mt-0.5" />
                  <div>
                    <span className="text-sm text-[#171a1f]">{service.address}</span>
                    {/* <p className="text-sm text-[#9095a1] mt-0.5">{service.city}</p> */}
                  </div>
                </div>
              </div>

              {/* Special Instructions */}
              {selectedTab === "upcoming" && service.specialInstructions && (
                <div className="mb-4">
                  <div className="w-full bg-[#F5F6F8] rounded-full px-3 py-2">
                    <span className="text-sm font-medium text-[#171a1f]">{service.specialInstructions}</span>
                  </div>
                </div>
              )}
              {selectedTab === "cancelled" && service.cancelReason && (
                <div className="mb-4">
                  <div className="inline-block bg-red-100 text-red-600 rounded-full px-3 py-1">
                    <span className="text-xs font-semibold">Cancelled:</span>
                    <span className="text-xs font-medium ml-1">{service.cancelReason}</span>
                  </div>
                </div>
              )}

              {/* Buttons */}
              {selectedTab === "upcoming" ? (
                <div className="mt-4 grid grid-cols-3 gap-2 font-inter ">
                  <CustomButton
                    text="Contact"
                    icon="callOutline"
                    onClick={() => ionRouter.push("/home-services/bookings/contact")}
                    className="h-7 text-[11px] border border-custom-blue  text-custom-blue "
                  />
                  <CustomButton
                    text="Cancel"
                    icon="closeOutline"
                    onClick={() => ionRouter.push("/home-services/bookings/cancel")}
                    className="h-7 text-[11px] border border-custom-blue  text-custom-blue"
                  />
                  <CustomButton
                    text="Reschedule"
                    icon="calendarOutline"
                    onClick={() => ionRouter.push("/home-services/bookings/reschedule")}
                    className="h-7 text-[11px] border border-custom-blue  text-custom-blue"
                  />
                </div>
              ) : selectedTab === "completed" ? (
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <CustomButton
                    text="Book Again"
                    icon="refreshOutline"
                    onClick={() => ionRouter.push("/home-services/bookings/book-agian")}
                    className="h-[28px] text-[11px] border  border-custom-blue  text-custom-blue"
                  />
                  <CustomButton
                    text="Write Review"
                    icon="pencilOutline"
                               onClick={() => ionRouter.push("/home-services/bookings/write-review")}
                    className="h-7 text-[11px] border  border-custom-blue  text-custom-blue"
                  />
                </div>
              ) : selectedTab === "cancelled" ? (
                <div className="mt-4 grid grid-cols-1">
                  <CustomButton
                    text="Book Again"
                    icon="refreshOutline"
                 onClick={() => ionRouter.push("/home-services/bookings/book-agian")}
                    className="h-[28px] text-[11px] border border-custom-blue  text-custom-blue"
                  />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default BookingPage;
