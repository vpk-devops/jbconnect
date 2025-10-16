import { IonButton, IonCard } from "@ionic/react";
import { useState } from "react";
import PageLayout from "../../../components/Layout/Layout";
import Header from "../../../components/Header/Header";
import CustomButton from "../../../components/Common/CustomButton/CustomButton";

const DeleteAccountPage: React.FC = () => {
  const [reason, setReason] = useState("");

  const reasons = [
    "I'm no longer using my account",
    "The service is too expensive",
    "I want to change my phone number",
    "I don't understand how to use",
    "Guide is not available in my city",
    "Other",
  ];
  return (
    <PageLayout
      header={
        <Header title="Delete Account" type="page" showRightIcon={false} />
      }
    >
      <div className="flex items-center justify-center bg-[#A3CEF163] bg-full h-full overflow-auto ">
        <IonCard className="max-w-md rounded-xl py-8 px-4">
          <div>
            <h2 className="font-inter text-lg leading-[26px] font-bold text-custom-black mb-1">
              Delete my account
            </h2>
            <p className="font-inter text-sm text-custom-black-600 mt-1 leading-[20px] mb-2">
              We're really sorry to see you go. Are you sure you want to delete
              your account? Once you confirm, your data will be gone.
            </p>

            <div className="space-y-5  py-6">
              {reasons.map((item, index) => (
                <label
                  key={index}
                  className="flex items-center gap-2 text-sm text-custom-black cursor-pointer"
                >
                  <input
                    type="radio"
                    name="reason"
                    value={item}
                    checked={reason === item}
                    onChange={() => setReason(item)}
                    className="accent-blue-600 w-4 h-4"
                  />
                  {item}
                </label>
              ))}
            </div>

            <div className="flex gap-2 justify-between  mt-4">
              <CustomButton
                text="Keep my account active"
                className="text-white !p-1 bg-custom-blue text-[12px]"
              />
              <CustomButton
                text="Delete Account"
                className="text-white !p-1 bg-[#B30000FF] text-[12px]"
              />
            </div>
          </div>
        </IonCard>
      </div>
    </PageLayout>
  );
};
export default DeleteAccountPage;
