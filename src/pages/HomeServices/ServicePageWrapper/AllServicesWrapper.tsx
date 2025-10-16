import { useParams } from "react-router-dom";
import Header from "../../../components/Header/Header";
import PageLayout from "../../../components/Layout/Layout";
import { OfferCard, PropertyCard } from "../../../components/Common/CustomCards/CustomCards";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { fetchServicesBySubcategoryId } from "../../../features/home-services/services/serviceThunk";
import CustomSwiperComponent from "../../../components/Common/CustomSwiperSlider/CustomSwiperComponent";
import { useLocation } from "react-router-dom";


type RouteParams = {
  category: string;
  subCategorySlug: string;
  subCategoryId: string;
};

const offerItems = [
  { text: "Flat 20% off on complete home package" },
  { text: "Flat 10% off on kitchen cleaning" },
  { text: "Get ₹500 off on sofa cleaning" },
];
const AllServicesWrapper: React.FC = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const offerTitle = query.get("offerTitle");
  const { category, subCategorySlug, subCategoryId } = useParams<RouteParams>();
  const dispatch = useAppDispatch();
  const { services, loading, error } = useAppSelector((state) => state.services);
  console.log("allservices", services);

  useEffect(() => {
    if (category && subCategoryId) {
      dispatch(fetchServicesBySubcategoryId(subCategoryId));
    }
  }, [category, subCategoryId, dispatch]);

  console.log("Category:", category, "Subcategory:", subCategoryId);

  // separate services
  const apartments = services.filter((s) =>
    s.name.toLowerCase().includes("apartment")
  );
  const bungalows = services.filter((s) =>
    s.name.toLowerCase().includes("bungalow")
  );
  const others = services.filter(
    (s) =>
      !s.name.toLowerCase().includes("apartment") &&
      !s.name.toLowerCase().includes("bungalow")
  );

  //  Reusable group renderer
  const ServiceGroup: React.FC<{ title?: string; list: any[] }> = ({ title, list }) => {
    if (!list.length) return null;
    return (
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map((service) => (
          <PropertyCard
            key={service._id}
            id={service._id}
            title={service.name}
            description={service.description}
            rating={service.rating}
            reviews={service.reviewCount?.toString()}
            price={service.price}
            image={service.image}
            tags={service.tags}
            variant={service.variant as "left" | "right"}
            pathNames={service.pathNames}
            category={category}
            subCategorySlug={subCategorySlug}
          />
        ))}
      </div>
    );
  };

  return (
    <PageLayout
      header={
        <Header
          title={
            offerTitle
              ? offerTitle
              : services.length > 0
                ? services[0].pathNames?.[1] || services[0].name
                : "Services"
          }
          subtitle={offerTitle ? "Special Offer" : "Explore our services"}
          type="page"
          variant="subtitle"
          titleColor="text-custom-blue !font-archivo"
          showRightIcon={false}
        />

      }
    >
      {/* Responsive margin/padding */}
      <div className="mx-4 sm:mx-6 mt-2">
        <CustomSwiperComponent
          items={offerItems}
          slidesPerView={1.1}
          spaceBetween={12}
          autoplay={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          renderItem={(item, idx) => <OfferCard key={idx} text={item.text} />}
          className="w-full"
        />
      </div>

      {/* Responsive service groups */}
      <ServiceGroup title="Apartment" list={apartments} />
      <ServiceGroup title="Bungalow" list={bungalows} />
      <ServiceGroup list={others} />
    </PageLayout>
  );
};

export default AllServicesWrapper;

