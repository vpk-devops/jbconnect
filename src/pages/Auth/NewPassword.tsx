import { IonPage, IonContent, IonIcon } from "@ionic/react";
import { keyOutline, eyeOutline, eyeOffOutline } from "ionicons/icons";
import { useState } from "react";
import CustomInputForm from "../../components/Common/CustomInputForm/CustomInputForm";
import CustomButton from "../../components/Common/CustomButton/CustomButton";
import PageLayout from "../../components/Layout/Layout";
import Header from "../../components/Header/Header";

function isStrongPassword(pw: string) {
  return /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/.test(
    pw
  );
}
const NewPassword: React.FC = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const isWeak = newPassword.length > 0 && !isStrongPassword(newPassword);
  return (
    <PageLayout
      header={
        <Header title="Change Password" type="page" showRightIcon={false} />
      }
    >
      <IonContent>
        <div className="w-full h-full flex flex-col bg-[rgba(163,206,241,0.3)] items-center justify-center px-4">
          <div className="w-full max-w-[500px] px-6 pb-8 pt-4 bg-white rounded-xl shadow-md flex flex-col items-center">
            <div className=" w-24 h-24 rounded-full bg-[#ffffff] mb-4 mt-2 border-2 border-[#274C77]">
              <IonIcon
                icon={keyOutline}
                className="w-20 h-20"
                style={{ color: "#274C77" }}
              />
            </div>
            <h2 className="text-xl font-semibold text-black mb-8 w-full text-left">
              Let's create new password for your account
            </h2>
            <form className="w-full flex flex-col gap-4 mt-2">
              <div>
                <CustomInputForm
                  label="New password"
                  name="new-password"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  type={showNewPassword ? "text" : "password"}
                  className={`border ${isWeak ? "border-red-500" : "border-[#6096ba]"
                    } text-[#222] placeholder-black pl-3 pr-10 focus:outline-none shadow-none w-full rounded-[8px] h-12`}
                  iconRight={
                    <button
                      type="button"
                      tabIndex={-1}
                      onClick={() => setShowNewPassword((v) => !v)}
                      className="focus:outline-none"
                    >
                      <IonIcon
                        icon={showNewPassword ? eyeOffOutline : eyeOutline}
                        className="w-6 h-6 text-gray-500"
                      />
                    </button>
                  }
                />
                {isWeak && (
                  <div className="flex items-center">
                    <span className="text-red-500 text-lg mr-1">&#9632;</span>
                    <span className="text-red-500 text-sm font-inter font-semibold -mb-1.5">
                      Strong Password
                    </span>
                  </div>
                )}
                {isWeak && (
                  <div className="text-xs text-gray-700 font-inter ml-5">
                    Create a strong password with at least 8 characters,
                    including one uppercase letter, one number, and one special
                    character.
                  </div>
                )}
              </div>
              <div>
                <CustomInputForm
                  label="Retype password"
                  name="confirm-password"
                  placeholder="Retype new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type={showConfirmPassword ? "text" : "password"}
                  className="border border-[#6096ba] text-[#222] placeholder-black pl-3 pr-10 focus:outline-none shadow-none w-full rounded-[8px] h-12"
                  iconRight={
                    <button
                      type="button"
                      tabIndex={-1}
                      onClick={() => setShowConfirmPassword((v) => !v)}
                      className="focus:outline-none"
                    >
                      <IonIcon
                        icon={showConfirmPassword ? eyeOffOutline : eyeOutline}
                        className="w-6 h-6 text-gray-500"
                      />
                    </button>
                  }
                />
              </div>
              <CustomButton
                text="Submit New Password"
                onClick={() => { }}
                className="w-full h-12 text-lg font-medium bg-[#274C77] text-white !mt-2"
              />
            </form>
          </div>
        </div>
      </IonContent>
    </PageLayout>
  );
};

export default NewPassword;
