import React from 'react';
import { IonContent } from '@ionic/react';
import logo from '/assets/images/logo.png';
import splashImage from '/assets/images/splash image.png';

const Splashscreen: React.FC = () => {
  return (
    <IonContent fullscreen scrollY={false} className="relative flex flex-col items-center min-h-screen bg-white overflow-hidden">
      <div className="flex flex-1 items-start justify-center w-full mt-32 z-10">
        <img
          src={logo}
          alt="Logo"
          className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto object-contain mx-auto mt-32"
        />
      </div>
      <img
        // src={splashImage}

        alt="Splash Bottom"
        className="absolute bottom-0 left-0 w-full max-w-[600px] md:max-w-[900px] h-auto object-contain z-0"
        style={{ transform: 'scale(2) translateY(20px)' }}
      />
    </IonContent>
  );
};

export default Splashscreen;
