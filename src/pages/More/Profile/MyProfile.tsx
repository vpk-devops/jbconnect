import { IonContent, IonIcon, IonToggle, useIonRouter } from "@ionic/react";
import {
  pencilOutline,
  heartOutline,
  chevronForwardOutline,
  globeOutline,
  shieldCheckmarkOutline,
  moonOutline,
  notificationsOutline,
} from "ionicons/icons";
import PageLayout from "../../../components/Layout/Layout";
import Header from "../../../components/Header/Header";
import CustomButton from "../../../components/Common/CustomButton/CustomButton";
import profileImage from "/assets/images/D1.jpg";
import { CustomUserCard } from "../../../components/Common/CustomCards/CustomCards";

interface ItemProps {
  icon: string;
  label: string;
  right?: string;
  toggle?: boolean;
  defaultChecked?: boolean;
}

const MyProfile: React.FC = () => {
  const ionRouter = useIonRouter();
  return (
    <PageLayout
      header={<Header title="MyProfile" type="page" showRightIcon={false} />}
    >
      <IonContent>
        <CustomUserCard
          name="John Doe"
          email="gggggd@yahoo.com"
          phone="(325) 635-0662"
          src={profileImage}
          variant="profile"
        />
        <CustomButton
          text="Edit Profile"
          icon={pencilOutline}
          className=" text-white bg-custom-blue !m-6 opacity-100  "
          onClick={() => ionRouter.push("/edit-profile", "forward")}
        />

        <div className=" bg-white rounded-md overflow-hidden px-3 py-2">
          <Item icon={heartOutline} label="Favorites" />
          <Section title="Preference" />
          <Item icon={globeOutline} label="Language" right="English" />
          <Item icon={shieldCheckmarkOutline} label="Privacy" />
          <Item icon={moonOutline} label="Dark Mode" toggle />
          <Item
            icon={notificationsOutline}
            label="Notification"
            toggle
            defaultChecked
          />
        </div>
      </IonContent>
    </PageLayout>
  );
};

const Item: React.FC<ItemProps> = ({
  icon,
  label,
  right,
  toggle,
  defaultChecked = false,
}) => (
  <div className="flex items-center justify-between px-4 py-3">
    <div className="flex items-center gap-4">
      <IonIcon icon={icon} className="text-xl text-custom-black font-bold" />
      <span className=" font-inter text-custom-black font-normal text-sm leading-[22px] pt-1">
        {label}
      </span>
    </div>

    {toggle ? (
      <IonToggle checked={defaultChecked} />
    ) : right ? (
      <div className="flex items-center   gap-1">
        <span className="text-custom-linegray">{right}</span>
        <IonIcon
          icon={chevronForwardOutline}
          className="text-custom-black text-lg"
        />
      </div>
    ) : (
      <IonIcon
        icon={chevronForwardOutline}
        className="text-custom-black text-lg"
      />
    )}
  </div>
);

const Section: React.FC<{ title: string }> = ({ title }) => (
  <div className="bg-gray-100 px-4 py-2 text-lg font-bold text-gray-500 font-archivo my-3">
    {title}
  </div>
);

export default MyProfile;
