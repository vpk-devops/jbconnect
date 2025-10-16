import React from 'react';
import { IonContent, IonIcon, useIonRouter } from '@ionic/react';
import PageLayout from '../../components/Layout/Layout';
import Header from '../../components/Header/Header';
import CustomButton from '../../components/Common/CustomButton/CustomButton';
import { chevronBackOutline, checkmarkOutline, phonePortraitOutline, notificationsOutline, locationOutline, arrowForward } from 'ionicons/icons';
import { FeatureCard } from './AllCardsReusable';


const Jbconex6: React.FC = () => {
  const router = useIonRouter();
  const handleBack = () => router.goBack();
  const handleGetStarted = () => console.log('Get Started clicked');

  return (
    <PageLayout header={<Header title="Ready to Connect!" type="page" showRightIcon={false} />}> 
      <IonContent>
        <div className="px-4 pt-2 pb-4">
          <p className="text-[#98A2B3] text-center font-inter font-semibold text-[14px] leading-6 mb-5">
            Your preferences are set up and you're
            <br />
            ready to find the perfect construction
            <br />
            professionals
          </p>

          {/* Success  */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-[92px] h-[92px] rounded-full bg-[#E6F9EE] flex items-center justify-center">
                <div className="w-[72px] h-[72px] rounded-full bg-[#22C55E] flex items-center justify-center">
                  <IonIcon icon={checkmarkOutline} className="text-white text-2xl" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-5">
            <FeatureCard icon={phonePortraitOutline} title="Mobile Optimized" subtitle="Find and contact professionals on the go" size="sm" />
            <FeatureCard icon={notificationsOutline} title="Smart Notifications" subtitle="Get updates when professionals respond" size="sm" />
            <FeatureCard icon={locationOutline} title="Local Professionals" subtitle="Find verified experts near your project location" size="sm" />
          </div>

          {/* CTA  */}
          <div className="rounded-lg bg-[#274C77] px-4 py-3 mb-5 text-center shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1F]">
            <div className="text-white text-[12px] font-extrabold mb-1">
              Welcome to the future of construction services!
            </div>
            <div className="text-white/90 text-[11px]">Start browsing professional profiles now</div>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-between">
            <CustomButton
              text="Back"
              icon={chevronBackOutline}
              // iconPosition="start"
              onClick={handleBack}
              className="w-[88px] h-[36px] px-3 flex items-center justify-center font-inter text-[14px] leading-[22px] font-medium text-[#171A1F] bg-[#F3F4F6] rounded-[6px]"
            />
            <CustomButton
              text="Get Started"
              icon={arrowForward}
              onClick={handleGetStarted}
              className="w-[120px] h-[36px] px-3 flex items-center justify-center font-inter text-[14px] leading-[22px] font-medium text-white bg-[#274C77] rounded-[6px] whitespace-nowrap"
            />
          </div>
        </div>
      </IonContent>
    </PageLayout>
  );
};

export default Jbconex6;


