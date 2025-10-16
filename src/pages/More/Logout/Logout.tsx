import Header from "../../../components/Header/Header";
import {
  IonContent,
  IonIcon,
} from "@ionic/react";
import { alertCircleOutline, logOutOutline } from "ionicons/icons";
import PageLayout from "../../../components/Layout/Layout";
import CustomButton from "../../../components/Common/CustomButton/CustomButton";

const Logout: React.FC = () => {
  return (
    <PageLayout
      header={<Header title="Logout" type="page" showRightIcon={false} />}
    >
      <IonContent className="ion-padding ">
        <div className="h-full flex flex-col items-center justify-evenly bg-[#A3CEF163] rounded-[12px] py-4">
          <div className="text-center flex flex-col items-center justify-center">
            <div className="w-28 h-28 rounded-full bg-pink-100 overflow-hidden flex items-center justify-center">
              <img
                src="https://i.pravatar.cc/150?img=3"
                className="w-24 h-24 object-cover rounded-full"
              />
            </div>

            <h2 className="font-archivo text-base leaging-[26px]  font-bold text-custom-black pt-2">
              Jhon Doe
            </h2>
            <p className="font-inter text-custom-light font-normal text-sm leading-[22px] pt-1">
              aadmams@yahoo.com{" "}
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center max-w-md mb-1">
              <IonIcon
                icon={alertCircleOutline}
                className="w-6 h-6 text-[#EFB034FF]"
              />
              <h3 className="font-inter text-md leading-[26px] font-bold text-custom-black pl-2 m-0">
                Are you sure?
              </h3>
            </div>
            <p className="text-center text-sm text-custom-black-600 w-64 leading-[20px]">
              You will be signed out of your account and redirected to the login
              screen.
            </p>
          </div>
          <div className="w-full flex flex-col gap-3 mt-6 px-6">
            <CustomButton
              text="Log out"
              icon={logOutOutline}
              className="text-white bg-[#274C77] text-lg !p-1 "
              onClick={() => console.log("logout")}
            />

            <CustomButton
              text="Cancel"
              onClick={() => console.log("cancel,")}
              className="border !border-[#274C77FF] bg-white text-lg text-custom-blue !p-1 "
            />
          </div>
        </div>
      </IonContent>
    </PageLayout>
  );
};
export default Logout;
