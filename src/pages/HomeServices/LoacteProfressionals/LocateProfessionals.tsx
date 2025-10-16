import React, { useEffect, useState } from "react";
import { IonCard, IonContent, IonSearchbar } from "@ionic/react";
import PageLayout from "../../../components/Layout/Layout";
import {
  HowItWorksCard,
  ProfessionalCard,
} from "../../../components/Common/CustomCards/CustomCards";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  fetchAgents,
  fetchAgentsByCategoryId,
} from "../../../features/home-services/ProfessionalAgent/agentThunk";
import {
  bookOutline,
  cartOutline,
  idCardOutline,
  locationOutline,
} from "ionicons/icons";
import Header from "../../../components/Header/Header";

const steps = [
  {
    step: 1,
    icon: locationOutline,
    title: "Locate Professional based on your Requirement",
    description:
      "By search or by selecting your category of requirement choose a professional of your choice",
  },
  {
    step: 2,
    icon: cartOutline,
    title: "Add your problem to cart",
    description: "Select your problem and add that to cart",
  },
  {
    step: 3,
    icon: idCardOutline,
    title: "Select Professional of your choice",
    description:
      "Choose from wide variety of people any one who suits your requirement.",
  },
  {
    step: 4,
    icon: bookOutline,
    title: "Book service Schedule or Book Instant",
    description:
      "Proceed with booking, you can schedule your booking slot or book instantly.",
  },
];

const LocateProfessionals: React.FC = () => {
  const dispatch = useAppDispatch();
  const { agents, loading: agentLoading } = useAppSelector(
    (state) => state.agent
  );

  // cart data
  const { requiredCategoryId } = useAppSelector((state) => state.cart);
console.log("req",requiredCategoryId);
  // detect mode
  const isCartMode = Boolean(requiredCategoryId);
  const [selected, setSelected] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [allProfessions, setAllProfessions] = useState<string[]>([]);


  useEffect(() => {
    if (isCartMode && requiredCategoryId) {
      dispatch(fetchAgentsByCategoryId(requiredCategoryId));
    } else {
      dispatch(fetchAgents()).then((res: any) => {
        if (res.payload) {
          const agentsData = res.payload as { profession?: string }[];
          const professions = [
            ...new Set(
              agentsData
                .filter((a) => typeof a.profession === "string")
                .map((a) => a.profession as string)
            ),
          ];
          setAllProfessions(professions);
        }
      });
    }
  }, [dispatch, isCartMode, requiredCategoryId]);

  // Filter agents
  const displayedAgents = agents
    .filter((a: any) =>
      requiredCategoryId ? a.categoryId?._id === requiredCategoryId : true 
    )
    .filter((a: any) =>
      selected ? a.profession.toLowerCase() === selected.toLowerCase() : true
    )
    .filter((a: any) =>
      searchTerm
        ? a.profession.toLowerCase().includes(searchTerm.toLowerCase()) ||
          a.name.toLowerCase().includes(searchTerm.toLowerCase())
        : true
    );

  return (
    <PageLayout    header={<Header  title={isCartMode ? "Choose Agent" : "Locate Professionals"} type="page" showRightIcon={false} />}>
   
      <IonContent style={{ "--background": "#f8f8f8" } as React.CSSProperties}>
        {!isCartMode && (
          <div className="!mx-4 !mt-4 !p-0 !py-2">
            <IonSearchbar
              placeholder="Deep Cleaning, Plumbing..."
              class="custom-searchbar"
              value={searchTerm}
              onIonInput={(e) => setSearchTerm(e.detail.value!)}
            ></IonSearchbar>

            <div className="flex flex-wrap gap-2 mx-3 my-3">
              {allProfessions.map((profession) => (
                <div
                  key={profession}
                  onClick={() => {
                    setSelected(selected === profession ? null : profession);
                    setSearchTerm("");
                  }}
                  className={`px-3 py-1 mt-1 font-inter rounded-full text-sm cursor-pointer transition
                    ${
                      selected === profession
                        ? "bg-[#BBD2E1FF] border border-[#6096BAFF] text-[#6096BAFF]"
                        : "border border-[#6096BAFF] text-[#6096BAFF]"
                    }`}
                >
                  {profession}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Agent Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mx-2 !my-4 !p-0">
          {agentLoading ? (
            <p className="text-center text-gray-500">Loading agents...</p>
          ) : displayedAgents && displayedAgents.length > 0 ? (
            displayedAgents.map((sp: any) => {
              const mapped = {
                _id: sp._id,
                name: sp.name,
                profession: sp.profession,
                image: sp.image,
                basicCharge: sp.basicCharge,
                rating: sp.rating,
                specialists: sp.specialists?.map((s: any) => s.name) || [],
              };
              return <ProfessionalCard key={sp._id} specialist={mapped} />;
            })
          ) : (
            <p className="text-center text-gray-400">No professionals found</p>
          )}
        </div>

        {!isCartMode && (
          <IonCard className="!mx-4 my-3">
            <h2 className="text-lg font-bold text-custom-blue font-inter leading-7 p-4 pb-5">
              How it Works ?
            </h2>
            {steps.map((step, index) => (
              <HowItWorksCard
                key={index}
                step={step.step}
                icon={step.icon}
                title={step.title}
                description={step.description}
              />
            ))}
          </IonCard>
        )}
      </IonContent>
    </PageLayout>
  );
};

export default LocateProfessionals;
