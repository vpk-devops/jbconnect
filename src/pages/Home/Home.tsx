import { IonContent } from "@ionic/react";
import PageLayout from "../../components/Layout/Layout";
import Header from "../../components/Header/Header";
import LocationHeader from "./LocationHeader";
import SliderCards from "./SliderCards";
import ExpertSection from "./ExpertSection";
import HomeServiceSelector from "./HomeServiceSelector";

import { useState } from "react";
import { categories } from "./data";
import ServiceGrid from "./Services";
import RenovationCards from "./RenovationCards";
import ExpertCard from "./TopRecomend";
import FlipCard from "./FlipCard";
import RecentFlips from "./FlipCard";
import BuilderCardSection from "./BuilderCard";
import EngineerPromoCard from "./ProjectManagment";

const Home: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0].name);

  return (
    <PageLayout header={<Header title="" />}>
      <IonContent>
        <LocationHeader />
        <ServiceGrid showAll={showAll} setShowAll={setShowAll} />
        <SliderCards />
        <ExpertSection />
        <HomeServiceSelector
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <RenovationCards />
        <ExpertCard/>
        <RecentFlips/>
        <BuilderCardSection/>
        <EngineerPromoCard/>
       
      </IonContent>
    </PageLayout>
  );
};

export default Home;
