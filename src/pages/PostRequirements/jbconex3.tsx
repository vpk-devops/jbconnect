import React, { useMemo, useState } from 'react';
import { IonContent, useIonRouter, IonIcon } from '@ionic/react';
import PageLayout from '../../components/Layout/Layout';
import Header from '../../components/Header/Header';
import CustomButton from '../../components/Common/CustomButton/CustomButton';
import {
  hammerOutline,
  waterOutline,
  flashOutline,
  constructOutline,
  colorPaletteOutline,
  homeOutline,
  chevronBackOutline,
  arrowForward
} from 'ionicons/icons';

type Service = {
  id: number;
  name: string;
  icon: any;
};

const SERVICES: Service[] = [
  { id: 1, name: 'Carpentry', icon: hammerOutline },
  { id: 2, name: 'Plumbing', icon: waterOutline },
  { id: 3, name: 'Electrical', icon: flashOutline },
  { id: 4, name: 'Heavy Machinery', icon: constructOutline },
  { id: 5, name: 'Painting', icon: colorPaletteOutline },
  { id: 6, name: 'Roofing', icon: homeOutline }
];

const Jbconex3: React.FC = () => {
  const router = useIonRouter();
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const toggleService = (id: number) => setSelectedIds(prev => (prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]));

  const selectedServices = useMemo(() => SERVICES.filter((s) => selectedIds.includes(s.id)), [selectedIds]);

  const handleBack = () => router.goBack();
  const handleNext = () => {
    router.push('/jbconx-directly/budget', 'forward', 'push');
  };

  return (
    <PageLayout header={<Header title="Services You Need" type="page" showRightIcon={false} />}> 
      <IonContent>
        <div className="px-4 pt-2 pb-4">
          <p className="text-[#98A2B3] text-center font-inter font-semibold text-[14px] leading-6 mb-4">
            Select the services you're looking for to
            <br />
            help us match you with the right
            <br />
            professionals
          </p>

          {/* Services */}
          <div className="grid grid-cols-2 gap-4">
            {SERVICES.map((service) => {
              const isSelected = selectedIds.includes(service.id);
              return (
                <button
                  key={service.id}
                  onClick={() => toggleService(service.id)}
                  className={
                    `w-full rounded-xl border transition-colors duration-150 ` +
                    (isSelected
                      ? 'bg-[#DBEAFE] border-[#CBD5E1]'
                      : 'bg-[#F8FAFC] border-[#E2E8F0] hover:bg-[#F1F5F9]')
                  }
                >
                  <div className="flex flex-col items-center justify-center p-4">
                    <div className={
                      `w-12 h-12 rounded-lg flex items-center justify-center mb-3 ` +
                      (isSelected ? 'bg-[#93C5FD]' : 'bg-[#E2E8F0]')
                    }>
                      <IonIcon icon={service.icon} className="text-[#0F172A] opacity-80 text-xl" />
                    </div>
                    <span className="text-[#0F172A] text-sm font-semibold font-inter">
                      {service.name}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected preview */}
          <div className="mt-5 rounded-lg bg-[#E6F0FB] px-4 py-3">
            <h4 className="text-[#0F172A] font-inter font-semibold text-[14px] mb-2">Selected Services:</h4>
            <div className="flex flex-wrap gap-2">
              {selectedServices.length === 0 ? (
                <span className="text-[#64748B] text-sm">None</span>
              ) : (
                selectedServices.map((s) => (
                  <span key={s.id} className="px-3 py-1 rounded-full bg-[#DBEAFE] text-[#1D4ED8] text-xs font-medium">
                    {s.name}
                  </span>
                ))
              )}
            </div>
          </div>

          {/* Button */}
          <div className="mt-5 flex items-center justify-between">
            <CustomButton
              text="Back"
              icon={chevronBackOutline}
              // iconPosition="start"
              onClick={handleBack}
              className="w-[88px] h-[36px] px-3 flex items-center justify-center font-inter text-[14px] leading-[22px] font-medium text-[#171A1F] bg-[#F3F4F6] rounded-[6px]"
            />
            <CustomButton
              text="Next"
              icon={arrowForward}
              onClick={handleNext}
              className="w-[88px] h-[36px] px-3 flex items-center justify-center font-inter text-[14px] leading-[22px] font-medium text-white bg-[#274C77] rounded-[6px] disabled:opacity-50"
            />
          </div>
        </div>
      </IonContent>
    </PageLayout>
  );
};

export default Jbconex3;


