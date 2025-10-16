import { IonPage, IonContent } from "@ionic/react";
import { useState } from "react";
import {
  IntroCard,
  IntroHeader,
  IntroImages,
} from "../../components/Common/CustomCards/CustomCards";

const AppIntro: React.FC = () => {
  const [page, setPage] = useState(0);

  const goNext = () => {
    if (page < 2) setPage(page + 1);

    else {
      console.log("Navigate to main app");
    }
  };
  const goPrev = () => {
    if (page > 0) setPage(page - 1);
    else {
      console.log("Already at first page");
    }
  };

  const introScreens = [
    // Screen 1
    <>
      <IntroHeader skip onSkip={goNext} />
      <IntroImages
        topImages={[
          "/assets/images/intro51.jpg",
          "/assets/images/intro2l2.jpg",
        ]}
        bottomImage="/assets/images/intro2r1.jpg"
      />
      <IntroCard
        title="Build Your Dream Project"
        description="A smart platform for building, remodeling, finding skilled professionals, managing home services, and keeping your project tasks organized. Everything you need to bring your dream space to life — all in one place."
        buttonText="Continue"
        onClick={goNext}
      />
    </>,
    // Screen 2
    <>
      <IntroHeader back skip onBack={goPrev} onSkip={goNext} />
      <IntroImages
        bottomImage="/assets/images/intro52.jpeg"
        bottomAspect="aspect-[358/412]"
      />
      <IntroCard
        title="Expert Team Management at Your Fingertips"
        description="Manage your entire construction journey with ease. From assigning engineers and contractors to tracking work progress and schedules, our app ensures smooth coordination and real-time updates — all managed by a skilled and reliable team."
        buttonText="Continue"
        onClick={goNext}
      />
    </>,
    // Screen 3
    <>
      <IntroHeader back onBack={goPrev} />
      <IntroImages
        bottomImage="/assets/images/intro61.jpeg"
        bottomAspect="aspect-[350/250]"
      />
      <IntroCard
        description="Welcome to JBone— your trusted platform for land buying, selling, construction, and renovation services. Before you continue, please review and accept the following:"
        sections={[
          {
            title: "Terms & Conditions",
            text: "Learn about your rights and responsibilities while using our platform, including usage rules, account obligations, and dispute resolution.",
          },
          {
            title: "Privacy Policy",
            text: "We value your privacy. See how we collect, store, and protect your personal data, including location and transaction information.",
          },
          {
            title: "User Guidelines",
            text: "Understand the standards all users must follow to ensure a safe, respectful, and trustworthy community.",
          },
        ]}
        buttonText="Agree And Continue"
        onClick={goNext}
        textAlign="left"
      />
    </>,
  ];

  return (
   <IonPage>
  <IonContent className="bg-white px-0 pt-0">
    <div className="min-h-screen flex flex-col justify-center items-center w-full font-[Archivo] px-4 pb-8">
      {introScreens[page]}
      <div className="flex justify-center mt-6 space-x-2">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full ${page === i ? "bg-gray-800" : "bg-gray-300"}`}
          ></span>
        ))}
      </div>
    </div>
  </IonContent>
</IonPage>
  );
};

export default AppIntro;
