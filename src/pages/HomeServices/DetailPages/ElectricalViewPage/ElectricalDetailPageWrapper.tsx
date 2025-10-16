import Header from "../../../../components/Header/Header";
import PageLayout from "../../../../components/Layout/Layout";
import { useLocation, useParams } from "react-router-dom";
import { cleaningDetails } from "../../data";
import { IonPage, IonContent, IonCard, IonIcon } from "@ionic/react";
import { useEffect } from "react";
import {
  HowItWorksCard,
  ReviewBreakdown,
} from "../../../../components/Common/CustomCards/CustomCards";
import CustomButton from "../../../../components/Common/CustomButton/CustomButton";
import { useAddToCart } from "../../../../utils/ReusableHook";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { fetchServicesBySubcategoryId } from "../../../../features/home-services/services/serviceThunk";
import { alertCircleOutline, personOutline } from "ionicons/icons";
import { slugify } from "../../../../utils/helpers";

//  match your route : /home-services/:category/:subCategoryId/:slug
type RouteParams = {
  category: string;
  subCategoryId: string;
  slug: string;
};

const ElectricalDetailPageWrapper: React.FC = () => {
  const { category, subCategoryId, slug } = useParams<RouteParams>();
  const { addItemToCart } = useAddToCart();
  const { services, loading } = useAppSelector((state) => state.services);
  const dispatch = useAppDispatch();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedTagName = searchParams.get("tag");

  useEffect(() => {
    if (subCategoryId) {
      dispatch(fetchServicesBySubcategoryId(subCategoryId));
    }
  }, [subCategoryId, dispatch]);

  //  Find service from Redux services list
  const service = services.find((s) => slugify(s.name) === slug);

  // Pick the correct tag object
  const selectedTag =
    service?.tags?.find((t) => t.name === selectedTagName) ||
    service?.tags?.[0] || null;

  const displayPrice = selectedTag?.price ?? service?.price ?? 0;
  const detail = cleaningDetails[slug];

  if (!detail && !service) {
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
          title={detail?.header?.title || service?.name || "Service"}
          subtitle={detail?.header?.subtitle || ""}
          type="page"
          variant="subtitle"
          titleColor="text-custom-blue !font-archivo"
          showRightIcon={false}
        />
      }
    >
      <IonContent className="p-4 !bg-gray-100">
        {/*  Add to cart */}
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
                // tag:service.tags,
                tag: selectedTag?.name,
                price:displayPrice,
                image: service.image,
                quantity: 1,
              };
              addItemToCart(item);
            }}
          />
        </div>

        {/*  Our Process  */}
        {detail?.steps && (
          <IonCard className="!mx-3 my-4 shadow-md border border-gray-200">
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
        )}

        {/* Advisory (only if exists) */}
        {detail?.customerAdvisory && (
          <IonCard className="!mx-3 my-2 shadow-md border border-gray-200 bg-white">
            <h2 className="text-lg font-bold text-custom-blue font-inter leading-7 p-4 pb-3">
              Customer Advisory
            </h2>
            <div className="font-inter flex items-start space-x-2 px-4 pb-2">
              <IonIcon
                icon={personOutline}
                className="h-5 w-10 !font-bold text-custom-blue pt-0.5"
              />
              <p className="text-sm text-gray-700">
                {detail.customerAdvisory.description}
              </p>
            </div>

            <div className="font-inter flex items-start space-x-2 px-4 pb-4">
              <IonIcon
                icon={alertCircleOutline}
                className="h-5 w-10 text-red-500 "
              />
              <p className="text-sm text-gray-700">
                <span className="text-red-600 font-medium">Note:</span>{" "}
                {detail.customerAdvisory.note}
              </p>
            </div>
          </IonCard>
        )}

        {/* Review Breakdown */}
        {detail?.reviewBreakdown && (
          <ReviewBreakdown
            average={detail.reviewBreakdown.average}
            total={detail.reviewBreakdown.total}
            ratings={detail.reviewBreakdown.ratings}
          />
        )}
      </IonContent>
    </PageLayout>
  );
};

export default ElectricalDetailPageWrapper;
