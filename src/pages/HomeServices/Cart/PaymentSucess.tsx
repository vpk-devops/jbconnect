import React from 'react';
import { IonContent, IonImg, IonText } from '@ionic/react';
import confirmImg from '/assets/images/success (1).png';
import cancelImg from '/assets/images/fail.png';
import CustomButton from '../../../components/Common/CustomButton/CustomButton';
import PageLayout from '../../../components/Layout/Layout';

const PaymentStatus: React.FC = () => {
  const isSuccess = window.location.pathname === '/payment-success';
  const renderRow = (label: string, value: string) => (
    <div className="flex items-center justify-between py-2">
      <IonText className="text-gray-500">{label}</IonText>
      <IonText className="font-semibold">{value}</IonText>
    </div>
  );
  const renderPaymentDetails = () => {
    if (isSuccess) {
      return (
        <>
          {renderRow("Date", "09-05-2023")}
          {renderRow("Time", "05:40 AM")}
          {renderRow("Payment method", "Credit card")}
          {renderRow("Amount", "₹ 2,250")}
          <div className="mt-4">
            <CustomButton
              text="Get PDF receipt"
              className="w-full h-[36px] text-[12px] text-[#111827] bg-[#F9FAFB] border border-[#E5E7EB] rounded-md !m-0"
            />
          </div>
        </>
      );
    } else {
      return (
        <>
          {renderRow("Subtotal", "₹ 3,000")}
          {renderRow("Tax (10%)", "₹ 600")}
          {renderRow("Fees", "₹ 0")}
          {renderRow("Card", "•••••• 2334")}
          <div className="border-t border-gray-200 mt-2 pt-2">
            <div className="flex items-center justify-between">
              <IonText className="font-semibold">Total</IonText>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-red-100 text-red-600 text-xs rounded-full">Failed</span>
                <IonText className="text-[#0EA5E9] font-semibold">₹ 3,600</IonText>
              </div>
            </div>
          </div>
        </>
      );
    }
  };
  return (
    <PageLayout>
             <IonContent className="ion-padding flex items-center justify-center min-h-full">
                  <div className="w-full max-w-md flex flex-col items-center justify-center text-center">
                       {isSuccess ? (
              <>
                <IonImg
                  src={confirmImg}
                  alt="Payment success"
                  className="w-[200px] h-[200px] md:w-[240px] md:h-[240px] object-contain"
                />
                <IonText className="mt-4 text-2xl font-bold text-center" style={{ fontFamily: 'Acme, Inter, sans-serif', color: '#111827' }}>
                  Payment success!
                </IonText>
                <IonText className="mt-2 text-center text-sm text-gray-500 max-w-xs">
                  Your payment has been received. We've sent a receipt to your email.
                </IonText>
              </>
            ) : (
              <>
                <IonImg
                   src={cancelImg}
                   alt="Payment failed"
                   className="w-[200px] h-[200px] md:w-[240px] md:h-[240px] object-contain"
                 />
                <IonText className="mt-4 text-2xl font-bold text-center" style={{ fontFamily: 'Acme, Inter, sans-serif', color: '#274C77FF' }}>
                  Payment Failed
                </IonText>
                <IonText className="mt-2 text-center text-sm text-gray-500 max-w-xs">
                  Payment attempt canceled. Continue when ready.
                </IonText>
              </>
            )}
             <div className="mt-6 w-full flex flex-col items-center">
             <div className="w-[335px] h-[280px] bg-[#FAFAFB] rounded-lg border border-[#E5E7EB] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1F] p-4">
               {renderPaymentDetails()}
             </div>
             <div className="mt-6">
               <CustomButton
                 text={isSuccess ? "View booking" : "Try again"}
                 className="w-[335px] h-[40px] text-[13px] bg-[#274C77] text-white rounded-md"
               />
             </div>
           </div>
        </div>
      </IonContent>
    </PageLayout>
  );
};
export default PaymentStatus;