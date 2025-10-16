import { IonIcon, IonInput, IonItem, IonSearchbar, useIonRouter } from "@ionic/react";
import {
  locationOutline,
  searchOutline,
  cartOutline,
} from "ionicons/icons";

import { useAppSelector } from "../../../app/hooks";

const LocationSearch: React.FC = () => {
  const ionRouter = useIonRouter();
  const { addresses, mainAddressId } = useAppSelector((state) => state.order);
  const selectedAddress = addresses.find((addr) => addr.id === mainAddressId);
  const { sections } = useAppSelector((state) => state.cart);
  const cartCount = sections.reduce(
    (sum, sec) => sum + sec.items.reduce((s, item) => s + item.quantity, 0),
    0
  );

  return (
    <div className="px-4 pt-6">
      <div className="mx-2  flex justify-between items-start">
        <div>
          <h6 className="font-medium text-custom-blue text-[12px] px-3 py-1">
            Your Location
          </h6>
          <div className="flex items-center mb-4">
            <IonIcon
              icon={locationOutline}
              className="text-lg text-custom-black"
              onClick={() => ionRouter.push("/home-services/select-address?mode=main", "forward", "push")}
            />

            <span className="ml-2 text-sm font-normal font-inter leading-slung text-custom-black">
              {selectedAddress
                ? selectedAddress.text.split(",")[0]
                : "Select your address"}
            </span>
          </div>
        </div>
        <div
          className="relative w-8 h-8 rounded-full border border-custom-blue flex items-center justify-center my-2 p-1 cursor-pointer"
          onClick={() => ionRouter.push("/home-services/cart", "forward")}
        >
          <IonIcon icon={cartOutline} className="text-xl text-custom-blue" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-custom-blue text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>
      </div>

      <IonItem
        lines="none"
        className="relative flex items-center bg-white border border-[#274C77FF] rounded-lg mx-2 h-10"
      >
        <IonIcon icon={searchOutline} className="text-custom-black text-xl" slot="start" />
        <IonInput
          placeholder="Search for services"
          className="flex-1 font-inter bg-transparent text-base md:text-lg text-custom-gray focus:outline-none"
        />
      </IonItem>
    </div>
  );
};

export default LocationSearch;
