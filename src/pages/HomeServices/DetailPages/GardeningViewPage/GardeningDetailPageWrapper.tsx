import Header from "../../../../components/Header/Header";
import PageLayout from "../../../../components/Layout/Layout";
import { useParams } from "react-router-dom";
import { cleaningDetails } from "../../data";
import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonImg,
} from "@ionic/react";
import { Key, useEffect } from "react";
import {
  HowItWorksCard,
  ReviewBreakdown,
} from "../../../../components/Common/CustomCards/CustomCards";
import CustomButton from "../../../../components/Common/CustomButton/CustomButton";
import { useAddToCart } from "../../../../utils/ReusableHook";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { fetchServicesBySubcategoryId } from "../../../../features/home-services/services/serviceThunk";
import { slugify } from "../../../../utils/helpers";


type RouteParams = {
  slug: string;
};

const GardenDetailPageWrapper: React.FC = () => {
  const { slug } = useParams<RouteParams>();
  const { addItemToCart } = useAddToCart();
  const { services } = useAppSelector((state) => state.services);
  //  Find service from Redux services list
  const service = services.find((s) => slugify(s.name) === slug);

  const detail = cleaningDetails[slug];
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
        <div className="flex justify-end mr-5">
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
                price: service.price ?? 0,
                image: service.image,
                quantity: 1,
              };
              addItemToCart(item);
            }}
          />
        </div>
        <IonGrid className="!p-0 !mx-4">
          <IonRow>
            {detail.gardenImages.map(
              (
                item: { image: string | undefined },
                index: Key | null | undefined
              ) => (
                <IonCol
                  size="6"
                  key={index}
                  className="flex flex-col items-center"
                >
                  <IonCard className="!m-2 shadow-md overflow-hidden rounded-xl w-full">
                    <div className="relative w-full h-32">
                      <IonImg
                        src={item.image}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </IonCard>
                </IonCol>
              )
            )}
          </IonRow>
        </IonGrid>
        {/* Our Process */}
        <IonCard className="!mx-3 my-1 shadow-md  border border-gray-200">
          <h2 className="text-lg font-bold text-custom-blue font-inter leading-7 p-4 pb-3">
            Our Process
          </h2>

          {detail.steps.map(
            (
              step: { icon?: string; title: string; description: string },
              index: number
            ) => (
              <HowItWorksCard
                key={index}
                step={index + 1}
                title={step.title}
                description={step.description}
              />
            )
          )}
        </IonCard>

        <ReviewBreakdown
          average={detail.reviewBreakdown.average}
          total={detail.reviewBreakdown.total}
          ratings={detail.reviewBreakdown.ratings}
        />
      </IonContent>
    </PageLayout>
  );
};

export default GardenDetailPageWrapper;
