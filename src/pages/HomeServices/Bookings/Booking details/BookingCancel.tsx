import React, { useState } from 'react';
import { IonCard, IonCardContent } from '@ionic/react';
import { useIonRouter } from '@ionic/react';
import Header from '../../../../components/Header/Header';
import PageLayout from '../../../../components/Layout/Layout';
import CustomInputForm from '../../../../components/Common/CustomInputForm/CustomInputForm';
import CustomButton from '../../../../components/Common/CustomButton/CustomButton';

const CancelBookingPage: React.FC = () => {
  const [reason, setReason] = useState<string>('Weather conditions');
  const [details, setDetails] = useState<string>('');
  const ionRouter = useIonRouter();

  return (
    <PageLayout
      header={<Header title="Cancel Booking"
        type="page"
        showRightIcon={false} />}
    >
      <div className="px-3 pt-1 pb-4 space-y-4 font-inter">
        {/* Reason for Cancellation */}
        <IonCard
          className="bg-white rounded-md m-0 w-full"
          style={{
            borderRadius: '6px',
            boxShadow: '0px 8px 17px #171a1f26, 0px 0px 2px #171a1f1F',
          }}
        >
          <IonCardContent className="p-2">
            <h2 className="font-inter text-[16px] leading-[26px] !font-bold text-custom-black mb-3 px-3 py-1">Reason for Cancellation</h2>

            <CustomInputForm
              label=""
              name="cancelReason"
              value={reason}
              radioOptions={[
                'Schedule conflict',
                'No longer need the service',
                'Found another provider',
                'Emergency situation',
                'Weather conditions',
                'Other (please specify)',
              ]}
              radioValue={reason}
              onRadioChange={(val) => setReason(val)}
              className="!h-auto fon-inter"
            />

            <div className="mt-3 mx-2">
              <label className="block text-[15px] font-bold text-[#171A1F] mb-2 ">
                Please specify your reason
              </label>
              {/* <CustomInputForm
                label=""
                name="reasonDetailsShort"
                placeholder="Please provide details...."
                value={details}
                onChange={(e) => setDetails(e.detail.value || '')}
                className=" !w-50 h-[48px] font-inter text-[14px] leading-[22px] border border-[#274C77] rounded-[6px] [--padding-start:12px] [--padding-end:12px] [--placeholder-color:#BDC1CA] hover:border-[#274C77] focus:border-[#274C77] focus:shadow-[0_0_5px_#274c7733]"
              /> */}
              <CustomInputForm
                label=""
                name="notes"
                placeholder="Please provide details here..."
                value={details}
                onChange={(e) => setDetails(e.target.value)} // since <textarea> is native, use e.target.value
                textarea
                rows={5}
                className="border border-[#274C77] rounded-[6px] text-sm font-inter !h-14 w-full !mt-1"
              />
            </div>

            <div className="!mt-3 !mx-2 !mb-2 font-inter flex items-center gap-2">
              <CustomButton
                text="Confirm Cancellation"
                onClick={() => {
                  
                  ionRouter.push('/home-services/bookings/booking-status', 'forward', 'push');
                }}
                className="min-w-[136px] w-auto h-[32px] px-2 flex items-center justify-center font-inter text-[12px] leading-[20px] font-normal text-white bg-[#DE3B40] hover:bg-[#C12126] active:bg-[#AA1D22] opacity-100 border-none rounded-[4px] whitespace-nowrap"
              />
              <CustomButton
                text="Keep Booking"
                className="min-w-[95px] w-auto h-[32px] px-2 flex items-center justify-center font-inter text-[12px] leading-[20px] font-normal text-[#274C77] bg-white border border-[#274C77] rounded-[4px] hover:bg-white active:bg-white whitespace-nowrap"
              />
            </div>
          </IonCardContent>
        </IonCard>

        {/* Cancellation Policy */}
        <IonCard
          className="bg-white rounded-md m-0 w-full"
          style={{
            borderRadius: '6px',
            boxShadow: '0px 8px 17px #171a1f26, 0px 0px 2px #171a1f1F',
          }}
        >
          <IonCardContent className="p-2 pb-3">
            <h2 className="font-inter !text-[16px] leading-[26px] !font-bold text-custom-black mb-3 px-3 py-1">Cancellation Policy</h2>
            <ul className="list-disc pl-4 font-inter space-y-2 text-[13px] leading-[18px] text-[#171A1F]">
              <li>Free cancellation up to 7 days before the service</li>
              <li>25% fee for cancellations 2-6 days before service</li>
              <li>50% fee for cancellations 1 day before service</li>
              <li>100% fee for same-day cancellations</li>
              <li>Refunds will be processed within 3-5 business days</li>
            </ul>
          </IonCardContent>
        </IonCard>
      </div>
    </PageLayout>
  );
};

export default CancelBookingPage;
