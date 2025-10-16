import { IonPage, IonContent, IonIcon } from "@ionic/react";
import { keyOutline } from "ionicons/icons";
import CustomInputForm from "../../components/Common/CustomInputForm/CustomInputForm";
import CustomButton from "../../components/Common/CustomButton/CustomButton";
import PageLayout from "../../components/Layout/Layout";
import Header from "../../components/Header/Header";

const ForgotPassword: React.FC = () => {
  return (
    <PageLayout
      header={
        <Header title="Forgot Password" type="page" showRightIcon={false} />
      }
    >
      <IonContent >
        <div className="w-full h-full flex flex-col bg-[rgba(163,206,241,0.3)]">
          <div className="flex flex-1 justify-center items-center px-4 py-8">
            <div className="w-full max-w-[400px] bg-white rounded-xl shadow-md px-6 py-8 flex flex-col items-start">

              <div className="self-center w-20 h-20 rounded-full bg-white border-2 border-[#222] flex items-center justify-center mb-4">
                <IonIcon icon={keyOutline} className="w-12 h-12 text-[#274C77]" />
              </div>

              <h2 className="text-xl font-bold text-black mb-1">
                Forgot Password
              </h2>
              <p className="text-sm font-inter text-[#222] mb-6">
                Please enter your phone number or email ID. We’ll help you recover
                your account.
              </p>

              <form className="w-full flex flex-col gap-4 mt-4">
                <CustomInputForm
                  label="Enter Phone number or Email"
                  name="forgotInput"
                  placeholder="abc*****@gmail.com"
                  value={""}
                  onChange={() => { }}
                  error={""}
                  type="text"
                  className="text-[#222] placeholder-black pl-3 border border-[#6096ba] w-full rounded-[12px]"
                />
                <div className="self-end">
                  <CustomButton
                    text="Continue"
                    onClick={() => { }}
                    className="h-10 w-28 text-lg bg-custom-blue text-white"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </IonContent>
    </PageLayout>
  );
};

export default ForgotPassword;
