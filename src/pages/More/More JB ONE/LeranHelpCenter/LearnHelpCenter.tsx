import { IonContent, useIonRouter } from "@ionic/react";
import { useState } from "react";
import {
  CourseCard,
  SupportCard,
} from "../../../../components/Common/CustomCards/CustomCards";
import Header from "../../../../components/Header/Header";
import PageLayout from "../../../../components/Layout/Layout";
import {
  chatbubblesOutline,
  callOutline,
  mailOutline,
  shieldCheckmarkOutline,
  playOutline,
  peopleOutline,
} from "ionicons/icons";
import CustomSwiperComponent from "../../../../components/Common/CustomSwiperSlider/CustomSwiperComponent";


const LearnHelpCenter: React.FC = () => {
  const [tab, setTab] = useState<"learn" | "help">("learn");
  const router = useIonRouter();
  const courses = [
    {
      title: "Construction Site Safety Fundamentals",
      desc: "Learn essential safety protocols, hazard identification, and emergency procedures for construction sites.",
      image: "/assets/images/learn.jpg",
      level: "Beginner",
      time: "4.5 hours",
      views: 2847,
      rating: 4.8,
      progress: 75,
      showProgress: true,
    },
    {
      title: "Advanced Welding Techniques",
      desc: "Advanced welding methods for structural steel and specialized construction applications.",
      image: "/assets/images/learn.jpg",
      level: "Beginner",
      time: "8 hours",
      views: 1456,
      rating: 4.7,
      progress: 0,
      showProgress: false,
    },
  ];
  const supportItems = [
    {
      icon: chatbubblesOutline,
      title: "Live Chat Support",
      subtitle: "Get instant help from our construction experts",
      status: "Online",
      buttonText: "Start Chat",
      onClick: () => router.push("/livechat", "forward"),
    },
    {
      icon: callOutline,
      title: "Phone Support",
      subtitle: "Call us for immediate help and assistance",
      status: "Available",
      buttonText: "Call Now",
      onClick: () => router.push("/phonecall", "forward"),
    },
    {
      icon: mailOutline,
      title: "Email Support",
      subtitle: "Send detailed questions to our support team",
      status: "Respond 2–4 hour",
      buttonText: "Send Email",
      onClick: () => router.push("/emailsupport", "forward"),
    },
  ];

  const supportItems1 = [
    {
      icon: shieldCheckmarkOutline,
      title: "Safety Guidelines",
      subtitle: "Comprehensive safety protocols for construction sites",
      status: "Safe",
    },
    {
      icon: playOutline,
      title: "Video Tutorials",
      subtitle: "Step-by-step construction walkthroughs",
      status: "Watch",
    },
    {
      icon: peopleOutline,
      title: "Community Forum",
      subtitle: "Connect with other construction professionals",
      status: "Community",
    },
  ];

  return (
    <PageLayout
      header={
        <Header
          title={tab === "learn" ? "Learn Center" : "Help Center"}
          type="page"
          showRightIcon={false}
        />
      }
    >
      <IonContent className="bg-white">
        <div className="pt-2 px-4">
          <div className="flex justify-around space-x-6 relative  border-gray-200">
            {["learn", "help"].map((key) => (
              <button
                key={key}
                onClick={() => setTab(key as "learn" | "help")}
                className={`pb-2 text-base text-inter font-semibold relative transition-all duration-200 ${tab === key ? "text-[#23446C]" : "text-gray-500"
                  }`}
              >
                {key === "learn" ? "Learn Center" : "Help Center"}
                {tab === key && (
                  <div className="">
                    <span className="absolute  left-0 -bottom-[1px] w-full h-[2px] bg-[#23446C] rounded-md "></span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="px-4 py-4 space-y-6">
          {tab === "learn" &&
            courses.map((item, i) => <CourseCard key={i} {...item} />)}

          {tab === "help" && (
            <div>
              <h2 className="text-lg font-archivo font-bold text-[#274C77FF] mb-3">
                Get Support
              </h2>
              <CustomSwiperComponent
                items={supportItems}
                slidesPerView={1.2}
                spaceBetween={16}
                autoplay={true}
                breakpoints={{
                  640: { slidesPerView: 2 },
                }}
                renderItem={(item, idx) => (
                  <SupportCard
                    key={idx}
                    icon={item.icon}
                    title={item.title}
                    subtitle={item.subtitle}
                    status={item.status}
                    buttonText={item.buttonText}
                    onClick={item.onClick}
                  />
                )}
                className="mb-6"
              />

              {/*  Quick Resource */}
              {/* Quick Resource */}
              <h2 className="text-lg font-archivo font-bold text-[#274C77FF] mb-3">
                Quick Resource
              </h2>
              <CustomSwiperComponent
                items={supportItems1}
                slidesPerView={1.2}
                spaceBetween={16}
                autoplay={true}
                breakpoints={{
                  640: { slidesPerView: 2 },
                }}
                renderItem={(item, idx) => (
                  <SupportCard
                    key={idx}
                    icon={item.icon}
                    title={item.title}
                    subtitle={item.subtitle}
                    status={item.status}
                  />
                )}
                className="mb-6"
              />

              <div className="px-4 ">
                <h2 className="text-lg font-archivo font-bold text-[#274C77FF] mb-2">
                  Frequently asked questions
                </h2>
                <h2 className="text-base font-inter font-bold text-custom-black mb-2">
                  Common questions?
                </h2>
                <div className="space-y-3 text-sm text-[#171A1FCC]">
                  <p>• How do I track my certification progress?</p>
                  <p>• How to report a safety incident?</p>
                  <p>• Where can I find the course materials?</p>
                  <p>• How to update my professional profile?</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </IonContent>
    </PageLayout>
  );
};

export default LearnHelpCenter;
