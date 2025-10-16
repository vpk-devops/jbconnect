
import React, { useState } from "react";
import {
  IonContent,
  IonInput,
  IonText,
  IonToast,
} from "@ionic/react";
import Header from "../../../components/Header/Header";
import PageLayout from "../../../components/Layout/Layout";
import CustomModal from "../../../components/Common/CustomModal/CustomModal";
import giftboxIcon from "/assets/images/giftbox.png";
import cashIcon from "/assets/images/cash.png";
import {
  logoWhatsapp,
  logoInstagram,
  chatbubbleEllipsesOutline,
  mailOutline,
  copyOutline,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import CustomButton from "../../../components/Common/CustomButton/CustomButton";
import { Share } from "@capacitor/share";

const ReferEarn: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [showCopied, setShowCopied] = useState(false);

  const referCode = "FEGVHJNYR";
  const message = `Hey! Use my referral code ${referCode} to get ₹500 off on your first order. Download the app and apply the code! 🚀`;
  const appLink = "https://yourappdownloadlink.com"; // actaul app link

  const handleCopy = async () => {
    await navigator.clipboard.writeText(referCode);
    setShowCopied(true);
  };

  const handleShare = async (platform: string) => {
    let shareText = message;

    switch (platform) {
      case "whatsapp":
        shareText = `Hey! Use my referral code ${referCode} to get ₹500 off. 🚀\n${appLink}`;
        break;
      case "instagram":
        shareText = `Invite via Instagram! Use referral code ${referCode}.\n${appLink}`;
        break;
      case "sms":
        shareText = `Hey! Use referral code ${referCode} and get ₹500 off.\n${appLink}`;
        break;
      case "email":
        shareText = `Hello,\n\nHere’s my referral code: ${referCode}\nUse it to get ₹500 off on your first order.\n\nDownload the app: ${appLink}`;
        break;
      default:
        break;
    }

    await Share.share({
      title: "Refer & Earn",
      text: shareText,
      url: appLink,
      dialogTitle: "Share your referral code",
    });
  };

  return (
    <PageLayout
      header={<Header title="Refer & Earn" type="page" showRightIcon={false} />}
    >
      <IonContent className="ion-padding">
        <div className="flex flex-col items-center justify-center md:justify-evenly h-full w-full max-w-sm mx-auto px-4">
          <img
            src={giftboxIcon}
            alt="Gift Box"
            className="w-36 h-32 mb-4 rotate-[10.48deg]"
          />

          <IonText className="text-xl font-bold py-4 text-custom-black font-archivo">
            Get a promo code
          </IonText>

          <div className="flex items-center w-full mb-4">
            <IonInput
              value={referCode}
              className="border rounded-lg text-center text-custom-black font-bold w-full !h-[3px]"
              readonly
            />
            <CustomButton
              text="Share"
              className="!w-24 !h-10 !p-0 !text-center bg-custom-blue text-white rounded-md"
              onClick={() => setModalOpen(true)}
            />
          </div>

          <IonText className="text-center mb-8 text-sm text-custom-black-600 mt-3 leading-[20px] max-w-xs">
            Tap below to get your promo code and start earning rewards through
            our referral program!
          </IonText>

          <div className="flex items-center w-full my-2">
            <div className="flex-grow border-t border-gray-400"></div>
            <img src={cashIcon} alt="Coupon" className="w-20 h-20 mx-4" />
            <div className="flex-grow border-t border-gray-400"></div>
          </div>

          <IonText className="text-center text-sm leading-[20px]">
            Don't have a promo code?
            <br />
            <a href="#" className="text-green-500 font-bold">
              Refer friends & family
            </a>{" "}
            and earn
          </IonText>
        </div>

        {/* Share Modal */}
        <CustomModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          title="Sharing Refer Code"
        >
          <div className="flex items-center bg-gray-100 rounded-lg p-2 my-5">
            <IonInput
              value={referCode}
              readonly
              className="flex-1 text-center font-bold"
            />
            <button
              onClick={handleCopy}
              className="ml-2 p-2 rounded bg-white shadow"
            >
              <IonIcon icon={copyOutline} className="w-5 h-5 text-custom-blue" />
            </button>
          </div>

          <div className="flex justify-around my-3">
            <IonIcon
              icon={logoWhatsapp}
              className="w-8 h-8 cursor-pointer"
              onClick={() => handleShare("whatsapp")}
            />
            <IonIcon
              icon={logoInstagram}
              className="w-8 h-8 cursor-pointer"
              onClick={() => handleShare("instagram")}
            />
            <IonIcon
              icon={chatbubbleEllipsesOutline}
              className="w-8 h-8 cursor-pointer"
              onClick={() => handleShare("sms")}
            />
            <IonIcon
              icon={mailOutline}
              className="w-8 h-8 cursor-pointer"
              onClick={() => handleShare("email")}
            />
          </div>
        </CustomModal>

        {/* Copy Toast */}
        <IonToast
          isOpen={showCopied}
          message="Copied!"
          duration={1500}
          onDidDismiss={() => setShowCopied(false)}
        />
      </IonContent>
    </PageLayout>
  );
};

export default ReferEarn;
