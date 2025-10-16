import { IonPage, IonContent } from '@ionic/react';
import CustomButton from '../../components/Common/CustomButton/CustomButton';

const RoleLogin: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen className="relative bg-white font-intra">
                {/* Background Image */}
                <div
                    className="fixed inset-0 w-full h-full bg-center bg-cover z-0 pointer-events-none scale-125 transition-transform duration-300"
                    style={{
                        backgroundImage: `url('/assets/images/loginfilter.jpg')`,
                        opacity: 0.08,
                        backgroundPositionY: '40px',
                    }}
                />

                {/* Foreground Centered Content */}
                <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full max-w-sm mx-auto px-4 text-center">
                    {/* Logo */}
                    <img
                        src="/assets/images/logo.png"
                        alt="Logo"
                        className="h-auto w-auto mb-6"
                    />

                    <div>
                        <h2 className="text-2xl font-bold font-inter text-black mb-2">
                            Choose Your Type
                        </h2>
                        <p className="text-gray-600 text-base font-inter mb-8 leading-snug">
                            Choose whether you are looking to<br />
                            construct a house or you are a Professional
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-md border border-gray-200 w-full px-4 py-4 mb-6 flex flex-col items-center">
                        <div className="flex flex-row items-center justify-center mb-2">
                            <svg className="mr-2" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="#6096ba">
                                <circle cx="12" cy="8" r="4" strokeWidth="1.5" />
                                <path strokeWidth="1.5" d="M4 20c0-2.5 3.5-4 8-4s8 1.5 8 4" />
                            </svg>
                            <span className="text-3xl font-bold text-[#6096ba]">Customer</span>
                        </div>
                        <p className="text-sm text-black mb-4 font-inter">Sign up here to access your account.</p>
                        <CustomButton
                            text="Continue →"
                            className="w-full h-10 bg-[#1c5d8e] text-white"
                        />
                    </div>

                    {/* Professional Card */}
                    <div className="bg-white rounded-xl shadow-md border border-gray-200 w-full px-4 py-4 flex flex-col items-center">
                        <div className="flex flex-row items-center justify-center mb-2">
                            <svg className="mr-2" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="#6096ba">
                                <circle cx="12" cy="7" r="3.5" strokeWidth="1.5" />
                                <path strokeWidth="1.5" d="M4 20c0-2.5 3.5-4 8-4s8 1.5 8 4" />
                                <circle cx="18" cy="10" r="2" strokeWidth="1.2" />
                                <circle cx="6" cy="10" r="2" strokeWidth="1.2" />
                            </svg>
                            <span className="text-3xl font-bold text-[#6096ba]">Professional</span>
                        </div>
                        <p className="text-sm text-black mb-4 font-inter">Sign up here to access your account.</p>
                        <CustomButton
                            text="Continue →"
                            className="w-full h-10 bg-[#1c5d8e] text-white"
                        />
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default RoleLogin;
