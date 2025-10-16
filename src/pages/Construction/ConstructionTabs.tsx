import React from "react";
import { IonTabBar, IonTabButton, IonIcon, IonLabel } from "@ionic/react";
import { useLocation } from "react-router-dom";
import { homeOutline, hammerOutline, listOutline, personOutline, folderOpenOutline, folderOpen, folderOpenSharp, folderSharp, folderOutline, clipboardOutline, documentLockOutline, documentAttachOutline, documentText, documentTextOutline, buildOutline, constructOutline } from "ionicons/icons";
import Managment from '../Managment/Managment';

const baseTabButton =
  "flex-1 bg-transparent flex flex-col items-center justify-center gap-1 rounded-md transition-colors duration-200";
const baseIconClass = "text-[26px]";
const baseLabelClass = "text-[11px] font-semibold font-inter";

const ConstructionTabs: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;

  const isActive = (tabPath: string) => pathname.startsWith(tabPath);

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
        <IonLabel className={`${baseLabelClass} ${isActive("/home") ? "text-[#6096baff]" : "text-[#565D6DFF]"}`}>
          Home
        </IonLabel>
      </IonTabButton>

      <IonTabButton tab="construction" href="/construction/home" className={baseTabButton}>
        <IonIcon
          icon={constructOutline}
          className={`${baseIconClass} ${isActive("/construction/home") ? "text-[#6096baff]" : "text-[#565D6DFF]"}`}
        />
        <IonLabel className={`${baseLabelClass} ${isActive("/construction/home") ? "text-[#6096baff]" : "text-[#565D6DFF]"}`}>
          Construction
        </IonLabel>
      </IonTabButton>

      <IonTabButton tab="managment" href="/construction/managment" className={baseTabButton}>
        <IonIcon
          icon={documentTextOutline}
          className={`${baseIconClass} ${isActive("/construction/managment") ? "text-[#6096baff]" : "text-[#565D6DFF]"}`}
        />
        <IonLabel className={`${baseLabelClass} ${isActive("/construction/managment") ? "text-[#6096baff]" : "text-[#565D6DFF]"}`}>
          Managment
        </IonLabel>
      </IonTabButton>

      <IonTabButton tab="myprojects" href="/construction/myprojects" className={baseTabButton}>
        <IonIcon
          icon={folderOutline}
          className={`${baseIconClass} ${isActive("/construction/myprojects") ? "text-[#6096baff]" : "text-[#565D6DFF]"}`}
        />
        <IonLabel className={`${baseLabelClass} ${isActive("/construction/myprojects") ? "text-[#6096baff]" : "text-[#565D6DFF]"}`}>
          My Projects
        </IonLabel>
      </IonTabButton>
    </IonTabBar>
  );
};

export default ConstructionTabs;
