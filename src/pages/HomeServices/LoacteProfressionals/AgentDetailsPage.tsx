import {
  IonAvatar,
  IonCard,
  IonCardContent,
  IonIcon,
  useIonRouter,
} from "@ionic/react";
import Header from "../../../components/Header/Header";
import PageLayout from "../../../components/Layout/Layout";
import {
  briefcaseOutline,
  brushOutline,
  buildOutline,
  checkboxOutline,
  checkmarkDoneCircle,
  ribbonOutline,
  shieldCheckmarkOutline,
  shieldOutline,
} from "ionicons/icons";
import { HowItWorksCard } from "../../../components/Common/CustomCards/CustomCards";
import CustomButton from "../../../components/Common/CustomButton/CustomButton";
import StarRating from "../../../components/Common/CustomStarRating/StarRating";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { fetchAgentById } from "../../../features/home-services/ProfessionalAgent/agentThunk";
import { useEffect } from "react";
import { setAgent } from "../../../features/home-services/cart/orderSlice";

const credentials = [
  {
    icon: shieldOutline,
    text: "Background Verified Technician",
  },
  {
    icon: buildOutline,
    text: "Trained on all major brands",
  },
  {
    icon: ribbonOutline,
    text: "Certified under JBConX",
  },
];

const consultationSteps = [
  {
    step: 1,
    icon: checkboxOutline,
    title: "Consultation / Inspection",
    description:
      "A technician will visit your location to assess the requirements and provide a detailed quotation for your approval.",
  },
  {
    step: 2,
    icon: checkmarkDoneCircle,
    title: "Quote Approval",
    description:
      "You may approve the quotation to proceed with the service. If not approved, a visitation charge will be applicable.",
  },
  {
    step: 3,
    icon: briefcaseOutline,
    title: "Service Fulfillment",
    description:
      "Upon approval, the service will be carried out in accordance with the defined scope.",
  },
  {
    step: 4,
    icon: brushOutline,
    title: "Cleanup",
    description:
      "The attending Professional will ensure the area is cleared upon completion of the work.",
  },
];

const reviewData = {
  avatarUrl:
    "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  name: "Emma R.",
  date: "Reviewed on Oct 26, 2023",
  rating: 3,
  title: "An Absolute Game Changer!",
  body: "I've been using this product for a few weeks now, and it has exceeded all my expectations. The quality is top-notch, and it seamlessly integrates into my daily routine. Highly recommend to anyone looking for efficiency and reliability!",
  helpfulYes: 12,
  helpfulNo: 3,
};

const AgentDetailsPage: React.FC = () => {
  const { agentId } = useParams<{ agentId: string }>();
  const dispatch = useAppDispatch();
    const ionRouter = useIonRouter();
  const { currentAgent, loading } = useAppSelector((state) => state.agent);

  console.log("currentAgent", currentAgent);
  useEffect(() => {
    if (agentId) {
      dispatch(fetchAgentById(agentId));
    }
  }, [agentId, dispatch]);

  if (loading || !currentAgent) {
    return (
      <p className="text-center text-gray-500">Loading agent details...</p>
    );
  }

  return (
    <PageLayout
      header={
        <Header
          title={
            <span className="flex flex-col sm:flex-row sm:items-baseline">
              <span className="font-bold text-custom-black text-lg sm:text-xl md:text-2xl">
                {currentAgent.name}
              </span>{" "}
              <span className="text-sm sm:text-base text-[#565D6DFF] font-normal font-inter sm:ml-2">
                {currentAgent.profession}
              </span>
            </span>
          }
          subtitle={
            <span className="text-[#41CC22FF] font-inter text-sm sm:text-base">
              5 km away from you
            </span>
          }
          type="page"
          variant="subtitle"
          showRightIcon={false}
        />
      }
    >
      <div
        // Changed className here
        className="px-3 my-1 w-full !rounded-lg sm:max-w-screen-md sm:mx-auto lg:max-w-screen-lg"
        style={{ "--background": "#f8f8f8" } as React.CSSProperties}
      >
        <img
          src={"/assets/images/professional1.png"}
          alt={currentAgent.name}
          className="!rounded-lg h-40 w-full sm:h-52 md:h-64 object-cover object-top"
        />
        <IonCardContent className="!mx-1 !my-0 !py-2 px-0 rounded-b-xl">
          <div className="flex items-center gap-x-2">
            <h2 className="!text-base !font-bold !text-[#323743FF] font-archivo sm:text-lg">
              Verified Technician
            </h2>
            <IonIcon
              icon={shieldCheckmarkOutline}
              className="text-[#6096BAFF] text-xl sm:text-2xl"
            />
          </div>
          <div className="mt-2 space-y-2">
            {credentials.map((item, index) => (
              <div
                key={index}
                className="flex font-archivo items-center gap-x-3"
              >
                <IonIcon
                  icon={item.icon}
                  className="text-[#6096BAFF] text-xl sm:text-2xl"
                />
                <p className="text-sm text[#323743FF] sm:text-base">{item.text}</p>
              </div>
            ))}
          </div>
        </IonCardContent>
        <IonCard className="!mx-0 my-3">
          <h2 className="text-lg font-medium text-[#6096BAFF] font-inter leading-7 p-3 pb-1 sm:text-xl">
            Book My Consultation / Inspection
          </h2>
          <p className="px-4 !pt-0 pb-2 text-custom-black font-inter text-base sm:text-lg">
            At just <span className="pl-1 "> ₹{currentAgent.consultationFee}</span>
            <span className="text-gray-500 ml-4">• 45min</span>
          </p>
          {consultationSteps.map((step, index) => (
            <HowItWorksCard
              key={index}
              step={step.step}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
          <div className="flex justify-end pb-3 px-4 -mt-4">
            <CustomButton
              text="Book Service"
              className="!bg-[#6096BAFF] !text-white font-medium rounded-full !w-28 sm:!w-32 !h-8 sm:!h-9 text-xs sm:text-sm"
             onClick={() => {
                dispatch(
                  setAgent({
                    id: currentAgent._id,
                    name: currentAgent.name,
                    profession: currentAgent.profession,
                    image: currentAgent.image,
                    basicCharge: currentAgent.basicCharge,
                    rating: currentAgent.rating,
                  })
                );

                // navigate to address select page
                ionRouter.push("/home-services/select-address?mode=booking", "forward");
                   }}
            />
             
          </div>
        </IonCard>
        <IonCard className="max-w-xs mx-auto my-1 rounded-xl bg-[#DEE1E6FF] sm:max-w-sm">
          <IonCardContent className="p-6 flex flex-col items-center justify-center">
            <h1 className="!text-4xl !font-bold !text-custom-black sm:!text-5xl">
              {currentAgent.rating}
            </h1>

            <div className="my-2">
              <StarRating initialRating={currentAgent.rating} editable={false} />
            </div>

            <p className="text-sm text-[#19191FFF] sm:text-base">Based on 1,234 reviews</p>
          </IonCardContent>
        </IonCard>
        <IonCard className="max-w-md mx-auto my-3 border border-gray-100 rounded-lg sm:max-w-lg">
          <IonCardContent className="p-5">
            <div className="flex items-center gap-x-4">
              <IonAvatar className="w-12 h-12 sm:w-14 sm:h-14">
                <img src={reviewData.avatarUrl} alt={reviewData.name} />
              </IonAvatar>
              <div>
                <h3 className="font-bold text-gray-800 text-base sm:text-lg">{reviewData.name}</h3>
                <p className="text-sm text-gray-500 sm:text-base">{reviewData.date}</p>
              </div>
            </div>

            <div className="my-2">
              <StarRating initialRating={4.8} editable={false} />
            </div>

            <div className="space-y-2">
              <h4 className="text-lg font-bold text-gray-900 sm:text-xl">
                {reviewData.title}
              </h4>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{reviewData.body}</p>
            </div>

            <div className="flex items-center gap-x-1 mt-2 pt-4 flex-wrap">
              <p className="text-[11px] text-gray-600 sm:text-xs">Was this review helpful?</p>
              <div className="text-[10px] inline-block ml-2 sm:ml-4 px-2 py-1 text-sm border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors sm:text-xs">
                Yes<span>({reviewData.helpfulYes})</span>
              </div>
              <div className="text-[10px] inline-block px-2 py-1 text-sm border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors sm:text-xs">
                No <span>({reviewData.helpfulNo})</span>
              </div>
            </div>
          </IonCardContent>
        </IonCard>
      </div>
    </PageLayout>
  );
};
export default AgentDetailsPage;