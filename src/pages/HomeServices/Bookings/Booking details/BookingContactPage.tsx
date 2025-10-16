import React, { useState } from "react";
import { IonIcon, useIonRouter } from "@ionic/react";
import { callOutline, chatbubbleOutline, star } from "ionicons/icons";
import Header from "../../../../components/Header/Header";
import PageLayout from "../../../../components/Layout/Layout";
import CustomButton from "../../../../components/Common/CustomButton/CustomButton";
import CustomInputForm from "../../../../components/Common/CustomInputForm/CustomInputForm";

const BookingContactPage: React.FC = () => {
  const ionRouter = useIonRouter();
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ subject?: string; message?: string }>({});


  const handleSendMessage = () => {
    let newErrors: { subject?: string; message?: string } = {};

    if (!subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Send message:", { subject, message });
       ionRouter.push("/home-services/bookings", "forward", "push")
    }
  };


  return (
    <PageLayout
      header={<Header title="Contact Provider" type="page" showRightIcon={false} />}
    >
      {/* Contact Provider */}
      <div className="bg-[#6096BA] rounded-lg p-4 mb-4 mt-2 mx-3">
        <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4">
          <CustomButton
            text="Contact"
            icon="callOutline"
            onClick={() => console.log("Contact clicked")}
            className="w-full h-[36px] px-3 flex items-center justify-center font-inter text-sm text-white bg-[#274C77] border-none rounded-md gap-1.5 [&>ion-icon]:w-4 [&>ion-icon]:h-4 [&>ion-icon]:text-white"
          />
          <CustomButton
            text="Chat"
            icon="chatbubbleOutline"
            onClick={() => console.log("Chat clicked")}
            className="w-full h-[36px] px-3 flex items-center justify-center font-inter text-sm text-white bg-[#274C77] border-none rounded-md gap-1.5 [&>ion-icon]:w-4 [&>ion-icon]:h-4 [&>ion-icon]:text-white"
          />
        </div>
        <div className="space-y-2 text-sm text-white">
          <div>
            <span className="font-bold">Phone:</span> (614) 878-1487
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold">Rating:</span>
            <IonIcon icon={star} className="w-4 h-4 text-yellow-400" />
            <span>4.8</span>
          </div>
        </div>
      </div>

      {/* Send a Message */}
      <div
        className="bg-white rounded-lg p-4 mb-6 mx-3"
        style={{
          boxShadow: "0px 8px 17px #171a1f26, 0px 0px 2px #171a1f1F",
        }}
      >
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Send a Message</h3>
        <div className="space-y-4">
          <CustomInputForm
            label="Subject"
            name="subject"
            placeholder="Regarding Living Room Painting on 2024-01-22"
            value={subject}
            onChange={(e) => {
              setSubject(e.detail.value || "");
              if (errors.subject) setErrors((prev) => ({ ...prev, subject: undefined })); // clear error
            }}
            error={errors.subject}
            className="border border-[#274C77] focus:border-[#274C77] focus:ring-1 focus:ring-[#274C77]"
          />

          <CustomInputForm
            label="Message"
            name="message"
            placeholder="Input text"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              if (errors.message) setErrors((prev) => ({ ...prev, message: undefined })); // clear error
            }}
            textarea={true}
            rows={4}
            error={errors.message}
            className="border border-[#274C77] focus:border-[#274C77] focus:ring-1 focus:ring-[#274C77]"
          />
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <CustomButton
              text="Send Message"
              onClick={handleSendMessage}
              className="w-full h-[36px] px-3 flex items-center justify-center font-inter text-sm text-white bg-[#274C77] border-none rounded-md"
            />
            <CustomButton
              text="Cancel"
              onClick={() => ionRouter.push("/home-services/bookings", "forward", "push")}
              className="w-full h-[36px] px-3 flex items-center justify-center font-inter text-sm text-[#274C77] bg-white border border-[#274C77] rounded-md"
            />
          </div>
        </div>
      </div>

      {/* Booking Details */}
      <div
        className="bg-white rounded-lg p-6 mx-4 mb-2"
        style={{
          boxShadow: "0px 8px 17px #171a1f26, 0px 0px 2px #171a1f1F",
        }}
      >
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Booking Details</h3>
        <div className="space-y-3">
          <div className="flex">
            <span className="text-sm font-bold text-gray-800 w-20">Service:</span>
            <span className="text-sm text-gray-800">Deep House Cleaning</span>
          </div>
          <div className="flex">
            <span className="text-sm font-bold text-gray-800 w-20">Date:</span>
            <span className="text-sm text-gray-800">2024-01-22</span>
          </div>
          <div className="flex">
            <span className="text-sm font-bold text-gray-800 w-20">Time:</span>
            <span className="text-sm text-gray-800">8:00 A.M</span>
          </div>
          <div className="flex">
            <span className="text-sm font-bold text-gray-800 w-20">Location:</span>
            <span className="text-sm text-gray-800">321 Elm Street</span>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default BookingContactPage;
