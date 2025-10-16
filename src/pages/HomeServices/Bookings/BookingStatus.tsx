import React, { useState, useEffect } from 'react';
// import StatusResult from '../../../../components/Bookings/StatusResult';
import confirmImg from '/assets/images/success (1).png';
import cancelImg from '/assets/images/fail.png';
import StatusResult from './StatusResult';

type StatusType = 'confirm' | 'cancel';

const BookingStatus: React.FC = () => {
  const [statusType, setStatusType] = useState<StatusType>('confirm');
  const [bookingData, setBookingData] = useState<any>(null);

  useEffect(() => {
    // Get status and data from sessionStorage
    const status = sessionStorage.getItem('bookingStatus') as StatusType || 'confirm';
    const data = sessionStorage.getItem('bookingData');
    
    setStatusType(status);
    setBookingData(data ? JSON.parse(data) : { id: '#12345' });
  }, []);

  const getStatusConfig = () => {
    if (statusType === 'confirm') {
      return {
        title: 'Booking Confirmed',
        subtitle: 'Thank you for choosing us. Your booking has been successfully confirmed. We look forward to serving you!',
        imageSrc: confirmImg,
        imageAlt: 'Booking confirmed',
        children: (
          <div className="mt-3 w-full h-[200px] bg-[#E5EDFF] rounded-[8px] border-2 border-[#132B61] p-3 text-[12px] leading-5 text-[#111827]">
            <p className="font-medium mb-2">What happens next?</p>
            <ol className="list-decimal pl-4 space-y-2 text-gray-700">
              <li>
                You'll receive a confirmation email with all the details within the next few minutes.
              </li>
              <li>
                Our service professional will contact you 24 hours before the appointment to confirm.
              </li>
              <li>
                If you need to reschedule or cancel, please call us at least 24 hours in advance.
              </li>
            </ol>
          </div>
        )
      };
    } else {
      return {
        title: 'Booking Cancelled',
        subtitle: 'Your booking has been successfully cancelled.',
        imageSrc: cancelImg,
        imageAlt: 'Booking cancelled',
        children: (
          <div className="mt-3 text-center text-sm text-[#111827] max-w-[320px] space-y-3">
            <p>
              We're sorry to see you go. If this was unintentional or if you wish to re-book,
              feel free to contact us anytime.
            </p>
            <p className="text-gray-500">Thank you for your time!</p>
          </div>
        )
      };
    }
  };

  const config = getStatusConfig();

  return (
    <StatusResult
      type={statusType}
      title={config.title}
      subtitle={config.subtitle}
      bookingId={bookingData?.id}
      imageSrc={config.imageSrc}
      imageAlt={config.imageAlt}
    >
      {config.children}
    </StatusResult>
  );
};

export default BookingStatus;
