import { IonIcon, useIonRouter } from "@ionic/react";
import { chevronDownOutline, chevronUpOutline } from "ionicons/icons";
import { services } from './data';

interface ServiceGridProps {
    showAll: boolean;
    setShowAll: (value: boolean) => void;
}

const ServiceGrid: React.FC<ServiceGridProps> = ({ showAll, setShowAll }) => {
    const ionRouter = useIonRouter();
    const visibleServices = showAll ? services : services.slice(0, 4);

    return (
        <div>
            <div className="px-4 py-0">
                <h2 className="font-inter text-custom-blue text-xl font-bold mt-5">Our Services</h2>
                <div className="bg-[#F3F4F6FF] rounded-md shadow-[0_0_1px_#171a1f12,_0_0_2px_#171a1f1F] px-2 py-4">
                    <div className="grid grid-cols-4 gap-y-4  justify-items-center">
                        {visibleServices.map((service, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div onClick={() => {
                                    if (service.link) {
                                        ionRouter.push(service.link, "forward", "push");
                                    } else {
                                        console.log(`Clicked ${service.label}`);
                                    }
                                }} className="w-16 h-16 bg-custom-blue flex flex-col items-center justify-center rounded-full text-white shadow-md text-center">
                                    <IonIcon icon={service.icon} className="text-xl mb-1" />
                                    <span className="text-[8px] leading-[12px] font-normal font-inter">
                                        {service.label}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    {services.length > 4 && (
                        <div className="flex justify-center mt-4">
                            <button
                                onClick={() => setShowAll(!showAll)}
                                className="text-[#23476D] text-sm flex items-center gap-1"
                            >
                                {showAll ? (
                                    <>
                                        Show Less <IonIcon icon={chevronUpOutline} />
                                    </>
                                ) : (
                                    <>
                                        Show More <IonIcon icon={chevronDownOutline} />
                                    </>
                                )}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ServiceGrid;
