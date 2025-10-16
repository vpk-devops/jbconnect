import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
  IonAvatar,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonImg,
  IonText,
  useIonRouter,
} from "@ionic/react";
import PageLayout from "../../../components/Layout/Layout";
import Header from "../../../components/Header/Header";
import CustomButton from "../../../components/Common/CustomButton/CustomButton";
import { steps } from "../data";
import CustomSwiperComponent from "../../../components/Common/CustomSwiperSlider/CustomSwiperComponent";
import { StepCard } from "../ConstructionReusableCards";

const ProcessPage: React.FC = () => {
  const ionRouter = useIonRouter();
  return (
    <PageLayout
      header={<Header title="How JB Conex Process Works" type="page" />}
    >
      <IonContent>
        {/* Top Image */}
        <div className="mx-4 mt-6">
          <img src="/assets/images/Designer1.jpg" className="!rounded-lg" />

      
          <CustomSwiperComponent
            items={steps}
            slidesPerView={1.2} 
            spaceBetween={12}
            autoplay={true}
            pagination={true}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 16 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
            }}
            renderItem={(step, idx) => <StepCard key={idx} {...step} />}
          />
          <div className=" max-w-md mx-4">
            <CustomButton
              text="Get Started with Your Dream Home"
              className="!bg-[#274C77] !text-white rounded-full h-10 text-sm md:text-base"
              onClick={() =>
                ionRouter.push("/construction/enquiry", "forward", "push")
              }
            />
          </div>
        </div>
      </IonContent>
    </PageLayout>
  );
};

export default ProcessPage;
