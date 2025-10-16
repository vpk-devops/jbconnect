import { IonContent, IonIcon } from "@ionic/react";
import { keyOutline } from "ionicons/icons";
import { useState, useRef, KeyboardEvent } from "react";
import CustomInputForm from "../../components/Common/CustomInputForm/CustomInputForm";
import CustomButton from "../../components/Common/CustomButton/CustomButton";
import Header from "../../components/Header/Header";
import PageLayout from "../../components/Layout/Layout";

type InputChangeEvent = CustomEvent<{ value: string | undefined | null }>;

const EmailOTP: React.FC = () => {
    const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
    const inputRefs = useRef<(HTMLIonInputElement | null)[]>([]);

    const handleChange = (e: InputChangeEvent, index: number) => {
        const value = e.detail.value ?? "";
        if (isNaN(Number(value))) {
            return;
        }

        const newOtp = [...otp];
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);
        if (value && index < 5) {
            setTimeout(() => inputRefs.current[index + 1]?.setFocus(), 0);
        }
    };

    const handleKeyDown = (
        e: KeyboardEvent<HTMLIonInputElement>,
        index: number
    ) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            setTimeout(() => inputRefs.current[index - 1]?.setFocus(), 0);
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData("text");
        if (/^\d{6}$/.test(pastedData)) {
            const newOtp = pastedData.split("");
            setOtp(newOtp);
            setTimeout(() => inputRefs.current[5]?.setFocus(), 0);
        }
    };

    return (
        <PageLayout
            header={<Header title="Email OTP" type="page" showRightIcon={false} />}
        >
            <IonContent>
                <div className="w-full h-full flex flex-col bg-[rgba(163,206,241,0.3)]">
                    <div className="flex flex-1 justify-center items-center px-4 py-8">
                        <div className="w-full max-w-[400px] bg-white rounded-xl shadow-md px-6 py-8 flex flex-col items-start">
                            <div className="self-center w-20 h-20 rounded-full bg-white border-2 border-[#222] flex items-center justify-center mb-4">
                                <IonIcon
                                    icon={keyOutline}
                                    className="w-12 h-12"
                                    style={{ color: "#274C77" }}
                                />
                            </div>
                            <h2 className="text-lg font-bold text-black mb-1font-inter">
                                Enter your OTP Code
                            </h2>
                            <p className="text-xs  text-[#222] mb-4 max-w-xs font-inter">
                             Enter the OTP Code received on your mail abc****mail.com
                            </p>
                            <form className="w-full flex flex-col gap-3 mt-3">
                                <div
                                    className="flex justify-between items-center gap-2 mb-2 w-full"
                                    onPaste={handlePaste}
                                >
                                    {otp.map((data, idx) => (
                                        <CustomInputForm
                                            key={idx}
                                            ref={(el) => {
                                                // inputRefs.current[idx] = el;
                                            }}
                                            label=""
                                            name={`otp-${idx}`}
                                            value={data}
                                            onChange={(e: InputChangeEvent) => handleChange(e, idx)}
                                            onKeyDown={(e: KeyboardEvent<HTMLIonInputElement>) =>
                                                handleKeyDown(e, idx)
                                            }
                                            type="tel"
                                            maxLength={1}
                                            className="w-12 h-12 text-center border border-[#BDC1CA] rounded-[6px] text-lg font-semibold focus:outline-none focus:border-[#1c5d8e] bg-transparent mb-0"
                                        />
                                    ))}
                                </div>
                                <CustomButton
                                    text="Submit OTP"
                                    onClick={() => alert(`Entered OTP: ${otp.join("")}`)}
                                    className="h-12 text-base  font-medium bg-[#274C77] text-white"
                                />
                            </form>
                            <a
                                href="#"
                                className="text-sm font-medium text-[#0090FFFF] self-center mt-4 underline"
                            >
                                Change Mail id
                            </a>
                        </div>
                    </div>
                </div>
            </IonContent>
        </PageLayout>
    );
};

export default EmailOTP;
