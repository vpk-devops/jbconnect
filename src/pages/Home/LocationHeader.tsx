import { IonIcon, useIonRouter } from "@ionic/react";
import {
  locationOutline,
  chevronDownOutline,
  notificationsOutline,
  searchOutline,
} from "ionicons/icons";
import searcgLog from "/assets/images/searchlog.png";

const LocationHeader: React.FC = () => {
  const ionRouter = useIonRouter();

  return (
    <div className="px-4 py-0">
      <div className="mx-4 flex justify-between items-start">
        <div>
          <h2 className="text-sm font-medium text-custom-black-500">
            Location
          </h2>
          <div className="flex items-center mb-4">
            <IonIcon
              icon={locationOutline}
              className="text-lg text-custom-black"
            />
            <span className="ml-1 text-base font-semibold text-custom-black">
              Tampa
            </span>
            <IonIcon
              icon={chevronDownOutline}
              className="ml-1 text-xl text-custom-black"
            />
          </div>
        </div>
        <IonIcon
          icon={notificationsOutline}
          className="text-2xl font-bold text-custom-black"
          onClick={() => ionRouter.push("/notifications", "none", "replace")}
        />
      </div>
      {/* search section */}
      <div
        onClick={() => ionRouter.push("/search", "forward", "push")}
        className="relative flex items-center bg-white border border-[#A3CEF1FF] rounded-md px-3 py-2 mx-6 shadow-sm"
      >
        <IonIcon icon={searchOutline} className="text-custom-black text-xl" />
        <input
          type="text"
          placeholder="Search"
          className="flex-1 px-3 bg-transparent text-base md:text-lg text-custom-black focus:outline-none"
          readOnly
        />
        <img src={searcgLog} alt="ai-icon" className="w-6 h-6 rounded" />
      </div>
      <div className="flex gap-2 mt-1 flex-wrap justify-center align-center">
        {["Civil Engineers", "Electricians", "Constructions"].map((tag) => (
          <span
            key={tag}
            className="bg-[#F3F4F6FF] text-[10px] text-custom-black-700 px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LocationHeader;
