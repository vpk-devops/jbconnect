import React from 'react';
import { IonContent, IonIcon, useIonRouter } from '@ionic/react';
import PageLayout from '../../components/Layout/Layout';
import CustomButton from '../../components/Common/CustomButton/CustomButton';
import jbconexLogo from '../../assets/images/jbconex.png';
import { briefcaseOutline, peopleOutline, shieldCheckmarkOutline, chevronBackOutline, arrowForward } from 'ionicons/icons';
import { FeatureCard } from './AllCardsReusable';


const Jbconex2: React.FC = () => {
  const router = useIonRouter();
  const handleBack = () => router.goBack();
  const handleNext = () => router.push('/jbconx-directly/services', 'forward', 'push');

  return (
    <PageLayout header={null}>
      <IonContent>
        <div className="relative min-h-screen bg-white px-4 py-6">
          {/* Top  */}
          <div className="flex items-center justify-center mb-3">
            <span className="text-[20px] leading-[30px] font-bold text-[#171A1F] mr-2">Welcome to</span>
            <img src={jbconexLogo} alt="JBCONX" className="w-[134px] h-[36px]" />
          </div>

          {/* Subtitle */}
          <p className="text-[#98A2B3] text-center font-inter font-semibold text-[16px] leading-[24px] mb-6">
            Connect with top construction
            <br />
            professionals for your building projects
          </p>

          {/* Center circle and  dots */}
          <div className="w-full flex items-center justify-center mb-6">
            <div className="relative">
              <div className="w-[72px] h-[72px] rounded-full bg-[#274C77] flex items-center justify-center shadow-sm">
                <IonIcon icon={briefcaseOutline} className="text-white text-2xl" />
              </div>
              <div className="pointer-events-none absolute -right-24 -top-6 w-10 h-10 rounded-full bg-[#B9D8F6]" />
              <div className="pointer-events-none absolute -left-24 top-12 w-5 h-5 rounded-full bg-[#5D92B4]" />
            </div>
          </div>

          {/* Options */}
          <div className="space-y-4">
            <FeatureCard
              icon={briefcaseOutline}
              title="Discover Professionals"
              subtitle="Find Experts for your building project"
              variant="primary"
            />

            <FeatureCard
              icon={peopleOutline}
              title="Direct Connection"
              subtitle="Connect directly with verified professionals"
              variant="muted"
            />

            <FeatureCard
              icon={shieldCheckmarkOutline}
              title="Quality Guaranteed"
              subtitle="Only verified construction experts"
              variant="primary"
            />
          </div>

          {/* Button */}
          <div className="mt-6 flex items-center justify-between">
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
              className="w-[88px] h-[36px] px-3 flex items-center justify-center font-inter text-[14px] leading-[22px] font-medium text-white bg-[#274C77] rounded-[6px]"
            />
          </div>
        </div>
      </IonContent>
    </PageLayout>
  );
};

export default Jbconex2;


