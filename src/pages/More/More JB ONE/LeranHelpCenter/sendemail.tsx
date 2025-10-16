import {
    IonPage,
    IonContent,
    IonButton,
    IonIcon,
    useIonRouter
} from "@ionic/react";
import {
    chevronBackOutline,
    chevronDownOutline,
    mailOutline,
    personOutline,
    callOutline,
    documentTextOutline,
    flagOutline,
    downloadOutline,
} from "ionicons/icons";
import { useState } from "react";

import PageLayout from "../../../../components/Layout/Layout";
import Header from "../../../../components/Header/Header";
import CustomInputForm from "../../../../components/Common/CustomInputForm/CustomInputForm";
import CustomButton from "../../../../components/Common/CustomButton/CustomButton";

const SendEmail: React.FC = () => {
    const ionRouter = useIonRouter();
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        subject: "",
        category: "General Inquiry",
        priority: "Medium",
        message: "",
    });
    const [errors, setErrors] = useState({
        fullName: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (field: string) => (e: any) => {
        setFormData({
            ...formData,
            [field]: e.detail ? e.detail.value : e.target.value,
        });
        setErrors({ ...errors, [field]: "" });
    };

    const handleSubmit = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        const newErrors: any = {};
        if (!formData.fullName) newErrors.fullName = "Full name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.subject) newErrors.subject = "Subject is required";
        if (!formData.message) newErrors.message = "Message is required";
        
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            console.log("Email support form submitted:", formData);
            alert("Your support request has been sent successfully!");
            ionRouter.back();
        }
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
                <div className="px-4 py-6">
                    <div className="max-w-md mx-auto">
                        <div className="text-left mb-6">
                            <h2 className="text-xl font-bold text-custom-black mb-2">Send Email Support</h2>
                            <p className="text-sm text-gray-600">
                                Send us a detailed message and we'll get back to you with a comprehensive response.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <h3 className="text-lg font-semibold text-custom-black mb-4">Contact form</h3>
                            
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <CustomInputForm
                                    label="Full Name *"
                                    name="fullName"
                                    placeholder="Your full name"
                                    value={formData.fullName}
                                    onChange={handleChange("fullName")}
                                    error={errors.fullName}
                                    type="text"
                                     className="!bg-white text-custom-black pl-10 placeholder-gray-500 border border-[#274c77]"
                                     icon={
                                         <IonIcon
                                             icon={personOutline}
                                             className="text-gray-500 w-5 h-5"
                                         />
                                     }
                                />

                                <CustomInputForm
                                    label="Email Address *"
                                    name="email"
                                    placeholder="Your email id"
                                    value={formData.email}
                                    onChange={handleChange("email")}
                                    error={errors.email}
                                    type="email"
                                     className="!bg-white text-custom-black pl-10 placeholder-gray-500 border border-[#274c77]"
                                     icon={
                                         <IonIcon
                                             icon={mailOutline}
                                             className="text-gray-500 w-5 h-5"
                                         />
                                     }
                                />

                                <CustomInputForm
                                    label="Subject *"
                                    name="subject"
                                    placeholder="Brief description of your issue"
                                    value={formData.subject}
                                    onChange={handleChange("subject")}
                                    error={errors.subject}
                                    type="text"
                                     className="!bg-white text-custom-black pl-10 placeholder-gray-500 border border-[#274c77]"
                                     icon={
                                         <IonIcon
                                             icon={documentTextOutline}
                                             className="text-gray-500 w-5 h-5"
                                         />
                                     }
                                />

                                <div className="space-y-2">
                                    <label className="block text-base font-medium text-custom-black">
                                        Category
                                    </label>
                                    <div className="relative group">
                                        <select
                                            name="category"
                                            value={formData.category}
                                            onChange={handleChange("category")}
                                            className="w-full p-3 border border-[#274c77] rounded-lg bg-white text-[#274c77] appearance-none focus:outline-none focus:ring-2 focus:ring-[#274c77] focus:border-[#274c77] cursor-pointer transition-all duration-200 hover:border-[#1a365d]"
                                        >
                                            <option value="General Inquiry">General Inquiry</option>
                                            <option value="Technical Support">Technical Support</option>
                                            <option value="Billing Issue">Billing Issue</option>
                                            <option value="Feature Request">Feature Request</option>
                                            <option value="Bug Report">Bug Report</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                            <IonIcon icon={chevronDownOutline} className="w-5 h-5 text-[#274c77] transition-transform duration-200 group-hover:scale-110" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-base font-medium text-custom-black">
                                        Priority
                                    </label>
                                    <div className="relative group">
                                        <select
                                            name="priority"
                                            value={formData.priority}
                                            onChange={handleChange("priority")}
                                            className="w-full p-3 border border-[#274c77] rounded-lg bg-white text-[#274c77] appearance-none focus:outline-none focus:ring-2 focus:ring-[#274c77] focus:border-[#274c77] cursor-pointer transition-all duration-200 hover:border-[#1a365d]"
                                        >
                                            <option value="Low">Low</option>
                                            <option value="Medium">Medium</option>
                                            <option value="High">High</option>
                                            <option value="Urgent">Urgent</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                            <IonIcon icon={chevronDownOutline} className="w-5 h-5 text-[#274c77] transition-transform duration-200 group-hover:scale-110" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-base font-medium text-custom-black">
                                        Message *
                                    </label>
                                                                         <textarea
                                         name="message"
                                         placeholder="Please provide detailed information about your issue or question..."
                                         value={formData.message}
                                         onChange={handleChange("message")}
                                         className="w-full p-3 border border-[#274c77] rounded-lg bg-white text-custom-black placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-[#274c77] focus:border-[#274c77]"
                                         rows={6}
                                     />
                                    {errors.message && (
                                        <div className="text-red-500 text-xs">
                                            {errors.message}
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-base font-medium text-custom-black">
                                        Attachments (Optional)
                                    </label>
                                    <div className="border-2 border-dashed border-[#274c77] rounded-lg p-6 text-center">
                                        <IonIcon icon={downloadOutline} className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                        <p className="text-sm text-gray-500 mb-1">
                                            Click to upload files or drag and drop
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            PNG, JPG, PDF up to 10MB
                                        </p>
                                    </div>
                                </div>

                                <div className="flex justify-center !mt-6">
                                    <CustomButton
                                        text="Send Email"
                                        onClick={handleSubmit}
                                        className="w-auto h-10 bg-[#23446C] text-white text-sm font-semibold rounded-lg px-6"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </IonContent>
        </PageLayout>
    );
};

export default SendEmail;
