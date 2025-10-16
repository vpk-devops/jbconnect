import {
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel
} from "@ionic/react";
import {
  homeOutline,
  businessOutline,
  locateOutline,
  listOutline
} from "ionicons/icons";
import { useLocation } from "react-router-dom";

const baseTabButton =
  "flex-1 bg-transparent flex flex-col items-center justify-center gap-1 rounded-md transition-colors duration-200";
const baseIconClass = "text-[26px]";
const baseLabelClass = "text-[11px] font-semibold font-inter";

const HomeServicesTabs: React.FC = () => {
  const location = useLocation();

  const isActive = (tabPath: string) => {
    const { pathname } = location;

    if (tabPath === "/home") {
      // Home should only be active for EXACT "/home"
      return pathname === "/home";
    }

    if (tabPath === "/home-services/home") {
      // Active for all /home-services/* EXCEPT professionals & bookings
      return (
        pathname.startsWith("/home-services") &&
        !pathname.startsWith("/home-services/professionals") &&
        !pathname.startsWith("/home-services/bookings")
      );
    }

    if (tabPath === "/home-services/professionals") {
      return pathname.startsWith("/home-services/professionals");
    }

    if (tabPath === "/home-services/bookings") {
      return pathname.startsWith("/home-services/bookings");
    }

    return false;
  };

  return (
    <IonTabBar
      slot="bottom"
      className="bg-white border-t rounded-t-[12px] h-[60px] shadow-[0_-5px_20px_rgba(0,0,0,0.05)]"
    >
      <IonTabButton tab="home" href="/home" className={baseTabButton}>
        <IonIcon
          icon={homeOutline}
          className={`${baseIconClass} ${isActive("/home") ? "text-[#6096baff]" : "text-[#565D6DFF]"}`}
        />
        <IonLabel
          className={`${baseLabelClass} ${isActive("/home") ? "text-[#6096baff]" : "text-[#565D6DFF]"}`}
        >
          Home
        </IonLabel>
      </IonTabButton>

      <IonTabButton tab="services" href="/home-services/home" className={baseTabButton}>
        <IonIcon
          icon={businessOutline}
          className={`${baseIconClass} ${isActive("/home-services/home") ? "text-[#6096baff]" : "text-[#565D6DFF]"}`}
        />
        <IonLabel
          className={`${baseLabelClass} ${isActive("/home-services/home") ? "text-[#6096baff]" : "text-[#565D6DFF]"}`}
        >
          HomeServices
        </IonLabel>
      </IonTabButton>

      <IonTabButton tab="professionals" href="/home-services/professionals" className={baseTabButton}>
        <IonIcon
          icon={locateOutline}
          className={`${baseIconClass} ${isActive("/home-services/professionals") ? "text-[#6096baff]" : "text-[#565D6DFF]"}`}
        />
        <IonLabel
          className={`${baseLabelClass} ${isActive("/home-services/professionals") ? "text-[#6096baff]" : "text-[#565D6DFF]"}`}
        >
          Professionals
        </IonLabel>
      </IonTabButton>

      <IonTabButton tab="bookings" href="/home-services/bookings" className={baseTabButton}>
        <IonIcon
          icon={listOutline}
          className={`${baseIconClass} ${isActive("/home-services/bookings") ? "text-[#6096baff]" : "text-[#565D6DFF]"}`}
        />
        <IonLabel
          className={`${baseLabelClass} ${isActive("/home-services/bookings") ? "text-[#6096baff]" : "text-[#565D6DFF]"}`}
        >
          Bookings
        </IonLabel>
      </IonTabButton>
    </IonTabBar>
  );
};

export default HomeServicesTabs;
