import { IonContent, useIonRouter } from "@ionic/react";
import { useEffect } from "react";
import PageLayout from "../../components/Layout/Layout";
import Header from "../../components/Header/Header";

import CustomButton from "../../components/Common/CustomButton/CustomButton";
import { chevronForwardOutline } from "ionicons/icons";
import { HeroCard, ServiceCard } from "./AllCardsReusable";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchCategories, fetchRequirements } from "../../features/post-requirements/postRequirementThunk";
import { RootState } from "../../app/store";

const PostRequirementHomePage: React.FC = () => {
  const ionRouter = useIonRouter();
  const searchParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
   const { categories, error } = useAppSelector((state: RootState) => state.postrequirements);
   console.log("requirements",categories)
const dispatch=useAppDispatch()

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const services = [
    { id: 1, title: "Hire individual Professional", image: "/assets/images/2.jpg", route: "/post-requirements/hire-professional" },
    { id: 2, title: "Hire Contractors", image: "/assets/images/2.jpg", route: "/post-requirements/hire-contractors" },
    { id: 3, title: "Choose Management Service", image: "/assets/images/2.jpg", route: "/post-requirements/management-service" },
    { id: 4, title: "Choose Small Home Need Services", image: "/assets/images/2.jpg", route: "/post-requirements/home-services" },
    { id: 5, title: "Legal Work Service", image: "/assets/images/2.jpg", route: "/post-requirements/legal-service" },
    { id: 6, title: "House Renovation Service", image: "/assets/images/2.jpg", route: "/post-requirements/renovation-service" }
  ];

  const handleServiceClick = (route: string) => ionRouter.push(route, "forward", "push");
  
  const handleJbconxDirectly = () => ionRouter.push("/post-requirements/jbconx-directly", "forward", "push");

  useEffect(() => {
    const target = searchParams?.get('route');
    if (target) {
      ionRouter.push(target, "forward", "push");
    }
  }, []);

  return (
    <PageLayout header={<Header title="" />}>
      <IonContent>
        <HeroCard
          backgroundImage="/assets/images/intro53.jpeg"
          title="Choose"
          subtitle="what you want to start with ?"
          description="pick your options and select the service"
          backgroundColor="#274C77FF"
          textColor="#FFFFFFFF !font-bold !font-2xl"
          fontFamily="Aclonica"
        />

        <div className="px-4 pt-0 pb-2">
          <h2 className="text-2xl font-bold text-black mb-6 font-['Inter']">Explore</h2>
          <div className="grid grid-cols-2 gap-4 justify-items-center">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                image={service.image}
                route={service.route}
                onClick={handleServiceClick}
              />
            ))}
          </div>
          
          {/* Choose JBconx Directly Button */}
          <div className="my-6 flex justify-center">
            <CustomButton
              text="Choose JBconx Directly"
              icon="chevronForwardOutline"
              // onClick={handleJbconxDirectly}
              onClick={() => ionRouter.push("/post-requirements/jbconx-directly", "forward", "push")}
              className="w-[336px] h-[36px] px-3 flex items-center justify-center font-['Inter'] text-sm leading-[22px] font-normal text-[#6096BAFF] bg-[#F4F8FAFF] border-none rounded-md gap-1.5 hover:bg-[#F2F7F9FF] active:bg-[#EBF1F6FF] disabled:opacity-40"
            />
          </div>

        </div>
      </IonContent>
    </PageLayout>
  );
};

export default PostRequirementHomePage;
