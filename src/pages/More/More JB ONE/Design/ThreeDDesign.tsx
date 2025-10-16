import {
    IonPage,
    IonContent,
    IonSearchbar,
} from "@ionic/react";
import { useState } from "react";
import StarRating from "../../../../components/Common/CustomStarRating/StarRating";
import Header from "../../../../components/Header/Header";
import PageLayout from "../../../../components/Layout/Layout";

const designs = [
    {
        id: 1,
        title: "Revit Library 3D Model",
        author: "Marcus Johnson",
        authorImage: "/assets/images/Designer1.jpg",
        role: "3D Expert",
        rating: 4.9,
        image: "/assets/images/3D3.png",
    },
    {
        id: 2,
        title: "3D Floor Plan",
        author: "Sophia Chen",
        authorImage: "/assets/images/Designer2.jpg",
        role: "Senior Architect",
        rating: 4.8,
        image: "/assets/images/3D1.png",
    },
    {
        id: 3,
        title: "Modern House",
        author: "Marcus Johnson",
        authorImage: "/assets/images/Designer1.jpg",
        role: "3D Expert",
        rating: 4.9,
        image: "/assets/images/3D4.png",
    },
    {
        id: 4,
        title: "Modern Living Room",
        author: "Reena",
        authorImage: "/assets/images/Designer3.jpg",
        role: "3D Visualization",
        rating: 4.7,
        image: "/assets/images/3D2.png",
    },
    {
        id: 5,
        title: "Revit Library 3D Model",
        author: "Marcus Johnson",
        authorImage: "/assets/images/Designer1.jpg",
        role: "3D Expert",
        rating: 4.9,
        image: "/assets/images/3D3.png",
    },
    {
        id: 6,
        title: "3D Floor Plan",
        author: "Sophia Chen",
        authorImage: "/assets/images/Designer2.jpg",
        role: "Senior Architect",
        rating: 4.8,
        image: "/assets/images/3D1.png",
    },
];

const ThreeDDesignsPage: React.FC = () => {
    const [search, setSearch] = useState("");

    return (
        <PageLayout
            header={<Header title="3D Design" type="page" showRightIcon={false} />}
        >
            <IonContent >
                {/* Search Header */}
                <div className="px-4 pt-4 bg-[#E7ECEF99]">
                    <h2 className="text-lg font-bold text-center text-custom-blue mb-2">
                        Find Your Perfect Design……
                    </h2>
                    <IonSearchbar
                        value={search}
                        onIonInput={(e) => setSearch(e.detail.value!)}
                        placeholder="Search 3D Designs.…"
                        animated
                        className="!border-1 !boder-custom-blue"
                    />
                </div>

                <div className="bg-[#6096BAFF] ">
                    <div className="px-4 py-6  space-y-4 ">
                        {Array.from({ length: Math.ceil(designs.length / 2) }, (_, i) => {
                            const pair = designs.slice(i * 2, i * 2 + 2);
                            return (
                                <div key={i} className="grid grid-cols-2 gap-2 bg-white shadow-md rounded-lg">
                                    {pair.map((design) => (
                                        <div
                                            key={design.id}
                                            className="overflow-hidden"
                                        >
                                            <img
                                                src={design.image}
                                                alt={design.title}
                                                className="h-36 w-full object-contain rounded-lg"
                                            />
                                            <div className="p-3">
                                                <h3 className="text-sm font-semibold text-gray-800">
                                                    {design.title}
                                                </h3>
                                                <div className="flex items-center mt-2">
                                                    <img
                                                        src={design.authorImage}
                                                        alt={design.author}
                                                        className="w-6 h-6 rounded-full"
                                                    />
                                                    <div className="ml-2 text-xs leading-tight">
                                                        <p className="font-semibold text-gray-700">
                                                            {design.author}
                                                        </p>
                                                        <p className="text-gray-500">{design.role}</p>
                                                    </div>
                                                </div>
                                                <div className="mt-2">
                                                    <StarRating
                                                        initialRating={design.rating}
                                                        editable={false}
                                                        onRate={() => { }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                
                                    {pair.length < 2 && <div className="invisible" />}
                                </div>
                            );
                        })}
                    </div></div>

            </IonContent>
        </PageLayout>
    );
};

export default ThreeDDesignsPage;
