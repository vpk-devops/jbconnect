import {
  IonContent,
  IonCard,
} from "@ionic/react";
import {
  documentTextOutline,
  lockClosedOutline,
  eyeOutline,
  globeOutline,
  timeOutline,
} from "ionicons/icons";
import PageLayout from "../../../components/Layout/Layout";
import Header from "../../../components/Header/Header";
import { TermsCard } from "../../../components/Common/CustomCards/CustomCards";


const terms = [
  {
    icon: documentTextOutline,
    title: "1. Acceptance of Terms",
    description:
      "By accessing and using this mobile application, you accept and agree to be bound by the terms and provision of this agreement.",
  },
  {
    icon: eyeOutline,
    title: "2. Privacy Policy",
    description:
      "Your privacy is important to us. We collect and use your information in accordance with our Privacy Policy.",
  },
  {
    icon: lockClosedOutline,
    title: "3. Data Security",
    description:
      "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
  },
  {
    icon: globeOutline,
    title: "5. Service Availability",
    description:
      "We strive to maintain service availability but cannot guarantee uninterrupted access. We may modify or discontinue services with notice.",
  },
  {
    icon: timeOutline,
    title: "6. Updates to Terms",
    description:
      "We may update these terms from time to time. Continued use of the service after changes constitutes acceptance of the new terms.",
  },
];

const PrivacyPolicyPage: React.FC = () => {
  return (
     <PageLayout header={<Header title="PrivacyPolicy" type="page" showRightIcon={false} />}>
  <IonContent className="!bg-transparent">
    <div className="w-full min-h-[100vh] bg-[#A3CEF163] flex flex-col px-2 pt-4 ">
      {terms.map((item, index) => (
        <TermsCard
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}

      <IonCard className="rounded-xl border border-gray-200 mt-4">
             <div className="text-center p-8">
          <h3 className="font-inter text-md leading-[26px] font-bold text-custom-black">Questions or Concerns?</h3>
          <p className="text-sm text-custom-black-600 mt-1 leading-[20px] ">
            If you have any questions about these Terms and Conditions, please contact us.
          </p>
          <p className="text-sm text-custom-black-600 mt-1 leading-[20px] pt-3">Email: support@yourapp.com</p>
            
             <p className="text-sm text-custom-black-600 mt-1 leading-[20px] ">Phone: +1 (555) 123-4567</p>
       </div>
      </IonCard>
    </div>
  </IonContent>
</PageLayout>


  );
};

export default PrivacyPolicyPage;
