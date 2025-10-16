import {
    IonPage,
    IonContent,
    IonButton,
    IonIcon,
    useIonRouter
} from "@ionic/react";
import {
    chevronBackOutline,
    mailOutline,
    lockClosedOutline,
    personOutline,
    logoGoogle,
    logoFacebook,
    eyeOutline,
    callOutline,
} from "ionicons/icons";
import CustomInputForm from "../../components/Common/CustomInputForm/CustomInputForm";
import CustomButton from "../../components/Common/CustomButton/CustomButton";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { signUpUser } from "../../features/auth/authThunks";


const SignUp: React.FC = () => {
     const dispatch = useAppDispatch();
      const ionRouter = useIonRouter();
       const { loading, error, token } = useAppSelector((state) => state.auth);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        agreement: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [agreement, setAgreement] = useState(false);


    const handleChange = (field: string) => (e: any) => {
        setFormData({
            ...formData,
            [field]: e.detail ? e.detail.value : e.target.value,
        });
        setErrors({ ...errors, [field]: "" });
    };

    const handleAgreementChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAgreement(e.target.checked);
        setErrors({ ...errors, agreement: "" });
    };

const handleSubmit = async (e?: React.FormEvent) => {
    
  if (e) e.preventDefault();

  const newErrors: any = {};
  if (!formData.firstName) newErrors.firstName = "First name is required";
  if (!formData.lastName) newErrors.lastName = "Last name is required";
  if (!formData.email) newErrors.email = "Email is required";
  if (!formData.phone) newErrors.phone = "Phone number is required";
  if (!formData.password) newErrors.password = "Password is required";
  if (!formData.confirmPassword)
    newErrors.confirmPassword = "Confirm password is required";
  if (
    formData.password &&
    formData.confirmPassword &&
    formData.password !== formData.confirmPassword
  )
    newErrors.confirmPassword = "Passwords do not match";
  if (!agreement)
    newErrors.agreement = "You must agree to the Terms and Privacy Policy";

  setErrors(newErrors);

//   if (Object.keys(newErrors).length === 0) {
//     try {
//       const payload = {
//         firstName: formData.firstName ,
//         lastName:formData.lastName,
//         email: formData.email,
//         phone: formData.phone,
//         password: formData.password,
//       };

//       const data = await signUpApi(payload); 
//       console.log("Signup success:", data);
//       alert("Signup success")

//       ionRouter.push("/sign-in", "forward");
//     } catch (error: any) {
//       console.error("Signup failed:", error.response?.data || error.message);
//       alert(error.response?.data?.message || "Signup failed");
//     }
//   }
 if (Object.keys(newErrors).length === 0) {
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: Number(formData.phone),
        password: formData.password,
      };

    dispatch(signUpUser(payload))
    .unwrap()
    .then((res) => {
      console.log("Signup success:", res);
      alert("Signup success");
      ionRouter.push("/sign-in", "forward");
    })
    .catch((err) => {
      console.error("Signup failed:", err);
      alert(err?.message || "Signup failed");
    });

    }

};
    return (
        <IonPage>
            <IonContent className="bg-white relative font-intra">
                <div
                    className="fixed top-0 left-0 w-full h-full rounded-none pointer-events-none z-10"
                    style={{
                        backgroundImage: "url('/assets/images/signin.png')",
                        backgroundSize: "470%",
                        backgroundPosition: "80% 80%",
                        opacity: 0.09,
                        backgroundRepeat: "no-repeat",
                        backgroundColor: "transparent",
                        zIndex: 0,
                    }}
                ></div>
                {/* Top bar */}
                <div
                    className="flex items-center justify-between px-2 pt-2 w-full max-w-md mx-auto"
                    style={{ position: "relative", zIndex: 20 }}
                >
                    <IonButton
                        fill="clear"
                        className="m-0 p-0 min-w-0 h-7 w-7 flex items-center justify-center"
                        style={{ color: "#222" }}
                    >
                        <IonIcon
                            icon={chevronBackOutline}
                            slot="icon-only"
                            className="w-6 h-6"
                        />
                    </IonButton>
                </div>
                {/* Main content */}
                <div className="flex flex-col items-center   w-full max-w-md mx-auto px-4 mb-6 sm:mb-0 relative z-10">
                    {/* Logo */}
                    <div className="w-full flex flex-col items-center ">
                        <img
                            src="/assets/images/logo.png"
                            alt="Logo"
                            className="w-auto h-auto object-contain"
                        />
                    </div>
                    {/* Form */}
                    <div className="w-full max-w-md flex flex-col  px-2 mt-10">
                        <form
                            className="w-full flex flex-col gap-2"
                            onSubmit={handleSubmit}
                        >
                            <CustomInputForm
                                label="First Name"
                                name="firstName"
                                placeholder="Enter First name"
                                value={formData.firstName}
                                onChange={handleChange("firstName")}
                                error={errors.firstName}
                                type="text"
                                className="border-blue !bg-[#F2F9FCFF] text-[#70c0e2ff] pl-10 placeholder-[#57bfeb]"
                                icon={
                                    <IonIcon
                                        icon={personOutline}
                                        className=" text-[#70c0e2ff] w-5 h-5"
                                    />
                                }
                            />
                            <CustomInputForm
                                label="Last Name"
                                name="lastName"
                                placeholder="Enter Last name"
                                value={formData.lastName}
                                onChange={handleChange("lastName")}
                                error={errors.lastName}
                                type="text"
                                className="border-blue !bg-[#F2F9FCFF] text-[#70c0e2ff] pl-10 placeholder-[#57bfeb]"
                                icon={
                                    <IonIcon
                                        icon={personOutline}
                                        className=" text-[#70c0e2ff] w-5 h-5"
                                    />
                                }
                            />
                            <CustomInputForm
                                label="Email"
                                name="email"
                                placeholder="Enter email / Number"
                                value={formData.email}
                                onChange={handleChange("email")}
                                error={errors.email}
                                type="email"
                                className="border-blue !bg-[#F2F9FCFF] text-[#70c0e2ff] pl-10 placeholder-[#57bfeb]"
                                icon={
                                    <IonIcon
                                        icon={mailOutline}
                                        className=" text-[#70c0e2ff] w-5 h-5"
                                    />
                                }
                            />
                            <CustomInputForm
                                label="Phone Number"
                                name="phone"
                                placeholder="Enter Phone Number"
                                value={formData.phone}
                                onChange={handleChange("phone")}
                                error={errors.phone}
                                type="tel"
                                className="border-blue !bg-[#F2F9FCFF] text-[#70c0e2ff] pl-10 placeholder-[#57bfeb]"
                                icon={
                                    <IonIcon
                                        icon={callOutline}
                                        className=" text-[#70c0e2ff] w-5 h-5"
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
                                type={showPassword ? "text" : "password"}
                                className="border-blue !bg-[#F2F9FCFF] placeholder-[#57bfeb] text-[#70c0e2ff] pl-10"
                                icon={
                                    <IonIcon
                                        icon={lockClosedOutline}
                                        className="text-[#57bfeb] w-5 h-5"
                                    />
                                }
                                iconRight={
                                    <IonIcon
                                        icon={eyeOutline}
                                        className="text-[#57bfeb] w-5 h-5 cursor-pointer"
                                        onClick={() => setShowPassword(!showPassword)}
                                    />
                                }
                            />
                            <CustomInputForm
                                label="Confirm Password"
                                name="confirmPassword"
                                placeholder="Confirm password"
                                value={formData.confirmPassword}
                                onChange={handleChange("confirmPassword")}
                                error={errors.confirmPassword}
                                type={showConfirmPassword ? "text" : "password"}
                                className="border-blue !bg-[#F2F9FCFF] placeholder-[#57bfeb] text-[#70c0e2ff] pl-10"
                                icon={
                                    <IonIcon
                                        icon={lockClosedOutline}
                                        className="text-[#57bfeb] w-5 h-5"
                                    />
                                }
                                iconRight={
                                    <IonIcon
                                        icon={eyeOutline}
                                        className="text-[#57bfeb] w-5 h-5 cursor-pointer"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    />
                                }
                            />
                            <div className="flex items-center mt-1 text-xs">
                                <label className="flex items-center cursor-pointer select-none text-[#6096ba]">
                                    <input
                                        type="checkbox"
                                        checked={agreement}
                                        onChange={handleAgreementChange}
                                        className="mr-2 accent-[#1c5d8e]"
                                    />
                                     {errors.agreement && <p className="error">{errors.agreement}</p>}
                                    <span className="text-[#171a1f] font-inter ">
                                        I agree to the{" "}
                                        <span className="underline cursor-pointer font-inter">
                                            Terms and Condition
                                        </span>{" "}
                                        and{" "}
                                        <span className="underline cursor-pointer font-inter">
                                            Privacy Policy
                                        </span>
                                    </span>
                                </label>
                            </div>
                            {errors.agreement && (
                                <div className="text-red-500 text-xs mt-1">
                                    {errors.agreement}
                                </div>
                            )}
                            <CustomButton
                                text="Create Account"
                          
                         
                                className="w-full !mt-3 h-10  bg-custom-blue text-white cursor-pointer"
                            />
                        </form>
                        <div className="w-full text-center mt-3 text-[15px] font-semibold">
                            <span className="text-black text-base font-inter">Already have an account ? </span>
                            <button  className="text-[#1c5d8e] font-semibold font-inter text-base bg-transparent border-none" onClick={() => ionRouter.push("/sign-in", "none", "replace")}>
                                Sign in
                            </button>
                        </div>
                        <div className="w-full mt-4">
                            <div className="flex items-center justify-center mb-2">
                                <span
                                    className="text-sm font-inter font-semibold"
                                    style={{ color: "#1c5d8e" }}
                                >
                                    OR CONTINUE WITH
                                </span>
                            </div>
                            <div className="flex items-center justify-center space-x-2 pb-12">
                                <button className="px-2 rounded-full border border-gray-300 hover:bg-gray-100 bg-white flex items-center justify-center">
                                    <IonIcon
                                        icon={logoGoogle}
                                        className="w-10 h-10 text-black"
                                        style={{ color: "#323743" }}
                                    />
                                </button>
                                <button className="px-2 rounded-full border border-gray-300 hover:bg-gray-100 bg-white flex items-center justify-center">
                                    <IonIcon
                                        icon={logoFacebook}
                                        className="w-10 h-10 text-black"
                                        style={{ color: "#323743" }}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default SignUp;
