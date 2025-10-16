import React, { useMemo, useState } from 'react';
import { IonContent, IonIcon, useIonRouter } from '@ionic/react';
import PageLayout from '../../components/Layout/Layout';
import Header from '../../components/Header/Header';
import CustomButton from '../../components/Common/CustomButton/CustomButton';
import { businessOutline, chevronBackOutline, arrowForward } from 'ionicons/icons';

type BudgetTier = {
  id: number;
  title: string;
  subtitle: string;
  range: [number, number];
};

const TIERS: BudgetTier[] = [
  {
    id: 1,
    title: 'Small Project',
    subtitle: 'Minor renovations, repairs',
    range: [40000, 80000]
  },
  {
    id: 2,
    title: 'Medium Project',
    subtitle: 'Room remodeling, additions',
    range: [80000, 400000]
  },
  {
    id: 3,
    title: 'Large Project',
    subtitle: 'Complete home renovation',
    range: [400000, 2000000]
  },
  {
    id: 4,
    title: 'Custom Build',
    subtitle: 'New construction, custom design',
    range: [800000, 8000000]
  }
];

const currencyINR = (n: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);

const Jbconex4: React.FC = () => {
  const router = useIonRouter();
  const [activeTierId, setActiveTierId] = useState<number>(1);
  const activeTier = useMemo(() => TIERS.find(t => t.id === activeTierId)!, [activeTierId]);
  const [budget, setBudget] = useState<number>(activeTier.range[0]);

  const onSelectTier = (tier: BudgetTier) => {
    setActiveTierId(tier.id);
    setBudget(prev => Math.min(Math.max(prev, tier.range[0]), tier.range[1]));
  };

  const handleBack = () => router.goBack();
  const handleNext = () => router.push('/jbconx-directly/location', 'forward', 'push');

  const min = activeTier.range[0];
  const max = activeTier.range[1];

  return (
    <PageLayout header={<Header title="Project Budget" type="page" showRightIcon={false} />}> 
      <IonContent>
        <div className="px-4 pt-2 pb-4">
          <p className="text-[#98A2B3] text-center font-inter font-semibold text-[14px] leading-6 mb-4">
            Help professionals understand your
            <br />
            budget range for better matching
          </p>

          {/* Budget  */}
          <div className="grid grid-cols-2 gap-4 mb-3">
            {TIERS.map((tier) => {
              const isActive = activeTierId === tier.id;
              return (
                <button
                  key={tier.id}
                  onClick={() => onSelectTier(tier)}
                  className={
                    `w-full rounded-xl border text-left transition-colors duration-150 ` +
                    (isActive ? 'bg-[#DBEAFE] border-[#CBD5E1]' : 'bg-[#F8FAFC] border-[#E2E8F0] hover:bg-[#F1F5F9]')
                  }
                >
                  <div className="flex items-start gap-3 p-3">
                    <div className={`w-10 h-10 rounded-md flex items-center justify-center ${isActive ? 'bg-[#93C5FD]' : 'bg-[#E2E8F0]'}`}>
                      <IonIcon icon={businessOutline} className="text-[#0F172A] opacity-80 text-lg" />
                    </div>
                    <div>
                      <div className="text-[#0F172A] text-[14px] font-bold">{tier.title}</div>
                      <div className="text-[#64748B] text-[11px] leading-4">{tier.subtitle}</div>
                      <div className="text-[#0F172A] text-[11px] mt-1 font-medium whitespace-nowrap">
                        {currencyINR(tier.range[0])} - {currencyINR(tier.range[1])}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Current budget  */}
          <div className="flex justify-end mb-2">
            <span className="px-3 py-1 rounded-full bg-[#274C77] text-white text-xs font-semibold">
              {currencyINR(budget)}
            </span>
          </div>

          {/* Slider */}
          <div className="mb-2">
            <input
              type="range"
              min={min}
              max={max}
              step={1000}
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full h-1.5 bg-[#E5E7EB] rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {/* Min / Max labels */}
          <div className="flex items-center justify-between text-[#CBD5E1] text-xs font-bold mb-4">
            <span>
              <span className="text-[#94A3B8]">Min:</span> {currencyINR(min)}
            </span>
            <span>
              <span className="text-[#94A3B8]">Max:</span> {currencyINR(max)}
            </span>
          </div>

          {/* Info */}
          <div className="rounded-lg bg-[#E6F0FB] px-4 py-3 text-[#274C77FF] text-[13px] font-semibold leading-5">
            Professionals will see this budget
            <br />
            range when matching with your project
          </div>

          {/* Buttons */}
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

export default Jbconex4;


