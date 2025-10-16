import { IonIcon } from "@ionic/react";
import { arrowRedoOutline } from "ionicons/icons";
import CustomButton from "../../components/Common/CustomButton/CustomButton";
import reno1 from "/assets/images/reno1.jpg";
import reno2 from "/assets/images/reno2.jpg";
import reno3 from "/assets/images/reno3.jpg";

const RenovationCards: React.FC = () => {
  return (
    <div className="px-4 md:px-4 my-6">
      <div className="grid grid-cols-2 gap-2">
        {/* LEFT SIDE*/}
        <div className="relative rounded-[90px_90px_0px_0px] overflow-hidden col-span-1">
          <img
            src={reno1}
            alt="Complete Renovation"
            className="w-full h-[240px] sm:h-[280px] object-cover z-[1]"
          />
          <div className="absolute top-2 left-3 z-[2] bg-white text-custom-blue text-[15px] sm:text-lg font-semibold px-2 py-0.5 rounded-xl shadow-md leading-tight">
            Renovate <br /> Home
          </div>
          <div className="absolute bottom-3 left-3 z-[2]">
            <h3 className="text-white text-sm sm:text-base font-normal">
              Complete Home Renovation
            </h3>
            <CustomButton
              text="Hire Now"
              className="!mt-1 bg-white text-custom-blue border border-custom-blue text-sm  w-24 !h-8"
            />
          </div>
          <IonIcon
            icon={arrowRedoOutline}
            className="absolute bottom-2 right-2 text-white text-xl shadow "
          />
        </div>

        {/* Rigt side */}
        <div className="flex flex-col gap-2 col-span-1">
          {/* Kitchen */}
          <div className="relative rounded-tl-[55px] overflow-hidden">
            <img
              src={reno2}
              alt="Kitchen"
              className="w-full h-[115px] sm:h-[135px] object-cover"
            />
            <div className="absolute bottom-2 left-2">
              <h3 className="text-white text-sm font-normal">
                Kitchen Renovation
              </h3>
              <CustomButton
                text="Hire Now"
                className="!mt-1 bg-white text-custom-blue border border-custom-blue text-xs  w-20 !h-8"
              />
            </div>
            <IonIcon
              icon={arrowRedoOutline}
              className="absolute bottom-2 right-2 text-white text-lg"
            />
          </div>

          {/* Flooring */}
          <div className="relative rounded-tr-[55px] overflow-hidden">
            <img
              src={reno3}
              alt="Flooring"
              className="w-full h-[115px] sm:h-[135px] object-cover"
            />
            <div className="absolute bottom-2 left-2">
              <h3 className="text-white text-sm font-normal">
                Flooring Renovation
              </h3>
              <CustomButton
                text="Hire Now"
                className="!mt-1 bg-white text-custom-blue border border-custom-blue text-xs !h-8 w-20"
              />
            </div>
            <IonIcon
              icon={arrowRedoOutline}
              className="absolute bottom-2 right-2 text-white text-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenovationCards;
