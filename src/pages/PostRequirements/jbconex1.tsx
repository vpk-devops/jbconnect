import React from 'react';
import { IonContent, useIonRouter } from '@ionic/react';
import { chevronForwardOutline } from 'ionicons/icons';
import PageLayout from '../../components/Layout/Layout';
import CustomButton from '../../components/Common/CustomButton/CustomButton';
import jbconexLogo from '../../assets/images/jbconex.png';

const Jbconex1: React.FC = () => {
  const ionRouter = useIonRouter();
  const handleGetStarted = () => ionRouter.push('/jbconx-directly/choose', 'forward', 'push');
console.log("hello 1")
  return (
    <PageLayout header="">
      <IonContent>
        <div className="h-full bg-white flex flex-col items-center justify-center p-4">
          <div className="flex items-center justify-center mb-6">
            <img src={jbconexLogo} alt="JBCONX Logo" className="h-16 w-auto" />
          </div>
          <div className="text-center mb-6">
            <p className="text-[#323743] font-medium text-lg leading-relaxed">Connect with the best construction professionals for your building projects</p>
          </div>
          <div className="flex justify-center">
            <CustomButton
              text="Get Started"
              icon={chevronForwardOutline}
              onClick={handleGetStarted}
              className="w-[150px] h-[36px] px-3 flex items-center justify-center font-inter text-[14px] leading-[22px] font-normal text-white bg-[#274C77] rounded-[6px] gap-[6px] hover:bg-[#1B3756] active:bg-[#14273D] disabled:opacity-40"
            />
          </div>
        </div>
      </IonContent>
    </PageLayout>
  );
};

export default Jbconex1;
