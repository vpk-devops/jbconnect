import {
    IonPage,
    IonContent,
    IonIcon,
    useIonRouter
} from "@ionic/react";
import {
    chevronBackOutline,
    chatbubblesOutline,
    attachOutline,
    happyOutline,
    imageOutline,
    micOutline,
    sendOutline,
} from "ionicons/icons";
import { useState } from "react";
import PageLayout from "../../../../components/Layout/Layout";
import Header from "../../../../components/Header/Header";

const StartChat: React.FC = () => {
    const ionRouter = useIonRouter();
    const [message, setMessage] = useState("");

    const handleSendMessage = () => {
        if (message.trim()) {
            console.log("Sending message:", message);
            setMessage("");
        }
    };

    const handleAttachment = () => {
        console.log("Attachment clicked");
    };

    const handleEmoji = () => {
        console.log("Emoji clicked");
    };

    const handleImage = () => {
        console.log("Image clicked");
    };

    const handleVoice = () => {
        console.log("Voice message clicked");
    };

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
                <div className="flex flex-col h-full">
                    {/* Header Card */}
                    <div className="px-4 py-4">
                        <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-between shadow-md">
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                                <div>
                                    <h3 className="text-base font-bold text-custom-black">Live Chat Support</h3>
                                    <p className="text-sm text-gray-600">Connect to JBConeX</p>
                                </div>
                            </div>
                            <span className="bg-green-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                                Online
                            </span>
                        </div>
                    </div>

                    {/* Chat Session */}
                    <div className="flex-1 px-4">
                        <h4 className="text-base font-bold text-custom-black mb-4">Chat Session</h4>
                        
                        {/* Chat Message */}
                        <div className="mb-4">
                            <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                                <p className="text-sm text-custom-black">
                                    Hello! I'm coolie from JBConeX support. How can I help you today?
                                </p>
                                <p className="text-xs text-gray-500 mt-2">9:41</p>
                            </div>
                        </div>
                    </div>

                    {/* Message Input Area */}
                    <div className="px-4 py-4 bg-white">
                        <div className="bg-white border border-gray-300 rounded-lg p-3 flex items-center">
                            {/* Left Icons */}
                            <div className="flex items-center space-x-1 mr-2">
                                <button
                                    onClick={handleAttachment}
                                    className="p-1 text-gray-500 hover:text-gray-700"
                                >
                                    <IonIcon icon={attachOutline} className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={handleEmoji}
                                    className="p-1 text-gray-500 hover:text-gray-700"
                                >
                                    <IonIcon icon={happyOutline} className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={handleImage}
                                    className="p-1 text-gray-500 hover:text-gray-700"
                                >
                                    <IonIcon icon={imageOutline} className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Message Input */}
                            <textarea
                                placeholder="Type a message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="flex-1 text-sm text-gray-900 placeholder-gray-500 focus:outline-none min-w-0 resize-none border-none bg-transparent"
                                rows={1}
                                style={{
                                    height: '40px',
                                    maxHeight: '40px',
                                    overflowY: 'auto',
                                    lineHeight: '20px',
                                    paddingTop: '8px',
                                    paddingBottom: '8px'
                                }}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        e.preventDefault();
                                        handleSendMessage();
                                    }
                                }}
                            />

                            {/* Right Icons */}
                            <div className="flex items-center space-x-1 ml-2">
                                <button
                                    onClick={handleVoice}
                                    className="p-1 text-gray-500 hover:text-gray-700"
                                >
                                    <IonIcon icon={micOutline} className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={handleSendMessage}
                                    disabled={!message.trim()}
                                    className={`p-1 ${
                                        message.trim() 
                                            ? 'text-[#23446C] hover:text-[#1a365d]' 
                                            : 'text-gray-400 cursor-not-allowed'
                                    }`}
                                >
                                    <IonIcon icon={sendOutline} className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </IonContent>
        </PageLayout>
    );
};

export default StartChat;
