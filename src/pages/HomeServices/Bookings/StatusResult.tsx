import React from 'react';
import PageLayout from '../../../components/Layout/Layout';

type StatusResultProps = {
  type: 'confirm' | 'cancel';
  title: string;
  subtitle: string;
  bookingId?: string;
  imageSrc: string;
  imageAlt: string;
  children?: React.ReactNode; // For custom content below
};

const StatusResult: React.FC<StatusResultProps> = ({
  type,
  title,
  subtitle,
  bookingId,
  imageSrc,
  imageAlt,
  children,
}) => {
  return (
    <PageLayout>
      <div className="h-full px-4 py-4 overflow-auto">
        <div className="max-w-md mx-auto flex flex-col items-center justify-start">
          <img 
            src={imageSrc} 
            alt={imageAlt} 
            className="w-[200px] h-[200px] md:w-[240px] md:h-[240px] object-contain" 
          />

          {/* Title */}
          <h1 className="mt-1 text-2xl font-bold text-center text-[#111827]" style={{ fontFamily: 'Acme, Inter, sans-serif' }}>
            {title}
          </h1>

          {/* Subtitle */}
          <p className="mt-1 text-center text-sm text-gray-500 max-w-xs">
            {subtitle}
          </p>

          {/* Booking ID */}
          {bookingId && (
            <div className="mt-3 text-sm text-[#171A1F]">
              <span className="font-semibold text-[#274c77]">Booking ID:</span>
              <span className="ml-2 text-[#171A1F]">{bookingId}</span>
            </div>
          )}

          {/* Custom content below */}
          {children}
        </div>
      </div>
    </PageLayout>
  );
};

export default StatusResult;
