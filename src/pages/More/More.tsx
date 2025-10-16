import Header from "../../components/Header/Header";
import { IonContent, IonIcon, IonCard } from "@ionic/react";
import { useIonRouter } from "@ionic/react";
import PageLayout from "../../components/Layout/Layout";
import {
    helpCircleOutline,
    documentTextOutline,
    shieldCheckmarkOutline,
    trashOutline,
    logOutOutline,
    personOutline,
    peopleOutline,
    addOutline,
    cashOutline,
    newspaperOutline,
} from "ionicons/icons";
import blogIcon from "/assets/images/m1.png";
import designIcon from "/assets/images/m2.png";
import costIcon from "/assets/images/m3.png";
import legalIcon from "/assets/images/m4.png";
import estiamteIcon from "/assets/images/m5.png";
import mobileIcon from "/assets/svg/mobile.svg";
import {
    CustomUserCard,
    MoreCard,
} from "../../components/Common/CustomCards/CustomCards";

const More: React.FC = () => {
    const featureList = [
        {
            icon: costIcon,
            title: "Blog & Tips",
            subtitle: "Construction guides & articles",
             route: "/blogs",
        },
        {
            icon: designIcon,
            title: "Design",
            subtitle: "Home design tools",
             route: "/designview",
        },
        {
            icon: estiamteIcon,
            title: "Cost Estimator",
            subtitle: "Calculate project costs",
             route: "/cost-estimator",
        },
        {
            icon: blogIcon,
            title: "Legal Help Center",
            subtitle: "Legal assistance & docs",
             route: "/learnhelpcenter",
        },
        {
            icon: legalIcon,
            title: "Elevations",
            subtitle: "Building elevation designs",
             route: "/elevations",
        },
    ];
    const famiyList = [
        {
            icon: trashOutline,
            title: "Marry",
            subtitle: "Mother",
        },
        {
            icon: trashOutline,
            title: "Jhon Doe",
            subtitle: "Spouse",
        },
    ];
    const settingsOptions = [
        {
            icon: personOutline,
            label: "MyProfile",
            route: "/my-profile",
        },
        {
            icon: cashOutline,
            label: "Refer & Earn",
            route: "/refer",
        },
        {
            icon: helpCircleOutline,
            label: "FAQs",
            route: "/faqs",
        },
        {
            icon: newspaperOutline,
            label: "Terms & Conditions",
            route: "/terms",
        },
        {
            icon: shieldCheckmarkOutline,
            label: "Privacy Policy",
            route: "/privacy",
        },
        {
            icon: documentTextOutline,
            label: "Cancellation Policy",
            route: "/cancellation",
        },
        {
            icon: trashOutline,
            label: "Delete Account",
            route: "/delete-account",
            danger: true,
        },
        {
            icon: logOutOutline,
            label: "Logout",
            route: "/logout",
            danger: true,
        },
    ];

    const ionRouter = useIonRouter();
    return (
        <PageLayout header={<Header title="More" type="page" />}>
            <IonContent className="!py-0">
                {/* first section */}
                <CustomUserCard
                    name="John Doe"
                    email="john.doe@example.com"
                    role="Home Owner"
                    icon={personOutline}
                    onClick={() => ionRouter.push("/my-profile", "forward")}
                />
                {/* 2nd section */}
                <IonCard className="bg-white rounded-[6px] border border-custom-linegray shadow-[0_0_1px_#171a1f12,0_0_2px_#171a1f1F]">
                    <div className="flex items-center p-3 pt-5">
                        <img src={mobileIcon} className="w-8 h-8 text-custom-black" />
                        <h1 className="pl-5 font-inter text-2xl leading-[28px] font-normal text-custom-black">
                            More from JB One
                        </h1>
                    </div>
                    {featureList.map((item, index) => (
                        <MoreCard
                            key={index}
                            iconSrc={item.icon}
                            title={item.title}
                            subtitle={item.subtitle}
                            onClick={() => ionRouter.push(item.route, "forward", "replace")}
                        />
                    ))}
                </IonCard>
                {/* 3rd section */}
                <IonCard className="bg-white rounded-[6px] border border-custom-linegray shadow-[0_0_1px_#171a1f12,0_0_2px_#171a1f1F]">
                    <div className="flex items-center p-3 pt-5">
                        <IonIcon icon={peopleOutline} className="text-4xl text-black-700" />
                        <h1 className="pl-6 font-inter text-2xl leading-[28px] font-normal text-custom-black">
                            Family Members
                        </h1>
                    </div>
                    <IonCard
                        className=" w-[180px] h-[38px] mt-0  px-[12px] flex items-center justify-center bg-custom-blue opacity-100 border-none rounded-[8px] gap-[6px]"
                        onClick={() => ionRouter.push("/add-member", "forward")}
                    >
                        <IonIcon icon={addOutline} className="text-3xl text-white" />
                        <h1 className="pl-1 font-inter text-lg leading-[28px] font-normal text-white">
                            Add Member
                        </h1>
                    </IonCard>
                    <div>
                        {famiyList.map((item, index) => (
                            <MoreCard
                                key={index}
                                iconSrc={item.icon}
                                title={item.title}
                                subtitle={item.subtitle}
                                variant="right-icon"
                            />
                        ))}
                    </div>
                </IonCard>
                {/* last section */}
                <div>
                    {settingsOptions.map((data, index) => (
                        <CustomUserCard
                            key={index}
                            name={data.label}
                            icon={data.icon}
                            onClick={() =>
                                data.route && ionRouter.push(data.route, "forward")
                            }
                        />
                    ))}
                </div>
            </IonContent>
        </PageLayout>
    );
};
export default More;
