import { IonButton, IonIcon } from "@ionic/react";
import {
  cartOutline,
  addOutline,
  heartOutline,
  homeOutline,
  callOutline,
  calendarOutline,
  closeOutline,
  refreshOutline,
  pencilOutline,
  chatbubbleOutline,
  playOutline,
  alertCircleOutline,
  eyeOutline,
  thumbsUpOutline,
  pricetagOutline
} from "ionicons/icons";
import { MouseEvent } from "react";

interface CustomButtonProps {
  text: string;
  icon?: string;  
  onClick?: (e: MouseEvent<HTMLIonButtonElement>) => void;
  className?: string;
}

const iconMap: Record<string, string> = {
  cartOutline,
  addOutline,
  heartOutline,
  homeOutline,
  callOutline,
  calendarOutline,
  closeOutline,
    refreshOutline,
  pencilOutline,
 playOutline,
  chatbubbleOutline,
  alertCircleOutline,
 eyeOutline,
 thumbsUpOutline,
 pricetagOutline
};

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  icon,
  onClick,
  className = "",
}) => {
  return (
    <IonButton
      onClick={onClick}
      fill="clear"
      type="submit"
      className={`!m-0 !min-h-0 opacity-100 !shadow-none flex items-center justify-center font-inter font-normal normal-case rounded-md ${className}`}
    >
      {icon && (
        <IonIcon
          icon={iconMap[icon]} 
          className="w-4 h-4 mr-1"
        />
      )}
      {text}
    </IonButton>
  );
};

export default CustomButton;
