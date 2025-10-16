import {
  IonPage,
  IonContent,
  IonButton,
  IonIcon,
  useIonRouter,
} from "@ionic/react";
import {
  chevronBackOutline,
  mailOutline,
  lockClosedOutline,
  logoGoogle,
  logoFacebook,
  eyeOutline,
} from "ionicons/icons";
import { useState } from "react";
import CustomInputForm from "../../components/Common/CustomInputForm/CustomInputForm";
import CustomButton from "../../components/Common/CustomButton/CustomButton";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { signInUser } from "../../features/auth/authThunks"

const SignIn: React.FC = () => {
   const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
    const { loading } = useAppSelector((state) => state.auth); 
  const ionRouter = useIonRouter();
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (field: string) => (e: any) => {
    setFormData({ ...formData, [field]: e.detail.value });
    setErrors({ ...errors, [field]: "" });
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const newErrors: any = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    setErrors(newErrors);
     if (Object.keys(newErrors).length > 0) return;

    try {
      const res =  dispatch(signInUser(formData)).unwrap();
      console.log("Login success:", res);
      alert("Login successful");
      ionRouter.push("/", "forward"); 
    } catch (err: any) {
      console.error("Login failed:", err);
      alert(err || "Login failed");
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(e.target.checked);
  };

  return (
    <IonPage>
      <IonContent className="bg-white font-intra">
        <div className="relative min-h-screen flex flex-col items-center justify-start px-4 pt-2 pb-6 overflow-hidden">
          {/* Background */}
          <div
            className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
            style={{
              backgroundImage: "url('/assets/images/signin.png')",
              backgroundSize: "470%",
              backgroundPosition: "80% 80%",
              opacity: 0.09,
              backgroundRepeat: "no-repeat",
              backgroundColor: "transparent",
            }}
          ></div>

          {/* Header */}
          <div className="w-full max-w-md flex items-center justify-between z-10 ">
            <IonButton
              fill="clear"
              className="m-0 p-0 min-w-0 h-7 w-7"
              style={{ color: "#222" }}
            >
              <IonIcon icon={chevronBackOutline} slot="icon-only" className="w-6 h-6" />
            </IonButton>
            <button className="text-sm font-inter font-normal text-[#222]">
              Skip for now
            </button>
          </div>

          <div className="px-2 flex flex-col items-center justify-evenly w-full max-w-md flex-1 overflow-y-auto z-10">
            <img
              src="/assets/images/logo.png"
              alt="Logo"
              className="w-auto h-auto object-contain my-6"
            />

            <form
              className="w-full flex flex-col gap-4 mt-6"
              onSubmit={handleSubmit}
            >
              <CustomInputForm
                label="Email"
                name="email"
                placeholder="Enter email / Number"
                value={formData.email}
                onChange={handleChange("email")}
                error={errors.email}
                type="email"
                className="bg-[#f2f9fc] text-[#70C0E2FF] placeholder-[#70c0e2] pl-10 "
                icon={
                  <IonIcon
                    icon={mailOutline}
                    className="w-5 h-5"
                    style={{ color: "#147ba7" }}
                  />
                }
              />

              <CustomInputForm
                label="Password"
                name="password"
                placeholder="Create Password"
                value={formData.password}
                onChange={handleChange("password")}
                error={errors.password}
                type="password"
                className="bg-[#f2f9fc] text-[#70C0E2FF] placeholder-[#70c0e2] pl-10"
                icon={
                  <IonIcon
                    icon={lockClosedOutline}
                    className="w-5 h-5"
                    style={{ color: "#147ba7" }}
                  />
                }
                iconRight={
                  <IonIcon
                    icon={eyeOutline}
                    className="w-5 h-5"
                    style={{ color: "#147ba7" }}
                  />
                }
              />

              <div className="flex items-center justify-between text-xs ">
                <label className="flex items-center text-[#6096ba]">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={handleCheckboxChange}
                    className="sr-only"
                  />
                  <span
                    className={`w-4 h-4 mr-1 flex items-center justify-center border border-gray-300 rounded-sm ${rememberMe
                      ? "bg-[#1c5d8e] border-[#1c5d8e]"
                      : ""
                      }`}
                  >
                    {rememberMe && (
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </span>
                  Remember me
                </label>

                <button
                  className="text-[#1c5d8e] font-semibold"
                  onClick={() => ionRouter.push("/forgot-password", "none", "replace")}
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="button"
                className="w-full text-[#1c5d8e] font-semibold text-md pt-4 flex justify-center font-inter"
                onClick={() => ionRouter.push("/message-otp", "none", "replace")}
              >
                Login through OTP
              </button>

              <CustomButton
                text="Sign In"
           
                className="w-full h-10 text-md font-medium bg-custom-blue text-white rounded-md"
              />
            </form>

            {/* Sign up */}
            <div className="w-full text-center mt-4 text-sm font-semibold">
              <span className="text-black text-base font-inter">Don't have an account? </span>
              <button
                className="text-[#1c5d8e] font-inter text-base font-semibold"
                onClick={() => ionRouter.push("/sign-up")}
              >
                Sign up
              </button>
            </div>

            {/* Social logins */}
            <div className="w-full pt-4 pb-6">
              <div className="flex items-center justify-center mb-2">
                <span className="text-sm font-inter font-semibold text-[#1c5d8e]">
                  OR CONTINUE WITH
                </span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <button className="px-2 rounded-full border border-gray-300 bg-white hover:bg-gray-100">
                  <IonIcon icon={logoGoogle} className="w-8 h-8 text-[#323743]" />
                </button>
                <button className="px-2 rounded-full border border-gray-300 bg-white hover:bg-gray-100">
                  <IonIcon icon={logoFacebook} className="w-8 h-8 text-[#323743]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SignIn;
