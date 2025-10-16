import React, { useEffect } from "react";
import { IonCard, IonCardContent, IonIcon } from "@ionic/react";
import { starOutline } from "ionicons/icons";
import { ReviewBreakdown } from "../../../../components/Common/CustomCards/CustomCards";
import PageLayout from "../../../../components/Layout/Layout";
import Header from "../../../../components/Header/Header";
import { useLocation, useParams } from "react-router";
import { cleaningDetails } from "../../data";
import CustomButton from "../../../../components/Common/CustomButton/CustomButton";
import { useAddToCart } from "../../../../utils/ReusableHook";
import { useAppSelector } from "../../../../app/hooks";
import { slugify } from "../../../../utils/helpers";

type RouteParams = {
  slug: string;
};

const SofaMattersDetailPage: React.FC = () => {
  const { slug } = useParams<RouteParams>();
  const { addItemToCart } = useAddToCart();
  const detail = cleaningDetails[slug];
  const { services, loading } = useAppSelector((state) => state.services);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedTagName = searchParams.get("tag");


  //  Find service from Redux services list
  const service = services.find((s) => slugify(s.name) === slug);
  console.log("servi", service)

  // Pick the correct tag object
  const selectedTag =
    service?.tags?.find((t) => t.name === selectedTagName) ||
    service?.tags?.[0] || null;

  const displayPrice = selectedTag?.price ?? service?.price ?? 0;

  if (!detail) {
    return (
      <PageLayout
        header={
          <Header
            title="Service Not Found"
            type="page"
            titleColor="text-red-500 !font-archivo"
            showRightIcon={false}
          />
        }
      >
        <p className="p-4 text-center">The service you are looking for does not exist.</p>
      </PageLayout>
    );
  }

  const data = detail.serviceData;

  return (
    <PageLayout
      header={
        <Header
          title={detail.header.title}
          type="page"
          titleColor="text-custom-blue !font-archivo"
          showRightIcon={false}
        />
      }
    >
      <div className="bg-gray-50 mx-1">
        {/* Hero image with overlay */}
        <div className="relative w-full h-48 md:h-64">
          <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h1 className="text-white font-inter text-base md:text-2xl font-bold text-center px-4">
              {data.description}
            </h1>
          </div>
        </div>

        {/* Title, button, rating */}
        <div className="p-4 flex flex-col gap-3">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold text-custom-blue font-archivo">{data.title}</h2>
            <CustomButton
              text="Add to cart"
              icon="cartOutline"
              className="text-xs text-custom-blue !bg-white border border-custom-blue !py-2 !w-28 !h-7 md:text-sm"
              onClick={() => {
                if (!service) {
                  console.warn("No matching service found for slug:", slug);
                  return;
                }
                const item = {
                  id: service._id,
                  title: service.name,
                  price: displayPrice,
                  image: service.image,
                  quantity: 1,
                  // tag: selectedTag?.name || null,
                  tag: selectedTag?.name,
                };
                addItemToCart(item);
              }}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center font-inter gap-4">
              <div className="flex items-center gap-1 text-yellow-700 text-sm bg-yellow-100 rounded-full px-3 py-1">
                <IonIcon icon={starOutline} className="text-yellow-600 !text-xs" />
                <span className="text-yellow-600 font-medium text-xs">{data.rating}</span>
              </div>
              <div className="flex items-center gap-1 text-sm bg-blue-100 rounded-full px-3 py-1">
                <span className="text-blue-500 font-medium text-xs">{data.reviews}</span>
              </div>
            </div>
          </div>
        </div>

        {/* What's Included */}
        <IonCard className="!mx-2 !my-1 mb-3 shadow bg-white rounded-lg">
          <IonCardContent className="!p-3">
            <h3 className="!text-lg !font-semibold text-custom-blue font-archivo !mb-3">
              What's Included
            </h3>
            <div className="space-y-4 font-inter">
              {data.items.map((step: any, index: number) => (
                <div key={index}>
                  <p className="font-semibold text-custom-black">{step.title}</p>
                  <p className="text-sm text-custom-gray mt-1">{step.description}</p>
                </div>
              ))}
            </div>
          </IonCardContent>
        </IonCard>

        {/* Excluded */}
        <IonCard className="!mx-2 !my-4 shadow bg-white rounded-lg">
          <IonCardContent className="!p-3">
            <h3 className="!text-lg !font-semibold text-custom-blue font-archivo !mb-2">
              Excluded
            </h3>
            <p className="font-inter text-custom-gray">Ink stains may not be completely removable</p>
          </IonCardContent>
        </IonCard>

        {/* Reviews */}
        <ReviewBreakdown
          average={detail.reviewBreakdown.average}
          total={detail.reviewBreakdown.total}
          ratings={detail.reviewBreakdown.ratings}
        />
      </div>
    </PageLayout>
  );
};

export default SofaMattersDetailPage;
