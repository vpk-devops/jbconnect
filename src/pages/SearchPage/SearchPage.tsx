import { IonContent, IonIcon, IonPage, IonSearchbar } from "@ionic/react";
import {
  searchOutline,
  locationOutline,
  constructOutline,
  personOutline,
  layersOutline,
  flashOutline,
  hammerOutline,
  filmOutline,
  starOutline,
  funnelOutline,
  checkmarkCircleOutline,
  chevronForwardOutline,
} from "ionicons/icons";
import PageLayout from "../../components/Layout/Layout";
import CustomButton from "../../components/Common/CustomButton/CustomButton";
import profileImage from "/assets/images/D1.jpg";

const filterChips = [
  { label: "End-to-End", icon: constructOutline },
  { label: "Hire Pro", icon: personOutline },
  { label: "Quick Services", icon: flashOutline },
  { label: "By Stage", icon: layersOutline },
  { label: "Management", icon: hammerOutline },
  { label: "Flips", icon: filmOutline },
  { label: "Location", icon: locationOutline },
  { label: "Stage", icon: funnelOutline },
  { label: "4.0+ Only", icon: starOutline },
];
const SearchPage: React.FC = () => {
  return (
    <PageLayout>
      <IonContent className="ion-padding">
        {/* Search Bar */}
        <div className="mb-4 ">
          <IonSearchbar
            placeholder="Search for services, or work videos..."
            className="rounded-full border border-[#D2D9E5] outline-none "
            style={{
              "--background": "#ffffff",
              "--color": "#888",
              "--placeholder-color": "#888",
            }}
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-4 ">
          {filterChips.map((item, index) => (
            <button
              key={index}
              className="text-sm font-inter font-normal px-2 py-1  leading-[22px] bg-white text-[#4A5568] flex items-center gap-1 rounded-full border border-[#E0E7F3] shadow-[0px_0px_1px_rgba(23,26,31,0.07),_0px_0px_2px_rgba(23,26,31,0.12)]"
            >
              <IonIcon
                icon={item.icon}
                className="text-base text-gray-600 pr-1"
              />
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Profile Card */}
        <div className="bg-white px-2 py-3 mb-4 flex items-center justify-between rounded-[8px] shadow-[0px_4px_9px_rgba(23,26,31,0.11),_0px_0px_2px_rgba(23,26,31,0.12)] ">
          <div className="flex items-center gap-2">
            <img
              src={profileImage}
              className="w-16 h-16 rounded-full"
              alt="profile"
            />
            <div>
              <div className="font-bold  font-semibold text-lg text-#1A202CFF">
                John Smith
              </div>
              <div className="text-xs text-blue-500 font-medium flex items-center gap-1">
                <IonIcon
                  icon={checkmarkCircleOutline}
                  className="text-#274C77FF text-lg"
                />
                <h2 className="text-[#4A72B9FF] text-md mt-1">
                  Verified{" "}
                  <span className="text-[#718096FF] pl-2"> General </span>
                </h2>
              </div>
              <h6 className="text-[#718096FF] font-semibold !text-sm font-inter mt-1">
                Contractor
              </h6>
            </div>
          </div>
          <CustomButton
            text="View Profile"
            className="!mb-6 text-sm bg-[#1C5D8EFF] text-white px-3 py-1 rounded-md"
          />
        </div>

        {/* Service Cards */}
        <div className="space-y-2">
          {["Electrical Wiring", "Floor Installation", "Flips"].map(
            (service, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow p-3 flex justify-between items-center"
              >
                <div>
                  <div className="font-medium text-sm">{service}</div>
                  <div className="text-xs text-gray-400">
                    Quick Home Services
                  </div>
                </div>
                {service === "Flips" ? (
                  <CustomButton
            text="Watch Flips"
            className="text-xs bg-[#1C5D8EFF] text-white !px-2 !py-0 !h-8 rounded-md"
          />
                ) : (
                  <IonIcon
                    icon={chevronForwardOutline}
                    className="text-gray-500 text-xl"
                  />
                )}
              </div>
            )
          )}
        </div>
      </IonContent>
    </PageLayout>
  );
};

export default SearchPage;
