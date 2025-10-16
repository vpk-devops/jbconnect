import React from "react";
import PageLayout from "../../../../components/Layout/Layout";
import Header from "../../../../components/Header/Header";
import CustomButton from "../../../../components/Common/CustomButton/CustomButton";
import { IonIcon } from "@ionic/react";
import { callOutline, locationOutline } from "ionicons/icons";
import deepCleanIcon from "/assets/images/cleaning1.jpg";

const ContinueSummary: React.FC = () => {
  const saved = sessionStorage.getItem("bookingDetails");
  const data = saved ? JSON.parse(saved) : {};

  return (
    <PageLayout header={<Header title="Booking Details" type="page" showRightIcon={false} />}> 
      <div className="h-full px-8 py-4 overflow-auto font-inter">
        <div className="max-w-md mx-auto space-y-5">
        {/* Service */}
        <section>
          <h3 className="font-semibold text-[#171A1F] mb-2">Service</h3>
          <div className="flex items-start gap-2">
            <img src={deepCleanIcon} alt="Deep Cleaning" className="w-6 h-6 object-contain" />
            <div className="leading-4">
              <div className="text-[#171A1F] font-medium">Deep Cleaning</div>
              <div className="text-[10px] text-[#6B7280]">Residential Cleaning</div>
            </div>
          </div>
        </section>

        {/* Date & time */}
        <section>
          <h3 className="font-semibold text-[#171A1F] mb-2">Date & time</h3>
          <p className="text-sm text-[#111827]">{data?.date && data?.time ? `${data.date}, ${data.time}` : "Mon, Jun 5, 2025, 12:00pm"}</p>
        </section>

        {/* Location */}
        <section className="space-y-2">
          <h3 className="font-semibold text-[#171A1F]">Location</h3>
          <div className="flex items-start gap-2 text-sm text-[#111827]">
            <span className="w-5 h-5 rounded bg-[#E5EDFF] flex items-center justify-center mt-[2px]">
              <IonIcon icon={locationOutline} className="w-3.5 h-3.5 text-[#274C77]" />
            </span>
            <span>{data?.streetAddress || "#234, 7th block, jp nagar Bengalore"}</span>
          </div>
        </section>

        {/* Note */}
        <section>
          <h3 className="font-semibold text-[#171A1F] mb-2">Note</h3>
          <textarea
            value={data?.specialRequests || data?.additionalInfo || "Please pay special attention to the kitchen and bedroom. I have pet, so please be mindful of their presence."}
            readOnly
            className="w-full h-[120px] p-3 text-sm text-[#111827] bg-white rounded-md border border-[#274C77]"
          />
        </section>

        {/* Contact Information */}
        <section className="space-y-2">
          <h3 className="font-semibold text-[#171A1F]">Contact Information</h3>
          <div className="flex items-center gap-2 text-sm text-[#111827]">
            <span className="w-6 h-6 rounded bg-[#E5EDFF] flex items-center justify-center">
              <IonIcon icon={callOutline} className="w-3.5 h-3.5 text-[#274C77]" />
            </span>
            <span>Contact: {data?.phoneNumber || "+91- 9367853289"}</span>
          </div>
        </section>

        <div className="pt-2 flex justify-center">
          <CustomButton
            text="Confirm Booking"
            className="w-[177px] h-8 px-2 text-[12px] leading-[20px] font-normal text-white bg-[#274C77] border-0 rounded"
            onClick={() => (window.location.href = "/booking-confirmed")}
          />
        </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ContinueSummary;


