import React from "react";
import {
  IonPage,
  IonContent,
  IonButton,
} from "@ionic/react";
import CustomButton from "../../../components/Common/CustomButton/CustomButton";

const StageWiseOnBoardingPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="flex flex-col justify-between items-center px-6 py-8 text-center">
        {/* Header Section */}
        <div>
          <h2 className="text-[#274C77] text-xl md:text-2xl font-bold mb-1">
            Dream Home
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            From blueprint to keys, we build your dream.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center">
          <img
            src="/assets/images/appLogo2.png" 
            alt="JBCONX"
            className="h-12 md:h-14 mb-4"
          />
        </div>

        {/* Card with Image + Text Overlay */}
        <div className="w-full max-w-md mt-6 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <img
              src="/assets/images/construction.jpg" 
              alt="house"
              className="w-full h-48 md:h-56 object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
              <p className="text-white text-sm md:text-base font-medium leading-relaxed">
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
          />
          
        </div>
      </IonContent>
    </IonPage>
  );
};

export default StageWiseOnBoardingPage;
