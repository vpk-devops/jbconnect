import React, { Key } from "react";
import { CoveredCard, HowItWorksCard, PrecautionCard, ReviewBreakdown, ServiceDetailPage } from "../../../../components/Common/CustomCards/CustomCards";
import PageLayout from "../../../../components/Layout/Layout";
import Header from "../../../../components/Header/Header";
import { useLocation, useParams } from "react-router";
import { cleaningDetails } from "../../data";
import { IonCard, IonCol, IonGrid, IonIcon, IonRow } from "@ionic/react";
import CustomButton from "../../../../components/Common/CustomButton/CustomButton";
import { useAddToCart } from "../../../../utils/ReusableHook";
import { useAppSelector } from "../../../../app/hooks";
import { slugify } from "../../../../utils/helpers";


type RouteParams = {
  slug: string;
};

const DetailPageWrapper: React.FC = () => {
  const { slug } = useParams<RouteParams>();
  const { addItemToCart } = useAddToCart();
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
  const detail = cleaningDetails[slug];

  const isPostConstruction = detail.isPostConstruction === true;
  const isKitchenService = slug.includes('kitchen') || slug.includes('chimney') || slug.includes('stove');
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
      <div>
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
        {/* What We Offer / CoveredCard */}
        {isPostConstruction && (
          <IonGrid className="!p-0 !mx-1">
            {Array.isArray(detail.serviceData) &&
              detail.serviceData.map(
                (section: { type: string; title: string; items: string[] }, i: Key) => (
                  <IonRow key={i} className="mb-3 !p-0 !m-0 ">
                    <IonCol size="12" className="!p-0 !m-0  space-y-3">
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
        )}

        {isKitchenService && (
          <IonCard className="!mt-3 !m-0 !p-2">
            <h2 className="text-base font-semibold text-custom-blue px-2 mb-2">Here&apos;s what we require from your end.</h2>
            <div className="grid grid-cols-4 gap-6 mx-3">
              {detail.requirements.map((item: any) => (
                <div key={item.id} className="flex flex-col items-center">
                  <div className="p-4 h-20 bg-[#DEE1E666] rounded-sm shadow flex items-center justify-center">
                    <IonIcon icon={item.icon} className="w-8 h-8 text-custom-blue" />
                  </div>
                  <h3 className="text-xs text-gray-700 mt-2 text-center">{item.label}</h3>
                </div>
              ))}
            </div>
          </IonCard>
        )}
        {/* Our Process */}
        <IonCard className="!mx-3 my-2 shadow-md  border border-gray-200">
          <h2 className="text-lg font-bold text-custom-blue font-inter leading-7 p-4 pb-3">
            {isKitchenService ? "How it Works" : "Our Process"}
          </h2>

          {detail.steps.map(
            (step: { icon?: string; title: string; description: string }, index: number) => (
              <HowItWorksCard
                key={index}
                step={index + 1}
                title={step.title}
                description={step.description}
              />
            )
          )}
        </IonCard>

        {/* Precautions → n */}
        {!isPostConstruction && !isKitchenService && (
          <IonGrid className="!pt-5 !mx-1">
            <h2 className="text-base font-semibold text-custom-blue px-2 mb-2">
              Precautions During Service
            </h2>
            <IonRow>
              {detail.precautions.map(
                (item: { icon: string; description: string }, i: Key | null | undefined) => (
                  <IonCol size="4" key={i}>
                    <PrecautionCard icon={item.icon} description={item.description} />
                  </IonCol>
                )
              )}
            </IonRow>
          </IonGrid>
        )}

        {/* Reviews → always */}
        <ReviewBreakdown
          average={detail.reviewBreakdown.average}
          total={detail.reviewBreakdown.total}
          ratings={detail.reviewBreakdown.ratings}
        />
      </div>
    </PageLayout>
  );
}



export default DetailPageWrapper;
