import React from "react";
import {
  IonPage,
  IonContent,
  IonButton,
  useIonRouter,
} from "@ionic/react";
import CustomButton from "../../../components/Common/CustomButton/CustomButton";
import PageLayout from "../../../components/Layout/Layout";
import Header from "../../../components/Header/Header";

const EndToEndOnBoradingPage: React.FC = () => {
  const ionRouter=useIonRouter()
  return (
    <PageLayout >
      <div className="h-full flex flex-col justify-center items-center px-6 py-8 text-center">
        {/* Header Section */}
        <div>
          <h2 className="text-custom-blue !text-2xl md:text-2xl font-bold mb-1 !font-acme">
            Dream Home
          </h2>
          <p className="text-custom-black text-sm md:text-base font-inter w-44 pt-3">
            From blueprint to keys, we build your dream.
          </p>
        </div>

        <div className=" flex flex-col items-center">
          <img
            src="/assets/images/appLogo2.png" 
            alt="JBCONX"
            className="h-[160px] md:h-14 object-contain"
          />
        </div>

        {/* Card with Image + Text Overlay */}
        <div className="w-full max-w-md m bg-white rounded-md shadow-lg overflow-hidden font-inter">
          <div className="relative">
            <img
              src="/assets/images/construction.jpg" 
              alt="house"
              className="w-full h-60 md:h-56 object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
              <p className="text-white text-sm md:text-base font-medium leading-relaxed w-50">
                “JBCONX offers complete end-to-end construction services,
                enabling you to hire skilled contractors and builders to design,
                manage, and deliver your dream home or space with reliability
                and transparency.”
              </p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-md mt-8">
          <CustomButton
           text="Get Start"
            className="!bg-[#274C77] !text-white rounded-md h-10 text-sm md:text-base"
      
               onClick={() => ionRouter.push("/construction/processpage" , "forward", "push")}
          />
          
        </div>
      </div>
    </PageLayout>
  );
};

export default EndToEndOnBoradingPage;
