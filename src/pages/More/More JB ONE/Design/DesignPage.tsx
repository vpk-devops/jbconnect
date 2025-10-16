
import { IonCard, IonCardContent, IonButton, IonIcon, IonContent, useIonRouter } from "@ionic/react";
import { alertCircleOutline, eyeOutline, heartOutline, optionsOutline } from "ionicons/icons";
import Header from "../../../../components/Header/Header";
import PageLayout from "../../../../components/Layout/Layout";
import StarRating from "../../../../components/Common/CustomStarRating/StarRating";
import { useState } from "react";
import { useLocation } from "react-router-dom";



const imagesData = [
    { label: "Elevation Plan", src: "/assets/images/plan.png" },
    { label: "Living Room layout", src: "/assets/images/house.png" },
    { label: "3D Floor Plan", src: "/assets/images/hall.png" },
    { label: "Kitchen Layout", src: "/assets/images/house.png" },
    { label: "Bed Room layout", src: "/assets/images/plan.png" },
    { label: "Elevation Plan", src: "/assets/images/house.png" },
    { label: "Kitchen Layout", src: "/assets/images/hall.png" },
    { label: "2D Floor Plan", src: "/assets/images/house.png" },
    { label: "Living Room layout", src: "/assets/images/house.png" },
    { label: "Bed Room layout", src: "/assets/images/house.png" },
];
const designers = [
    {
        name: 'Abhishek',
        role: '3D visualization Expert',
        title: 'Planner & Designer',
        image: '/assets/images/Designer1.jpg',
        rating: 4.5,
    },
    {
        name: 'Sophia Chen',
        role: '3D visualization Expert',
        title: 'Planner & Designer',
        image: '/assets/images/Designer1.jpg',
        rating: 4.5,
    },
    {
        name: 'Reena',
        role: '3D visualization Expert',
        title: 'Planner & Designer',
        image: '/assets/images/Designer1.jpg',
        rating: 4.5,
    },
];

const DesignPage = () => {
    const ionRouter = useIonRouter();
    const [selectedDesign, setSelectedDesign] = useState("All");

    return (
        <PageLayout header={<Header title="Model Info" type="page" />}>
            <IonCard className="!m-0 shadow-md border border-gray-200 p-4 mx-0 px-6">
                <div className="flex justify-between gap-6">
                    <img
                        src="/assets/images/design.png"
                        alt="Modern Villa"
                        className="w-28 h-28 object-cover rounded-xl"
                    />
                    <div className="flex flex-col justify-between flex-1">
                        <div>
                            <h2 className="text-lg font-semibold text-custom-blue font-archivo">Modern Villa Design</h2>
                            <div className="flex justify-between mt-1">
                                <p className="text-sm font-semibold text-custom-blue font-archivo">Residential</p>
                                <div className="mt-0.5 text-xs rounded-full flex align-center justify-center  w-16 text-custom-blue border border-[ #E7ECEFFF] bg-[#E7ECEFFF]">
                                    <IonIcon icon={heartOutline} className="mr-1 mt-0.5 text-sm " />
                                    <span className="text-sm font-medium ml-0.5">245</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 mt-2">
                            <div className="text-xs rounded-full flex align-center justify-center py-1 w-28 text-custom-blue border border-[ #E7ECEFFF] bg-[#E7ECEFFF]">
                                <IonIcon icon={alertCircleOutline} className="mr-1 mt-0.5 text-sm " />
                                <span className="text-sm font-medium ml-0.5">Overview</span>
                            </div>

                            <div onClick={() => {

                                ionRouter.push("/specificationsit");
                            }} className="text-xs rounded-full flex align-center justify-center py-1 w-36 text-custom-black border border-[ #E7ECEFFF] bg-[#E7ECEFFF]">
                                <IonIcon icon={optionsOutline} className="mr-1 mt-0.5 text-sm" />
                                <span className="text-sm font-medium ml-1">  Specifications</span>
                            </div>
                        </div>
                    </div>
                </div>

                <IonCardContent className="px-0">
                    <h2 className="!text-lg !font-semibold text-custom-blue font-archivo">Description</h2>
                    <p className="text-sm text-custom-black  font-inter">
                        A spacious modern villa with clean lines and minimalist aesthetics.
                        Features open floor plans, floor-to-ceiling windows, and sustainable
                        materials throughout.
                    </p>
                    <div className="flex gap-2 mt-4 flex-wrap">
                        <button
                            className={`text-xs font-semibold px-3 py-1 rounded-full ${selectedDesign === "All"
                                ? "bg-custom-blue text-white"
                                : "border border-gray-300 text-gray-700 bg-white"
                                }`}
                            onClick={() => {
                                setSelectedDesign("All");
                                ionRouter.push("/AllDesigns");
                            }}

                        >
                            All
                        </button>

                        <button
                            className={`text-xs font-semibold px-3 py-1 rounded-full ${selectedDesign === "2D"
                                ? "bg-custom-blue text-white"
                                : "border border-gray-300 text-gray-700 bg-white"
                                }`}
                            onClick={() => {
                                setSelectedDesign("2D");
                                ionRouter.push("/2DDesign");
                            }}

                        >
                            2D Design
                        </button>

                        <button
                            onClick={() => {
                                setSelectedDesign("3D");
                                ionRouter.push("/3DDesign");
                            }}
                            className={`text-xs font-semibold px-3 py-1 rounded-full ${selectedDesign === "3D"
                                ? "bg-custom-blue text-white"
                                : "border border-gray-300 text-gray-700 bg-white"
                                }`}
                        >
                            3D Design
                        </button>
                    </div>

                </IonCardContent>
            </IonCard>
            {/* images section */}
            <div className="pb-6 bg-[#E7ECEFFF] rounded-md shadow-[0_0_1px_#171a1f12,0_0_2px_#171a1f1F]">
                <div className="grid grid-cols-2 gap-4 px-5 py-4">
                    {imagesData.map((item, idx) => (
                        <div key={idx} className="relative">
                            <img
                                src={item.src}
                                alt={item.label}
                                className="w-full h-32 object-cover rounded-tl-xl rounded-tr-xl shadow"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gray-700 bg-opacity-80 text-white text-xs text-center py-1 ">
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="relative mx-auto w-10/12 sm:w-60 md:w-full  max-w-md flex flex-col items-center justify-center mt-4">
                    <img
                        src="/assets/images/hall.png"
                        alt="no-img"
                        className="w-full h-36 object-cover rounded-tl-xl rounded-tr-xl shadow"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gray-700 bg-opacity-80 text-white text-xs text-center py-1">
                        Full view & 360°

                    </div>
                </div>
                {/* designers section */}
                <div className=" px-5 mt-6">
                    <h2 className="text-lg font-semibold text-custom-blue font-archivo ml-1">Designer</h2>
                    <div className="space-y-1 mt-2">
                        {designers.map((designer, index) => (
                            <div
                                key={index}
                                className="flex items-start p-3 rounded-xl "
                            >
                                <img
                                    src={designer.image}
                                    alt={designer.name}
                                    className="w-12 h-12 rounded-full object-cover mr-4"
                                />

                                <div className="flex flex-col">
                                    <span className="font-semibold text-sm text-custom-blue">
                                        {designer.name}
                                    </span>
                                    <span className="text-[13px] text-[#8C8D8BFF]">
                                        {designer.role}
                                    </span>
                                    <span className="text-xs text-[#8C8D8BFF]">
                                        {designer.title}
                                    </span>
                                    <StarRating
                                        initialRating={designer.rating}
                                        editable={true}
                                        onRate={(val) => {
                                            console.log("Rated:", val);

                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default DesignPage;
