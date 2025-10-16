import {
    IonPage,
    IonContent,
    IonIcon,
    useIonRouter
} from "@ionic/react";
import {
    chevronBackOutline,
    callOutline,
    globeOutline,
    timeOutline,
    warningOutline,
} from "ionicons/icons";
import PageLayout from "../../../../components/Layout/Layout";
import Header from "../../../../components/Header/Header";


const PhoneCall: React.FC = () => {
    const ionRouter = useIonRouter();

    const handleEmergencyCall = () => {
        // Handle emergency call functionality
        console.log("Emergency call initiated");
        // You can add actual phone call functionality here
    };

    const handleRegionalCall = (phoneNumber: string) => {
        // Handle regional call functionality
        console.log(`Calling ${phoneNumber}`);
        // You can add actual phone call functionality here
    };

    const regionalSupportNumbers = [
        {
            country: "India",
            phoneNumber: "+91 (555) 123-4567",
            availability: "24/7 Available",
            status: "Available"
        },
        {
            country: "India",
            phoneNumber: "+91 (555) 123-4567",
            availability: "24/7 Available",
            status: "Available"
        }
    ];

    return (
        <PageLayout
            header={
                <Header
                    title=""
                    type="page"
                    showRightIcon={false}
                />
            }
        >
            <IonContent className="bg-white">
                <div className="px-4 py-6">
                    <div className="max-w-md mx-auto">
                        {/* Phone Support Description */}
                        <div className="text-left mb-6">
                            <h2 className="text-xl font-bold text-custom-black mb-2">Phone Support</h2>
                            <p className="text-sm text-gray-600">
                                Get immediate assistance from our construction experts. Available 24/7 for urgent matters.
                            </p>
                        </div>

                        {/* Safety Emergency Section */}
                        <div className="bg-[#fdf1f5] rounded-lg border-2 border-red-500 p-4 mb-6">
                            <div className="flex items-center mb-3">
                                <IonIcon icon={warningOutline} className="text-red-500 w-5 h-5 mr-2" />
                                <h3 className="text-lg font-bold text-red-500">Safety Emergency?</h3>
                            </div>
                            <p className="text-sm text-gray-700 mb-4">
                                For immediate safety emergencies on construction sites, call your local emergency services first, then contact our emergency line.
                            </p>
                                                         <button
                                 onClick={handleEmergencyCall}
                                 className="w-auto bg-red-500 text-white text-sm font-semibold rounded-lg flex items-center justify-start py-2 px-4"
                             >
                                 <IonIcon icon={callOutline} className="w-4 h-4 mr-2" />
                                 Emergency Line
                             </button>
                        </div>

                        {/* Regional Support Numbers */}
                        <div className="mb-6">
                            <h3 className="text-lg font-bold text-custom-black mb-4">Regional Support Numbers</h3>
                            <div className="space-y-4">
                                {regionalSupportNumbers.map((support, index) => (
                                    <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                        <div className="flex items-center justify-between">
                                            <div className="flex-1">
                                                <div className="flex items-center mb-2">
                                                    <IonIcon icon={globeOutline} className="text-[#23446C] w-5 h-5 mr-2" />
                                                    <span className="text-base font-semibold text-custom-black">{support.country}</span>
                                                </div>
                                                <div className="text-lg font-bold text-custom-black mb-1">
                                                    {support.phoneNumber}
                                                </div>
                                                <div className="flex items-center text-sm text-gray-600">
                                                    <IonIcon icon={timeOutline} className="w-4 h-4 mr-1" />
                                                    <span>{support.availability}</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-end space-y-2">
                                                <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                                                    {support.status}
                                                </span>
                                                                                                 <button
                                                     onClick={() => handleRegionalCall(support.phoneNumber)}
                                                     className="bg-custom-black text-white text-sm font-medium rounded-lg flex items-center justify-center px-3 py-2"
                                                 >
                                                     <IonIcon icon={callOutline} className="w-4 h-4 mr-1" />
                                                     Call now
                                                 </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Additional Information */}
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                            <h4 className="text-base font-semibold text-custom-black mb-2">Need Help?</h4>
                            <p className="text-sm text-gray-700">
                                Our construction experts are available 24/7 to assist you with any questions or concerns about your projects.
                            </p>
                        </div>
                    </div>
                </div>
            </IonContent>
        </PageLayout>
    );
};

export default PhoneCall;
