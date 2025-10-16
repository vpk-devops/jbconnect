import React, { useState, useEffect } from 'react';
import { IonIcon, IonModal, IonDatetime } from '@ionic/react';
import { star, calendarOutline, timeOutline, playOutline } from 'ionicons/icons';
import Header from '../../../../components/Header/Header';
import PageLayout from '../../../../components/Layout/Layout';
import CustomButton from '../../../../components/Common/CustomButton/CustomButton';
import CustomInputForm from '../../../../components/Common/CustomInputForm/CustomInputForm';
import { useIonRouter } from '@ionic/react';
import { menuController } from '@ionic/core';

const BookAgainPage: React.FC = () => {
  const [selectedProvider, setSelectedProvider] = useState('best');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const ionRouter = useIonRouter();
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [isTimeOpen, setIsTimeOpen] = useState(false);
  const [tempHour, setTempHour] = useState<string>("10");
  const [tempMinute, setTempMinute] = useState<string>("00");
  const [tempPeriod, setTempPeriod] = useState<"AM" | "PM">("AM");
  const [tempTime, setTempTime] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");


  useEffect(() => {
    menuController.enable(false);
    return () => {
      menuController.enable(true);
    };
  }, []);

  const formatDateOnly = (isoOrDateLike: string) => {
    try {
      const d = new Date(isoOrDateLike);
      if (!isNaN(d.getTime())) {
        return d.toLocaleDateString(undefined, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
      }
    } catch { }
    if (/^\d{4}-\d{2}-\d{2}$/.test(isoOrDateLike)) {
      const [y, m, da] = isoOrDateLike.split('-').map(Number);
      const d = new Date(y, m - 1, da);
      return d.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
    }
    return isoOrDateLike;
  };

  const formatTimeOnly = (val: string) => {
    try {
      const d = new Date(val);
      if (!isNaN(d.getTime())) {
        return d.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
      }
    } catch { }
    const match = val.match(/(\d{1,2}):(\d{2})\s*(AM|PM)?/i);
    if (match) {
      const hour = match[1];
      const min = match[2];
      const ap = match[3] ? match[3].toUpperCase() : '';
      return `${hour}:${min}${ap ? ' ' + ap : ''}`;
    }
    return val;
  };

  return (
    <PageLayout
      header={
        <Header
          title="Booking Details"
          type="page"
          showRightIcon={false}
        />
      }
    >
      <div className="space-y-3 px-3 py-2">
        {/* Provider Preference  */}
        <div className="bg-white rounded-lg px-2 py-2 shadow-lg border border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 mb-2 px-3 pt-2">Provider Preference</h3>

          <CustomInputForm
            label=""
            name="provider"
            value={selectedProvider}
            radioOptions={[
              { label: "Book with David Jackson (⭐ 4.9)", value: "david" },
              { label: "Find me the best available provider", value: "best" }
            ]}
            radioValue={selectedProvider}
            onRadioChange={(value) => setSelectedProvider(value)}
          />
        </div>

        {/* Select Date & Time  */}
        <div className="bg-white rounded-lg px-3 py-2 shadow-lg border border-gray-100">

          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4 px-1 pt-2">Select Date & Time</h3>

            <div className="space-y-4">
              <CustomInputForm
                label="Select Date"
                name="date"
                type="text"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.detail.value || '')}
                placeholder="Pick a date"
                className="w-full max-w-[329px] h-9 pr-3 text-[14px] leading-[22px] font-normal bg-white rounded-[6px] border border-[#274C77] placeholder:text-[#BDC1CA]"
                icon={<IonIcon icon={calendarOutline} className="w-4 h-4 text-[#274C77]" />}
                onClick={() => setIsDateOpen(true)}
              />
              <IonModal
                isOpen={isDateOpen}
                onDidDismiss={() => setIsDateOpen(false)}
                backdropDismiss
                className="rounded-xl"
                style={{ '--width': '320px', '--height': 'auto', '--border-radius': '12px', '--box-shadow': '0 10px 25px rgba(0,0,0,0.15)' } as React.CSSProperties}
              >
                <style>
                  {`
                  ion-datetime.custom-datetime::part(title) { font-size: 20px; font-weight: 700; color: #111827; }
                  /* Weekday headers */
                  ion-datetime.custom-datetime::part(weekday),
                  ion-datetime.custom-datetime::part(weekdays),
                  ion-datetime.custom-datetime::part(day-of-week) { color: #274C77 !important; font-weight: 600; }
                  ion-datetime.custom-datetime::part(next-button),
                  ion-datetime.custom-datetime::part(prev-button) { color: #274C77; }
                  `}
                </style>
                <IonDatetime
                  presentation="date"
                  firstDayOfWeek={1}
                  value={selectedDate}
                  onIonChange={(e) => {
                    const val = e.detail.value as string;
                    setSelectedDate(formatDateOnly(val));
                    setIsDateOpen(false);
                  }}
                  className="custom-datetime !p-3"
                  style={{ '--ion-color-primary': '#274C77' } as React.CSSProperties}
                />
              </IonModal>

              <CustomInputForm
                label="Select Time"
                name="time"
                type="text"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.detail.value || '')}
                placeholder="Choose Time slot"
                className="w-full max-w-[329px] h-9 pr-3 text-[14px] leading-[22px] font-normal bg-white rounded-[6px] border border-[#274C77] placeholder:text-[#BDC1CA]"
                icon={<IonIcon icon={timeOutline} className="w-4 h-4 text-[#274C77]" />}
                onClick={() => { setTempTime(selectedTime); setIsTimeOpen(true); }}
              />
              <IonModal
                isOpen={isTimeOpen}
                onDidDismiss={() => setIsTimeOpen(false)}
                backdropDismiss
                className="rounded-xl"
                style={{ '--width': '360px', '--height': 'auto', '--border-radius': '12px' } as React.CSSProperties}
              >
                <div className="bg-white rounded-xl">
                  <div className="px-4 py-3 border-b border-gray-200 text-[20px] font-semibold text-[#111827]">Set time</div>
                  <div className="px-4 py-3">
                    <style>
                      {`
                        /* Non-active items */
                        ion-datetime.custom-time::part(wheel-item),
                        ion-datetime.custom-time::part(picker-item) { color: #9CA3AF; }
                        /* Active row */
                        ion-datetime.custom-time::part(wheel-item-active),
                        ion-datetime.custom-time::part(picker-item-active) { color: #274C77 !important; font-weight: 700; }
                        /* Remove default band */
                        ion-datetime.custom-time::part(highlight) { background: transparent; border: 0; box-shadow: none; }
                      `}
                    </style>
                    <div className="relative">

                      <div className="absolute left-4 right-4 top-[28px] h-[2px] bg-[#274C77]" />
                      <div className="absolute left-4 right-4 top-[86px] h-[2px] bg-[#274C77]" />
                      <IonDatetime
                        presentation="time"
                        preferWheel
                        hourCycle="h12"
                        showDefaultButtons={false}
                        value={tempTime}
                        onIonChange={(e) => setTempTime((e.detail.value as string) || "")}
                        className="custom-time !p-0"
                        style={{ '--ion-color-primary': '#274C77', '--highlight-background': 'transparent', '--highlight-color': '#274C77' } as React.CSSProperties}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-3 px-4 py-3 border-t border-gray-200">
                    <button onClick={() => setIsTimeOpen(false)} className="text-[#274C77] text-sm">Cancel</button>
                    <button
                      onClick={() => { setSelectedTime(formatTimeOnly(tempTime)); setIsTimeOpen(false); }}
                      className="bg-[#274C77] text-white rounded-md w-[76px] h-8 text-sm font-medium"
                    >
                      Set
                    </button>
                  </div>
                </div>
              </IonModal>
            </div>
          </div>

          {/*  Requests */}
          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Special Requests (Optional)</h3>

            <CustomInputForm
              label=""
              name="specialRequests"
              placeholder="Any special request or notes for this appointments..."
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              textarea={true}
              rows={4}
              className="w-full max-w-[329px] h-[95px] text-[14px] leading-[22px] text-[#BDC1CA] bg-white rounded-[6px] border border-[#274C77]"
            />
          </div>
        </div>

        {/* Error Message */}
        {errorMessage && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                <span className="text-red-600 text-sm font-bold">!</span>
              </div>
              <p className="text-red-700 text-sm font-medium">{errorMessage}</p>
            </div>
          </div>
        )}

        {/*  Buttons */}
        <div className="space-y-3 !my-4">
          <div className="flex gap-3 justify-center">
            <CustomButton
              text="Continue"
              icon="playOutline"
              // onClick={handleContinue}
              onClick={() => ionRouter.push('/home-services/bookings/booking-continue', 'forward', 'push')}
              className="w-[164px] h-8 px-2 text-[12px] leading-[20px] font-normal text-white bg-[#274C77] border-0 rounded border-s flex items-center justify-center gap-1 [&>ion-icon]:w-3 [&>ion-icon]:h-3 [&>ion-icon]:text-white"
            />
            <CustomButton
              text="Cancel"
              // onClick={handleCancel}
              onClick={() => ionRouter.push("/home-services/bookings/cancel")}
              className="w-[147px] h-8 px-2 text-[12px] leading-[20px] font-normal text-[#274C77] bg-white border border-[#274C77] rounded border-s flex items-center justify-center"
            />
          </div>


        </div>
      </div>
    </PageLayout>
  );
};

export default BookAgainPage;
