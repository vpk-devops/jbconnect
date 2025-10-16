import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonIcon,
  IonMenuButton,
  useIonRouter,
} from "@ionic/react";

import {
  ellipsisVerticalSharp,
  notificationsOutline,
  chevronBackOutline,
  documentOutline,
} from "ionicons/icons";

interface HeaderProps {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  titleIcon?: string;
  titleColor?: string;
  type?: "home" | "page";
  showRightIcon?: boolean;
  variant?: "default" | "subtitle";
  onBack?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  titleIcon,
  titleColor = "text-custom-black",
  type = "home",
  showRightIcon = true,
  variant = "default",
  onBack,
}) => {
  const ionRouter = useIonRouter();
  const canGoBack = ionRouter.canGoBack();

  return (
    <IonHeader className="bg-white !shadow-none">
      <IonToolbar
        className="bg-white !px-3 !py-2"
        style={
          {
            "--background": "transparent",
            "--border-width": "0",
          } as React.CSSProperties
        }
      >
        <IonButtons slot="start">
          {type === "home" ? (
            <IonMenuButton
              autoHide={false}
              className="ion-no-margin text-3xl"
              style={{ color: "#171A1FFF" }}
            />
          ) : (
            // <IonIcon
            //   icon={chevronBackOutline}
            //   className="w-[30px] h-[30px] fill-custom-black"

            //   onClick={() => {
            //     if (ionRouter.canGoBack()) {
            //       ionRouter.goBack();
            //     } else {
            //       ionRouter.push("/home-services/home", "back"); // fallback to services page
            //     }
            //   }}
            // />
            <IonIcon
              icon={chevronBackOutline}
              className="w-[30px] h-[30px] fill-custom-black"
              onClick={() => {
                if (onBack) {
                  onBack(); 
                } else if (ionRouter.canGoBack()) {
                  ionRouter.goBack();
                } else {
                  ionRouter.push("/home-services/home", "back");
                }
              }}
            />
          )}
        </IonButtons>
        {/* Title + Subtitle Variants */}
        <div slot="start" className="flex flex-col ml-5 pt-0.5">
          {variant === "default" && (
            <div className="flex items-center gap-1">
              {titleIcon && (
                <IonIcon
                  icon={titleIcon}
                  className="w-[20px] h-[20px] !fill-custom-blue pt-1"
                />
              )}
              <span className={`font-bold text-lg ${titleColor}`}>{title}</span>
            </div>
          )}

          {variant === "subtitle" && (
            <div className="flex flex-col items-start justify-start mt-1 ">
              <span className={`font-bold text-lg font-inter ${titleColor}`}>{title}</span>
              {subtitle && (
                <span className="text-[10px] text-custom-gray font-inter font-medium ">
                  {subtitle}
                </span>
              )}
            </div>
          )}
        </div>

        {showRightIcon && (
          <IonButtons slot="end">
            {type === "home" ? (
              <IonIcon
                icon={ellipsisVerticalSharp}
                className="w-[24px] h-[24px] fill-custom-black "
                onClick={() => ionRouter.push("/more", "none", "replace")}
              />
            ) : (
              <IonIcon
                icon={notificationsOutline}
                className="w-[30px] h-[30px] fill-custom-black pt-1"
              />
            )}
          </IonButtons>
        )}
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
