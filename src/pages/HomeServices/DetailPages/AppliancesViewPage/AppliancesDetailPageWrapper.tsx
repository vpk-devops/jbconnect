import Header from "../../../../components/Header/Header";
import PageLayout from "../../../../components/Layout/Layout";
import { useParams } from "react-router-dom";
import { cleaningDetails } from "../../data";
import { IonPage, IonContent, IonCard, IonIcon } from "@ionic/react";
import {  useState } from "react";
import {
  HowItWorksCard,
  ReviewBreakdown,
  ServiceRepairForm,
} from "../../../../components/Common/CustomCards/CustomCards";
import { alertCircleOutline, personOutline } from "ionicons/icons";
import { useAddToCart } from "../../../../utils/ReusableHook";
import {  useAppSelector } from "../../../../app/hooks";
import CustomButton from "../../../../components/Common/CustomButton/CustomButton";
import { slugify } from "../../../../utils/helpers";
import CustomModal from "../../../../components/Common/CustomModal/CustomModal";


type RouteParams = {
  slug: string;
};

const AppliancesDetailPageWrapper: React.FC = () => {
  const { slug } = useParams<RouteParams>();
  const { addItemToCart } = useAddToCart();
  const [isModalOpen, setModalOpen] = useState(false);
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
        <div className="flex justify-end mr-4">
          <CustomButton
            text="Add to cart"
            icon="cartOutline"
            className="text-xs text-custom-blue !bg-white border border-custom-blue !py-2 !w-28 !h-7 md:text-sm"
            onClick={() => setModalOpen(true)}

          />
        </div>
        {/* Our Process */}
        <IonCard className="!mx-3 my-3 shadow-md  border border-gray-200">
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
        <IonCard className="!mx-3 my-2 shadow-md border border-gray-200 bg-white">
          <h2 className="text-lg font-bold text-custom-blue font-inter leading-7 p-4 pb-3">
            Customer Advisory
          </h2>
          <div className="font-inter flex items-start space-x-2 px-4 pb-2">
            <IonIcon
              icon={personOutline}
              className="h-4 w-8 !font-bold text-custom-blue pt-0.5"
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
        <ReviewBreakdown
          average={detail.reviewBreakdown.average}
          total={detail.reviewBreakdown.total}
          ratings={detail.reviewBreakdown.ratings}
        />
      </IonContent>

      <CustomModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title=""
      >
        <ServiceRepairForm
          options={detail.providerDetails}
          onProceed={(formData) => {
            if (!service) return;
            const item = {
              id: service._id,
              title: service.name,
              price: service.price ?? 0,
              image: service.image,
              quantity: 1,
              ...formData, // include Issue + Request Type
            };
            addItemToCart(item);
            setModalOpen(false);
          }}
        />
      </CustomModal>



    </PageLayout>
  );
};

export default AppliancesDetailPageWrapper;
