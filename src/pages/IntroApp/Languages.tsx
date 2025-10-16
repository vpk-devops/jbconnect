import React from 'react';
import { IonHeader, IonToolbar, IonButtons, IonBackButton } from '@ionic/react';
import { searchOutline } from 'ionicons/icons';
import CustomButton from '../../components/Common/CustomButton/CustomButton';
import { IonIcon } from '@ionic/react';

const languages = [
  { icon: 'E', label: 'English' },
  { icon: 'ಕ', label: 'ಕನ್ನಡ' },
  { icon: 'తె', label: 'తెలుగు' },
  { icon: 'த', label: 'தமிழ்' },
  { icon: 'മ', label: 'മലയാളം' },
  { icon: 'हि', label: 'हिंदी' },
  { icon: 'ਪੰ', label: 'ਪੰਜਾਬੀ' },
  { icon: 'म', label: 'मराठी' },
  { icon: 'ગુ', label: 'ગુજરાતી' },
  { icon: 'ଓ', label: 'ଓଡ଼ିଆ' },
  { icon: 'कों', label: 'कोंकणी' },
];

const Languages: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-[#e6f0fa] font-inter flex flex-col items-start">
      {/* Header: back icon left, title perfectly centered */}
      <IonHeader className="ion-no-border bg-white z-20" style={{ zIndex: 20, position: 'relative' }}>
        <IonToolbar className="bg-white h-[56px] flex items-center px-4 relative">
          <IonButtons className="absolute left-0 top-0 h-full flex items-center" slot="start">
            <IonBackButton defaultHref="/" color="dark" className="relative" text="" />
          </IonButtons>
          <div className="flex justify-center items-center w-full">
            <span className="font-[Archivo] font-semibold text-[20px] leading-[30px] text-[#171A1FFF] select-none">Languages</span>
          </div>
        </IonToolbar>
      </IonHeader>
      {/* Responsive card below header, never overlaps */}
      <div className="mt-[23px] mx-auto w-full max-w-[400px] min-w-0 h-auto min-h-[500px] bg-white rounded-xl shadow border border-[#c9e2fa] relative flex flex-col px-3 sm:px-6 overflow-auto">
        {/* Select Language to Proceed above search bar */}
        <div className="text-center font-semibold text-lg mb-3 w-full mt-8">Select Language to Proceed</div>
        {/* Search Bar (static) */}
        <div className="relative w-full mb-4">
          <div className="relative w-full h-8">
            <input
              type="text"
              value={""}
              onChange={() => {}}
              placeholder="Search, for language"
              className="w-full h-8 pl-[44px] pr-4 font-inter text-[16px] leading-[26px] font-normal bg-[#f3f4f6] rounded-xl border-0 outline-none focus:bg-white focus:text-[#BDC1CA] hover:text-[#BDC1CA] hover:bg-[#f3f4f6] disabled:text-[#BDC1CA] disabled:bg-[#f3f4f6]"
              style={{ boxSizing: 'border-box' }}
              disabled
            />
            <IonIcon icon={searchOutline} className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 fill-[#171A1FFF] pointer-events-none" />
          </div>
        </div>
        {/* Language Grid with last row centered, moved up */}
        <div className="flex-1 flex flex-col justify-start">
          <div className="grid grid-cols-3 gap-3 w-full">
            {languages.slice(0, 9).map((lang) => (
              <div
                key={lang.label}
                className="flex flex-col items-center justify-center h-16 rounded-lg border border-[#e6f0fa] bg-[#f3f7fa] text-2xl w-full"
              >
                <span className="text-2xl font-extrabold mb-1">{lang.icon}</span>
                <span className="text-xs text-gray-700 font-medium">{lang.label}</span>
              </div>
            ))}
            {/* Last row: empty cell, then last two languages, then empty cell for perfect centering */}
            <div />
            {languages.slice(9, 11).map((lang) => (
              <div
                key={lang.label}
                className="flex flex-col items-center justify-center h-16 rounded-lg border border-[#e6f0fa] bg-[#f3f7fa] text-2xl w-full"
              >
                <span className="text-2xl font-extrabold mb-1">{lang.icon}</span>
                <span className="text-xs text-gray-700 font-medium">{lang.label}</span>
              </div>
            ))}
            <div />
          </div>
        </div>
        {/* Convert Button - bottom right, old position */}
        <div className="absolute right-6 bottom-6">
          <CustomButton
            text="Convert"
            className="bg-[#234567] text-white rounded-md px-6 py-2 font-semibold tracking-wide text-sm shadow-sm hover:bg-[#19314a] transition"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default Languages;
