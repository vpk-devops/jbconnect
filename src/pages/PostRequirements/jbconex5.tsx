import React, { useState } from 'react';
import { IonContent, IonIcon, useIonRouter } from '@ionic/react';
import PageLayout from '../../components/Layout/Layout';
import Header from '../../components/Header/Header';
import CustomButton from '../../components/Common/CustomButton/CustomButton';
import CustomInputForm from '../../components/Common/CustomInputForm/CustomInputForm';
import { chevronBackOutline, arrowForward, pinOutline, homeOutline } from 'ionicons/icons';

const Jbconex5: React.FC = () => {
  const router = useIonRouter();
  const [address, setAddress] = useState('9012 East Street, Houston, TX 77020');
  const [landmark, setLandmark] = useState('');

  const handleBack = () => router.goBack();
  const handleNext = () => router.push('/jbconx-directly/ready', 'forward', 'push');

  return (
    <PageLayout header={<Header title="Project Location" type="page" showRightIcon={false} />}> 
      <IonContent>
        <div className="px-4 pt-2 pb-4">
          <p className="text-[#98A2B3] text-center font-inter font-semibold text-[14px] leading-6 mb-4">
            Help professionals to know your project
            <br />
            location for better matching
          </p>

          {/* Map  */}
          <div className="w-full h-[180px] bg-[url('/src/assets/images/map.png')] bg-cover bg-center rounded-lg relative mb-3">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1F] flex items-center justify-center">
              <IonIcon icon={pinOutline} className="text-[#274C77] text-base" />
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-2 text-sm text-[#0F172A] mb-2">
            <IonIcon icon={homeOutline} className="text-[#274C77] text-lg mt-[2px]" />
            <span className="font-medium">{address}</span>
          </div>

          {/* Landmark */}
          <CustomInputForm
            label="Landmark / Society name"
            name="landmark"
            placeholder="Enter street Address"
            value={landmark}
            onChange={(e) => setLandmark(e.detail?.value || '')}
            className="border-b border-[#CBD5E1] rounded-none !h-auto pb-1"
          />

          {/* Info  */}
          <div className="rounded-lg bg-[#E6F0FB] px-4 py-3 text-[#274C77] text-[13px] font-semibold leading-5 mb-4">
            Professionals will see this location
            <br />
            when matching with your project
          </div>

          {/* Buttons */}
          <div className="mt-2 flex items-center justify-between">
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

export default Jbconex5;


