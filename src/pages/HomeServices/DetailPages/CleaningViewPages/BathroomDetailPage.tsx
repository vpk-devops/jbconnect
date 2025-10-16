import Header from "../../../../components/Header/Header";
import PageLayout from "../../../../components/Layout/Layout";
import { useLocation, useParams } from "react-router-dom";
import { cleaningDetails } from "../../data";
import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonIcon,
  IonImg,

} from "@ionic/react";
import { Key, useEffect } from "react";
import {
  CoveredCard,
  PrecautionCard,
  ReviewBreakdown,
} from "../../../../components/Common/CustomCards/CustomCards";
import CustomButton from "../../../../components/Common/CustomButton/CustomButton";
import { useAddToCart } from "../../../../utils/ReusableHook";
import { useAppSelector } from "../../../../app/hooks";
import { slugify } from "../../../../utils/helpers";

// /home-services/:category/:subCategorySlug/:slug/detailpage
type RouteParams = {
  category: string;
  subCategorySlug: string;
  slug: string;
};

const BathroomDetailPage: React.FC = () => {
  const { category, subCategorySlug, slug } = useParams<RouteParams>();
  const { addItemToCart } = useAddToCart();
  const detail = cleaningDetails[slug];
  const { services, loading } = useAppSelector((state) => state.services);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedTagName = searchParams.get("tag");
  
  //  Find service from Redux services list
  const service = services.find((s) => slugify(s.name) === slug);
  // Pick the correct tag object
  const selectedTag =
    service?.tags?.find((t) => t.name === selectedTagName) ||
    service?.tags?.[0] || null;

  const displayPrice = selectedTag?.price ?? service?.price ?? 0;

  if (!detail) {
    return (
      <IonPage>
        <IonContent>
          <p>Service not found.</p>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <PageLayout
      header={
        <Header
          title={detail.header.title}
          subtitle={detail.header.subtitle}
          type="page"
          variant="subtitle"
          titleColor="text-custom-blue !font-archivo"
          showRightIcon={false}
        />
      }
    >
      <IonContent className="p-4 bg-gray-50">
        <div className="flex justify-end mr-3">
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
                // tag:service.tags,
                tag: selectedTag?.name,
                image: service.image,
                quantity: 1,
              };
              addItemToCart(item);
            }}
          />
        </div>
        <IonGrid className="!p-0 !mx-3">
          <IonRow>
            {detail.beforeAfterImages.map(
              (
                item: { before: string | undefined },
                index: Key | null | undefined
              ) => (
                <IonCol
                  size="6"
                  key={index}
                  className="flex flex-col items-center"
                >
                  <IonCard className="!m-2 shadow-md overflow-hidden rounded-xl w-full">
                    <div className="relative w-full h-32">
                      {/* 👆 same height for all */}
                      <IonImg
                        src={item.before}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </IonCard>
                </IonCol>
              )
            )}
          </IonRow>
        </IonGrid>

        <IonCard className="!mt-3 !m-0 !p-2">
          <h2 className="text-base font-semibold text-custom-blue px-2 mb-2">
            Here&apos;s what we require from your end.
          </h2>
          <div className="grid grid-cols-4 gap-6 mx-3">
            {detail.requirements.map((item: any) => (
              <div key={item.id} className="flex flex-col items-center">
                <div className="p-4 h-20 bg-[#DEE1E666] rounded-sm shadow flex items-center justify-center">
                  <IonIcon
                    icon={item.icon}
                    className="w-8 h-8 text-custom-blue"
                  />
                </div>
                <h3 className="text-xs text-gray-700 mt-2 text-center">
                  {item.label}
                </h3>
              </div>
            ))}
          </div>
        </IonCard>
        {/* prcautions card */}
        <IonGrid className="!pt-5 !mx-1">
          <h2 className="text-base font-semibold text-custom-blue px-2 mb-2">
            {" "}
            Precautions During Service
          </h2>
          <IonRow>
            {detail.precautions.map(
              (
                item: { icon: string; description: string },
                i: Key | null | undefined
              ) => (
                <IonCol size="4" key={i}>
                  <PrecautionCard
                    icon={item.icon}
                    description={item.description}
                  />
                </IonCol>
              )
            )}
          </IonRow>
        </IonGrid>
        <IonGrid className=" !p-0 !mx-1 ">
          {Array.isArray(detail.serviceData) &&
            detail.serviceData.map(
              (
                section: { type: string; title: string; items: string[] },
                i: Key | null | undefined
              ) => (
                <IonRow key={i} className="mb-3 !p-0 !m-0">
                  <IonCol size="12" className="!p-0 !m-0 space-y-3">
                    <CoveredCard
                      type={section.type}
                      title={section.title}
                      items={section.items}
                    />
                  </IonCol>
                </IonRow>
              )
            )}
        </IonGrid>

        <ReviewBreakdown
          average={detail.reviewBreakdown.average}
          total={detail.reviewBreakdown.total}
          ratings={detail.reviewBreakdown.ratings}
        />
      </IonContent>
    </PageLayout>
  );
};

export default BathroomDetailPage;
