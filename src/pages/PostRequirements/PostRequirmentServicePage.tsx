import {
  IonContent,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  useIonRouter
} from "@ionic/react";
import { locationOutline, searchOutline } from "ionicons/icons";
import le1 from "/assets/images/1.jpeg";
import PageLayout from "../../components/Layout/Layout";
import Header from "../../components/Header/Header";
import { HeroCard, ProfileCard, ServiceCard } from './AllCardsReusable';
import { useParams } from "react-router";
import { requirementsData } from "./data"; // Import your data

interface ServiceItem {
  id: number;
  title: string;
  image: string;
  route: string;
}

const PostRequirmentServicePage: React.FC = () => {
  const ionRouter = useIonRouter();
  const { service } = useParams<{ service: string }>();

  // Find the data based on the route parameter
  const getDataForService = (serviceParam: string) => {
    const routeToDataMap: { [key: string]: number } = {
      'hire-professional': 0,
      'hire-contractors': 1,
      'management-service': 2,
      'home-services': 3,
      'legal-service': 4,
      'renovation-service': 5
    };

    const dataIndex = routeToDataMap[serviceParam];
    return dataIndex !== undefined ? requirementsData[dataIndex] : null;
  };

  const pageData = getDataForService(service || '');

  // If no matching data found, show error or redirect
  if (!pageData) {
    return (
      <PageLayout header={<Header title="" />}>
        <IonContent>
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center">
              <h2 className="text-xl font-bold text-gray-600 mb-4">Service Not Found</h2>
              <button 
                onClick={() => ionRouter.push('/post-requirements', 'back', 'pop')}
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Go Back
              </button>
            </div>
          </div>
        </IonContent>
      </PageLayout>
    );
  }

  const {
    heroTitle,
    heroDescription,
    heroImage,
    mainTitle,
    services = [],
    exploreTitle,
    exploreServices = [],
    layoutType = "grid-3x2-plus-1"
  } = pageData;

  const isLegalServicePage = service === "legal-service";
  const isHireContractorsPage = service === "hire-contractors";

  // ✅ Navigate to another service page
  const handleServiceClick = (route: string) => {
    ionRouter.push(`/post-requirements${route}`, "forward", "push");
  };

  // ✅ Navigate to posting requirement page (separate flow)
  const goToPostRequirement = (serviceTitle: string, image: string) => {
    const params = new URLSearchParams();
    if (serviceTitle) params.set("title", serviceTitle);
    if (image) params.set("image", image);
    ionRouter.push(`/post-requirement?${params.toString()}`, "forward", "push");
  };

  const renderServiceCard = (service: ServiceItem) => (
    <div className="text-center flex flex-col items-center">
      <ProfileCard
        id={service.id}
        image={service.image}
        onClick={() => goToPostRequirement(service.title, service.image)}
        imageScale={isHireContractorsPage ? 1.3 : 1}
        imageTopOffsetPx={isHireContractorsPage ? -24 : -12}
        imageLeftOffsetPx={isHireContractorsPage ? -4 : 3}
      />
      <p className="mt-2 text-center font-['Inter'] text-[14px] leading-[22px] font-bold text-[#171A1F] max-w-[112px]">
        {service.title}
      </p>
    </div>
  );

  const renderServicesGrid = () => {
    if (!services || services.length === 0) return null;

    const is2x4 = layoutType === "grid-2x4";
    const cap = is2x4 ? 8 : (services.length >= 7 ? 7 : 5);
    const displayServices = services.slice(0, cap);
    const hasOdd = !is2x4 && displayServices.length % 2 !== 0;
    const pairCount = Math.floor(displayServices.length / 2);
    const rowClass = is2x4 ? "mb-4 last:mb-0" : "mb-6 last:mb-0";

    return (
      <IonGrid className="w-full max-w-sm mx-auto [--ion-grid-padding:0] [--ion-grid-column-padding:0]">
        {Array.from({ length: pairCount }).map((_, rowIdx) => (
          <IonRow key={rowIdx} className={rowClass}>
            <IonCol size="6" className="flex justify-center">
              {renderServiceCard(displayServices[rowIdx * 2])}
            </IonCol>
            <IonCol size="6" className="flex justify-center">
              {renderServiceCard(displayServices[rowIdx * 2 + 1])}
            </IonCol>
          </IonRow>
        ))}
        {hasOdd && (
          <IonRow className={rowClass}>
            <IonCol size="12" className="flex justify-center">
              {renderServiceCard(displayServices[displayServices.length - 1])}
            </IonCol>
          </IonRow>
        )}
      </IonGrid>
    );
  };

  return (
    <PageLayout header={<Header title="" />}>
      <IonContent>
        {/* HeroCard */}
        <HeroCard
          backgroundImage={heroImage}
          title={heroTitle}
          description={heroDescription}
          backgroundColor="#274C77FF"
          textColor="#FFFFFFFF"
          fontFamily="Aclonica"
        />

        {/* Location Search */}
        {!isLegalServicePage && (
          <div className="px-4 mt-2">
            <div className="flex items-center gap-2 text-[#667085] text-[12px] leading-[18px] mb-2">
              <IonIcon icon={locationOutline} className="w-4 h-4 text-[#274C77]" />
              <span>#46, Ramamurthy | ITPL main road, KR Puram</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="rounded-[12px] text-[#171A1F] bg-white text-sm w-[102px] h-8 border border-[#274C77]">
                Bangalore
              </button>
              <div className="relative w-[254px]">
                <IonIcon
                  icon={searchOutline}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#BDC1CA]"
                />
                <input
                  type="text"
                  placeholder="Search for localities"
                  readOnly
                  className="w-full text-[14px] leading-[22px] placeholder:text-[#BDC1CA] focus:outline-none bg-white h-8 pl-[34px] pr-3 rounded-[12px] border border-[#274C77] text-[#BDC1CA]"
                />
              </div>
            </div>
          </div>
        )}

        {/* Main Services Grid or Legal Placeholder */}
        {isLegalServicePage ? (
          <div className="relative flex items-center justify-center min-h-[60vh]">
            <img
              src={le1}
              alt="legal-watermark"
              className="absolute pointer-events-none w-4/5 max-w-[640px] h-auto opacity-25 [filter:grayscale(10%)] left-1/2 top-1/2 -translate-x-1/2 -translate-y-[75%] z-0"
              aria-hidden
            />
            <div className="px-4 text-center relative font-['Akaya Kanadaka'] text-[clamp(18px,4.5vw,32px)] leading-[clamp(26px,6vw,48px)] font-normal text-[#171A1F] max-w-[560px] z-[1] -translate-y-[16%]">
              "We're expanding — Legal
              <br />
              Document Services
              <br />
              arriving soon."
            </div>
          </div>
        ) : (
          <div className="px-4 pt-0 pb-2">
            <h2 className="mb-6 text-left font-['Aclonica'] text-[18px] leading-[28px] font-normal text-[#274C77]">
              {mainTitle}
            </h2>
            {renderServicesGrid()}
          </div>
        )}

        {/* Explore Other Services */}
        {!isLegalServicePage && exploreServices.length > 0 && (
          <div className="px-4 py-6">
            <h2 className="mb-6 text-left font-['Aclonica'] text-[18px] leading-[28px] font-bold text-[#171A1F]">
              {exploreTitle}
            </h2>
            <div className="flex gap-4 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [ms-overflow-style:none]">
              {exploreServices.map((service) => (
                <div key={service.id} className="flex-shrink-0">
                  <ServiceCard
                    id={service.id}
                    title={service.title}
                    image={service.image}
                    route={service.route}
                    onClick={handleServiceClick}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </IonContent>
    </PageLayout>
  );
};

export default PostRequirmentServicePage;