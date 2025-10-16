import React from "react";
import { IonCard, useIonRouter } from "@ionic/react";
import CustomButton from "../../../components/Common/CustomButton/CustomButton";
import { HowItWorksCard } from "../../../components/Common/CustomCards/CustomCards";
import { bookOutline, cartOutline, cartSharp, idCardOutline, locationOutline } from "ionicons/icons";
const steps = [
    {
        step: 1,
        icon: locationOutline,
        title: "Locate Professional based on your Requirement",
        description: "By search or by selecting your category of requirement choose a professional of your choice",
    },
    {
        step: 2,
        icon: cartOutline,
        title: "Add your problem to cart",
        description: "Select your problem and add that to cart",
    },
    {
        step: 3,
        icon: idCardOutline,
        title: "Select Professional of your choice",
        description: "Choose from wide variety of people any one who suits your requirement from our best professionals. Locate who is near or one who suits best for your requirement, book instant or schedule your time for booking.",
    },
    {
        step: 4,
        icon: bookOutline,
        title: "Book service Schedule or Book Instant",
        description: "Once you choose your desired agent or professionals, proceed with booking process, you can schedule your booking slot or in case of emergency instantly you can book and our agent will arrive at your doorstep.",
    },
];

const ReferWorkSection: React.FC = () => {
      const ionRouter = useIonRouter();
    return (
        <>
            <IonCard className="flex justify-between items-center p-4 !mx-0 !rounded-lg !my-2 font-inter w-full shadow-md">
                <div className="w-3.2/4">
                    <h2 className="text-lg sm:text-lg font-medium text-custom-blue leading-[26px] w-70">
                        Refer a friend and enjoy 20% off on your next service!
                    </h2>
                    <p className="text-xs sm:text-sm text-custom-gray mt-2">
                        Invite others and earn ₹100 for every successful referral!
                    </p>
                    <CustomButton
                        text="Refer now"
                        className="!mt-3 bg-custom-blue text-white !w-32 !h-10 !rounded-md"
                        onClick={() => ionRouter.push("/refer", "forward", "push")}
                    />
                </div>
                <div className="w-2/4">
                    <img
                        src="/assets/images/refers.png"
                        alt="Refer Gift"
                        className=" !h-32 object-cover"
                    />
                </div>
            </IonCard>
            <div className="m-4">
               
                <IonCard className="!mx-0 my-2">
                     <h2 className=" text-lg font-bold text-custom-blue font-inter leading-7 p-4 pb-5">
                    How it Works ?
                </h2>
                {steps.map((step, index) => (
                    <HowItWorksCard
                        key={index}
                        step={step.step}
                        icon={step.icon}
                        title={step.title}
                        description={step.description}
                    />
                ))}
                </IonCard>
            </div>
        </>
    );
};

export default ReferWorkSection;
