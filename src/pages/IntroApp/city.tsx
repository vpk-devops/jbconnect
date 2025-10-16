import React from 'react';
import { IonIcon, IonPage, IonContent } from '@ionic/react';
import { chevronBackOutline, searchOutline } from 'ionicons/icons';

// List of cities 
const cities = [
  { name: 'Bangalore', image: 'bangalore.jpeg' },
  { name: 'Vizag', image: 'vizag.jpg' },
  { name: 'Chennai', image: 'chennai.jpg' },
  { name: 'Kerala', image: 'kerala.jpg' },
  { name: 'Hyderabad', image: 'hyderabad.jpg' },
  { name: 'Goa', image: 'goa.jpg' },
  { name: 'Madhya Pradesh', image: 'madhya pradesh.jpg' },
  { name: 'Mumbai', image: 'mumbi.jpg' },
  { name: 'Delhi', image: 'delhi.jpg' },
  { name: 'Maharashtra', image: 'maharastra.jpg' },
  { name: 'Punjab', image: 'punjab.jpg' },
  { name: 'Rajasthan', image: 'rajasthan.jpg' },
];


function getCityImage(filename: string) {
  return `/src/assets/images/${filename}`;
}

const CityCard = ({ name, image }: { name: string; image: string }) => (
  <div className="flex flex-col items-center group cursor-pointer">
    <div className="w-20 h-20 sm:w-20 sm:h-20 md:w-20 md:h-20 rounded-full border-4 city-image-border shadow-md overflow-hidden bg-white group-hover:scale-105 transition-transform" style={{ boxShadow: '0 2px 8px 0 #c9e2fa55' }}>
      <img
        src={getCityImage(image) as string}
        alt={name}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
    <span className="mt-2 text-xs sm:text-sm md:text-base text-[#234567] font-medium text-center w-24 truncate">{name}</span>
  </div>
);

const CityScreen: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="bg-white flex flex-col items-center px-0 sm:px-0">
        <style>{`
          .city-image-border {
            border-color: #bdc1ca !important;
          }
        `}</style>
        
        <div className="w-full flex items-center" style={{ height: 56 }}>
          <button
            className="ml-2 sm:ml-4 mt-4 p-2 rounded-full hover:bg-gray-100 focus:outline-none flex items-center justify-center"
            style={{ width: 48, height: 48 }}
            tabIndex={-1}
            aria-label="Back"
            type="button"
            disabled
          >
            <IonIcon icon={chevronBackOutline} className="text-[#171A1F]" style={{ width: 32, height: 32 }} />
          </button>
        </div>
        {/* Card Container */}
        <div className="mt-8 mx-auto w-full max-w-sm h-auto bg-[#E5F4FF] rounded-xl shadow border border-[#c9e2fa] flex flex-col pb-6 px-4 overflow-auto" style={{ boxShadow: '0 2px 16px 0 #c9e2fa55' }}>
          {/* Search Bar (static) */}
          <div className="relative w-full mt-6 mb-4">
            <input
              type="text"
              value={""}
              onChange={() => {}}
              placeholder="Search, for Location"
              className="w-full h-10 pl-12 pr-4 font-inter text-[16px] leading-[26px] font-normal bg-[#f3f4f6] rounded-xl border-0 outline-none focus:bg-white focus:text-[#234567] hover:text-[#234567] hover:bg-[#f3f4f6] disabled:text-[#BDC1CA] disabled:bg-[#f3f4f6]"
              style={{ boxSizing: 'border-box' }}
              disabled
            />
            <IonIcon icon={searchOutline} className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 fill-[#171A1FFF] pointer-events-none" />
          </div>
          {/* Popular Cities Title */}
          <div className="text-center font-semibold text-[20px] leading-[30px] select-none mb-6" style={{ fontFamily: 'Aoboshi One, serif', color: '#274C77FF' }}>Popular Cities</div>
          {/* City Grid  */}
          <div className="flex-1 flex flex-col justify-start">
            <div className="grid grid-cols-3 gap-y-8 gap-x-2 w-full">
              {cities.map(city => (
                <CityCard key={city.name} name={city.name} image={city.image} />
              ))}
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CityScreen;
