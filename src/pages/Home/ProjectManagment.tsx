import React from "react";
import { IonIcon, IonCard } from "@ionic/react";
import {
    flashOutline,
    todayOutline,
    chatboxEllipsesOutline,
    heartOutline,
    checkmarkCircleOutline,
    documentTextOutline,
    peopleOutline,
    cardOutline,
} from "ionicons/icons";
import {
    FlipCard,
    QuickStartCard,
} from "../../components/Common/CustomCards/CustomCards";
import CustomButton from "../../components/Common/CustomButton/CustomButton";
import CustomSwiperComponent from "../../components/Common/CustomSwiperSlider/CustomSwiperComponent";

const data = [
    { icon: "assets/svg/task1.png", label: "Task Management" },
    { icon: "assets/svg/task2.png", label: "Vendor Management" },
    { icon: "assets/svg/task3.png", label: "Attendance Management" },
    { icon: "assets/svg/task4.png", label: "Material Management" },
];
const assistFeatures = [
    {
        icon: heartOutline,
        title: "Trust & Transparency",
    },
    {
        icon: checkmarkCircleOutline,
        title: "Verified Professionals",
    },
    {
        icon: documentTextOutline,
        title: "100% Work Guarantee",
    },
    {
        icon: peopleOutline,
        title: "Dedicated Support",
    },
    {
        icon: cardOutline,
        title: "Payment Escrow",
    },
];
const EngineerPromoCard: React.FC = () => {
    return (
        <div className="my-4 ">
            {/* Engineer Section */}
            <div className="py-6 px-6 bg-[#B2E2FF] rounded-[6px] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1F] w-full ">
                <h2 className="text-lg sm:text-[20px] font-bold text-custom-blue mb-3">
                    Looking for Engineers/Contractors ?
                </h2>

                <div className="flex flex-col gap-2 text-custom-black text-lg font-medium mb-4">
                    <div className="flex items-center gap-2">
                        <IonIcon
                            icon={flashOutline}
                            className="text-lg text-custom-black "
                        />
                        <span>Faster response</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <IonIcon
                            icon={todayOutline}
                            className="text-base text-custom-black"
                        />
                        <span>Easy Availability</span>
                    </div>
                </div>

                <CustomButton
                    text="Post your Requirement for FREE"
                    className="bg-custom-blue hover:bg-[#0e4a7d] text-white text-sm font-medium w-fit"
                />
            </div>
            {/*Project Management Section */}
            <div className="p-4">
                <h2 className="text-lg sm:text-xl font-bold text-custom-blue">
                    Quick start Project Management
                </h2>
                <CustomSwiperComponent
                    items={data}
                    slidesPerView={2}
                    spaceBetween={12}
                    autoplay
                    breakpoints={{
                        480: { slidesPerView: 1.4 },
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 2.5 },
                        1024: { slidesPerView: 3 },
                    }}
                    renderItem={(item, idx) => (
                        <QuickStartCard key={idx} icon={item.icon} label={item.label} />
                    )}
                />


            </div>
            {/* Build from scracjh */}
            <div className="px-4 ">
                <FlipCard
                    title="Build From Scratch to Handover"
                    tag="We connect you with builders and manage layout, permits, labor, and finishing."
                    image="/assets/images/flips.jpg"
                    buttonText="Start your construction"
                    centeredLayout
                />
            </div>
            {/* Assit features */}
            <div className="mt-6 mx-6 bg-white">
                <h2 className="text-xl font-bold text-black mb-3">
                    How JB ConX Assists You
                </h2>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
                    {assistFeatures.slice(0, 4).map((item, index) => (
                        <IonCard
                            key={index}
                            className="p-4 mx-0 my-0 mt-1 flex flex-col items-center justify-center text-center bg-[#F7F7F780] rounded-[24px] border border-[#EBEBEA33] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1F]"
                        >
                            <IonIcon
                                icon={item.icon}
                                className="text-custom-blue text-3xl mb-3"
                            />
                            <p className="text-sm font-semibold font-archivo text-black">
                                {item.title}
                            </p>
                        </IonCard>
                    ))}
                </div>

                <div className="mt-5">
                    <div className="bg-[#F7F7F780] rounded-[24px] border border-[#EBEBEA33] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1F] p-4 flex flex-col items-center justify-center text-center ">
                        <IonIcon
                            icon={assistFeatures[4].icon}
                            className="text-custom-blue text-3xl mb-2"
                        />
                        <p className="text-sm font-semibold font-archivo text-black">
                            {assistFeatures[4].title}
                        </p>
                    </div>
                </div>
            </div>
            {/* testimonial sectiom */}
            <div className="bg-white rounded-xl  shadow-sm border border-[#E5E7EB] my-4 mx-4 pb-4">
                <div className="relative flex flex-col items-between">
                    <div className="w-full flex gap-2 bg-[#FFF6E4] h-36 px-6 pt-6 pb-20 rounded-t-xl">
                        <IonIcon
                            icon={chatboxEllipsesOutline}
                            className="text-[#1B365D] text-2xl mt-1"
                        />
                        <h3 className="text-[#323743EB] text-lg font-bold ml-1">
                            What our users have to say…
                        </h3>
                    </div>

                    <IonCard className="absolute bottom-4  max-w-md bg-white rounded-xl shadow-sm border border-[#F3F4F6] p-3">
                        <div className="flex  gap-3 mb-2 ">
                            <img
                                src="assets/images/D1.jpg"
                                alt="User"
                                className="w-16 h-16  rounded-full object-cover bg-blue-100 p-1"
                            />
                            <div>
                                <p className="text-base font-semibold text-black">Ram</p>
                                <p className="text-sm font-inter text-gray-500">
                                    Owner, Bangalore
                                </p>
                                <p className="text-sm text-custom-black font-bold leading-snug pt-3">
                                    <strong>"JBConX</strong> found us the perfect plot—quick,
                                    smooth, and stress-free!"
                                </p>
                            </div>
                        </div>
                        <a
                            href="#"
                            className="text-custom-blue text-base font-inter font-medium mt-1 inline-block"
                        >
                            Read Full Review
                        </a>
                    </IonCard>
                    <div className="h-32" />
                    <div className="px-6 pt-2 ">
                        <a
                            href="#"
                            className="text-custom-blue font-inter text-base font-medium "
                        >
                            View All testimonials{" "}
                            <span className="text-base font-bold ">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EngineerPromoCard;
