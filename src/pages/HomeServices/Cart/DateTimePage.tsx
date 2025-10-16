import React, { useMemo, useState } from "react";
import Header from "../../../components/Header/Header";
import PageLayout from "../../../components/Layout/Layout";
import { IonIcon, useIonRouter, IonModal, IonDatetime } from "@ionic/react";
import CustomButton from "../../../components/Common/CustomButton/CustomButton";
import { calendarOutline, sunnyOutline, timeOutline } from "ionicons/icons";
import { useAppDispatch } from "../../../app/hooks";
import { setDateTime } from "../../../features/home-services/cart/orderSlice";

const morningSlots = ["10 AM - 10:30 AM", "10:30 AM - 11 AM", "11 AM - 11:30 AM", "11:30 AM - 12 PM"];
const afternoonSlots = [
  "12 PM - 12:30 PM",
  "12:30 PM - 1 PM",
  "1 PM - 1:30 PM",
  "1:30 PM - 2 PM",
  "2 PM - 2:30 PM",
  "2:30 PM - 3 PM",
  "3 PM - 3:30 PM",
  "3:30 PM - 4 PM",
  "4 PM - 4:30 PM",
  "4:30 PM - 5 PM",
];

const DateTimePickerMobile: React.FC = () => {
  const ionRouter = useIonRouter();
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isDateOpen, setIsDateOpen] = useState(false);

  const dispatch = useAppDispatch();

  // Get today/tomorrow normalized
  const today = useMemo(() => new Date(), []);
  const tomorrow = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d;
  }, []);

  const toISODate = (d: Date) => d.toISOString().split("T")[0];

  const todayISO = toISODate(today);
  const tomorrowISO = toISODate(tomorrow);

  // Format display labels
  const formatDate = (d: Date, label: string) => {
    const day = d.getDate().toString().padStart(2, "0");
    const month = d.toLocaleString("en-US", { month: "short" });
    return `${day} ${month} (${label})`;
  };
  const todayLabel = formatDate(today, "Today");
  const tomorrowLabel = formatDate(tomorrow, "Tomorrow");

  const minDateISO = todayISO;
  const maxDateISO = useMemo(() => {
    const d = new Date();
    d.setFullYear(d.getFullYear() + 3);
    return toISODate(d);
  }, []);

  // Show custom picked date label
  const customDateLabel = useMemo(() => {
    if (!selectedDate) return "";
    const d = new Date(selectedDate);
    if (isNaN(d.getTime())) return "";
    const day = d.getDate().toString().padStart(2, "0");
    const month = d.toLocaleString("en-US", { month: "short" });
    const weekday = d.toLocaleString("en-US", { weekday: "short" });
    return `${day} ${month} (${weekday})`;
  }, [selectedDate]);

  // --- helpers ---
  const parseSlotEnd = (slot: string) => {
    const endPart = slot.split("-")[1].trim(); // e.g. "10:30 AM"
    const [time, meridian] = endPart.split(" ");
    let [hours, minutes] = time.split(":").map(Number);
    if (isNaN(minutes)) minutes = 0;
    if (meridian === "PM" && hours !== 12) hours += 12;
    if (meridian === "AM" && hours === 12) hours = 0;
    return hours * 60 + minutes;
  };

  const nowMinutes = new Date().getHours() * 60 + new Date().getMinutes();
  const lastSlotEnd = parseSlotEnd("4:30 PM - 5 PM");

  const isSlotDisabled = (slot: string) => {
    if (!selectedDate) return true;

    // If selected date is today → disable past slots
    if (selectedDate === todayISO) {
      // If it's already past the last slot → disable all of today
      if (nowMinutes >= lastSlotEnd) return true;

      return parseSlotEnd(slot) <= nowMinutes;
    }

    // Past date safety (shouldn’t happen since minDate = today)
    if (selectedDate < todayISO) return true;

    // Future dates → always enabled
    return false;
  };


  const handleProceed = () => {
    if (!selectedDate) {
      alert("Please select a date!");
      return;
    }
    if (!selectedTime) {
      alert("Please select a time slot!");
      return;
    }

    dispatch(setDateTime({ date: selectedDate, time: selectedTime }));
    ionRouter.push("/home-services/orderreview", "forward", "push");
  };

  return (
    <PageLayout header={<Header title="Pick Date and Time" type="page" showRightIcon={false} />}>
      <div className="px-4 w-full max-w-screen-md mx-auto flex flex-col min-h-[calc(100vh-120px)]">
        {/* Select Date */}
        <div className="mb-6">
          <h2 className="text-sm font-medium text-[#171A1F] mb-3">Select Date</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {/* Today */}
            <button
              onClick={() => setSelectedDate(todayISO)}
              className={`px-4 h-10 rounded-md w-full text-sm ${selectedDate === todayISO ? "bg-[#D6EFFF] text-[#1E4566] font-semibold" : "bg-[#EAF4FF] text-[#274C77]"
                }`}
            >
              {todayLabel}
            </button>

            {/* Tomorrow */}
            <button
              onClick={() => setSelectedDate(tomorrowISO)}
              className={`px-4 h-10 rounded-md w-full text-sm ${selectedDate === tomorrowISO ? "bg-[#D6EFFF] text-[#1E4566] font-semibold" : "bg-[#EAF4FF] text-[#274C77]"
                }`}
            >
              {tomorrowLabel}
            </button>

            {/* Custom Date */}
            {selectedDate && selectedDate !== todayISO && selectedDate !== tomorrowISO && (
              <button
                onClick={() => setIsDateOpen(true)}
                className="px-4 h-10 rounded-md w-full text-sm bg-[#D6EFFF] text-[#1E4566] font-semibold"
              >
                {customDateLabel}
              </button>
            )}

            {/* Calendar */}
            <button
              onClick={() => setIsDateOpen(true)}
              className="px-4 h-10 rounded-md bg-[#EAF4FF] text-[#274C77] flex items-center justify-center w-full"
            >
              <IonIcon icon={calendarOutline} className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Select Time */}
        <div className="mb-4">
          <h2 className="text-sm font-medium text-[#171A1F] mb-3">Select Start Time</h2>

          {/* Morning */}
          <div className="mb-3">
            <div className="flex items-center gap-2 text-[#9AA4B2] text-xs mb-2">
              <IonIcon icon={sunnyOutline} className="w-4 h-4" />
              <span>Morning</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {morningSlots.map((slot) => {
                const disabled = isSlotDisabled(slot); // check if slot should be disabled

                return (
                  <button
                    key={slot}
                    onClick={() => !disabled && setSelectedTime(slot)} // only allow click if not disabled
                    disabled={disabled} // disable the button
                    className={`px-3 h-8 rounded-md text-xs flex items-center justify-center
        ${disabled
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed" // style for disabled
                        : selectedTime === slot
                          ? "bg-[#D6EFFF] text-[#1E4566] font-semibold"
                          : "bg-[#EAF4FF] text-[#274C77]"
                      }`}
                  >
                    {slot}
                  </button>
                );
              })}

            </div>
          </div>

          {/* Afternoon */}
          <div className="mb-6">
            <div className="flex items-center gap-2 text-[#9AA4B2] text-xs mb-2">
              <IonIcon icon={timeOutline} className="w-4 h-4" />
              <span>Afternoon</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {afternoonSlots.map((slot) => {
                const disabled = isSlotDisabled(slot);

                return (
                  <button
                    key={slot}
                    onClick={() => !disabled && setSelectedTime(slot)}
                    disabled={disabled}
                    className={`px-3 h-8 rounded-md text-xs flex items-center justify-center
        ${disabled
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : selectedTime === slot
                          ? "bg-[#D6EFFF] text-[#1E4566] font-semibold"
                          : "bg-[#EAF4FF] text-[#274C77]"
                      }`}
                  >
                    {slot}
                  </button>
                );
              })}

            </div>
          </div>
        </div>

        {/* Proceed */}
        <div className="mt-auto pb-4">
          <CustomButton
            text="Proceed"
            onClick={handleProceed}
            className="w-full h-10 rounded-md bg-[#274C77] text-white text-sm font-medium"
          />
        </div>

        {/* Calendar Modal */}
        <IonModal isOpen={isDateOpen} onDidDismiss={() => setIsDateOpen(false)} backdropDismiss>
          <IonDatetime
            presentation="date"
            firstDayOfWeek={1}
            value={selectedDate || todayISO}
            min={minDateISO}
            max={maxDateISO}
            onIonChange={(e) => {
              const val = e.detail.value as string;
              setSelectedDate(val.split("T")[0]); // store normalized YYYY-MM-DD
              setIsDateOpen(false);
            }}
            className="custom-datetime p-3"
            style={{ "--ion-color-primary": "#274C77" } as React.CSSProperties}
          />
        </IonModal>
      </div>
    </PageLayout>
  );
};

export default DateTimePickerMobile;
