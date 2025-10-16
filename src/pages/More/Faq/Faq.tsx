import Header from "../../../components/Header/Header";
import {
  IonContent,
  IonIcon,
  IonText,
  IonItem,
  IonLabel,
  IonAccordionGroup,
  IonAccordion,
  IonCard,
} from "@ionic/react";
import {helpCircleOutline } from "ionicons/icons";
import PageLayout from "../../../components/Layout/Layout";
import faqImage from '/assets/images/faq.jpeg'


const Faq: React.FC = () => {
  const faqData = [
  {
    category: "Construction & Renovation",
    questions: [
      "What documents do I need to upload?",
      "Can I hire professionals directly from the app?",
      "How do I track my project status?",
    ],
  },
  {
    category: "Hiring Professionals",
    questions: [
      "What qualifications do engineers or contractors have?",
      "Can I view past work of service providers?",
      "How do I rate a professional after work is completed?",
      "Can I track daily progress of my project?",
      "Can I assign work to different team members?",
      "Can I manage and track project budgets?",
      "How can I hire professionals like contractors or architects?",
      "What if I face a technical issue?",
    ],
  },
];

  return (
    <PageLayout header={<Header title="FAQs" type="page" showRightIcon={false} />}>
      <IonContent>
        <div className="px-4 mt-4">
          <img src={faqImage} className="w-full mx-auto max-w-sm h-40 object-cover rounded-[8px]" />
        </div>
        <div className="w-full min-h-[100vh] bg-[#A3CEF163] flex flex-col  mt-3">
          <IonCard className="p-3  bg-white shadow-none rounded-lg">
          <div className="flex items-center gap-2 mb-4">
          <IonIcon icon={helpCircleOutline} className="text-2xl text-custom-blue" />
          <IonText className=" font-inter text-custom-black font-bold text-base leading-[26px]">
            Frequently Asked Questions (FAQs)
          </IonText>
        </div>

        {faqData.map((group, index) => (
          <div key={index} className="mb-6  bg-white ">
            <p className="font-inter text-custom-black font-bold text-sm leading-[22px] pb-2 ">
              {group.category}
            </p>

            <IonAccordionGroup>
              {group.questions.map((q, qIndex) => (
                <IonAccordion value={`item-${index}-${qIndex}`} key={qIndex} className="!bg-white ">
                  <IonItem slot="header"  className="border-none border-[#BDC1CAFF]  !bg-white rounded-none">
                    <IonLabel className="!font-inter !text-custom-black font-normal !text-sm leading-[22px]">{q}</IonLabel>
                    {/* <IonIcon icon={chevronDownOutline} slot="end" className="text-[#274C77]" /> */}

                  </IonItem>
                  <div className="ion-padding text-sm text-custom-light font-normal !bg-white px-4 py-2" slot="content">
                   "{q}".
                  </div>
                </IonAccordion>
              ))}
            </IonAccordionGroup>
          </div>
        ))}
        </IonCard>
        </div>
      </IonContent>
    </PageLayout>
  )
}
export default Faq;