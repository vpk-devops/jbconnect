import React, { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { IonContent, IonIcon } from "@ionic/react";
import PageLayout from "../../components/Layout/Layout";
import Header from "../../components/Header/Header";
import CustomInputForm from "../../components/Common/CustomInputForm/CustomInputForm";
import CustomButton from "../../components/Common/CustomButton/CustomButton";
import { helpCircleOutline } from "ionicons/icons";
import expertImg from "../../assets/images/expert1.jpg";
import q1Image from "../../assets/images/q1.png";
import { ExpertAdviceCard, HeroCard, OverlapProfileCard } from "./AllCardsReusable";

const PostRequirement: React.FC = () => {
  const location = useLocation();
  const params = useMemo(() => new URLSearchParams(location.search), [location.search]);

  const serviceTitle = params.get("title") || "";
  const heroImage = params.get("image") || "/src/assets/images/req1.jpg";
  const [serviceQuery, setServiceQuery] = useState("");


  const [reqDesc, setReqDesc] = useState("");
  const [workDesc, setWorkDesc] = useState("");
  const professionalLabel = "Professionals";
  


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Requirement submitted");
  };

  const pros = [{ name: 'Alicia Patel', image: q1Image, code: '#223455' }];

  return (
    <PageLayout header={<Header title="" />}> 
      <IonContent>
        {/* Hero card */}
        <div className="relative">
          <HeroCard
            backgroundImage={""}
            title={""}
            description={""}
            backgroundColor="#DEE1E6FF"
            textColor="#FFFFFFFF"
            fontFamily="Aclonica"
            leftBend
          />
          <div className="absolute top-4 left-3 font-['Actor'] text-lg leading-7 font-normal text-[#171A1FFF] w-1/2 max-w-[360px] line-clamp-2 overflow-hidden">
            {serviceTitle || "Architecture Designing's 2D 3D Designs"}
          </div>
          <img src={heroImage} alt="hero" className="absolute top-3 right-0 h-[88%] w-auto max-w-none object-contain" />
        </div>

        <div className="px-4 pt-3 pb-6">
          {/* Form card */}
          <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto">
            <h3 className="mb-2 font-['Inter'] text-base leading-[26px] font-normal text-[#171A1FFF]">Tell us what service are you looking for ?</h3>
            <div className="mb-4 flex items-center gap-2">
              <input
                type="text"
                value={serviceQuery}
                onChange={(e) => setServiceQuery(e.target.value)}
                placeholder="what kind of Services looking for.."
                className="w-[227px] h-[36px] px-[12px] rounded-[6px] border bg-white text-[#171A1FFF] text-[14px] leading-[22px] outline-none focus:outline-none focus:ring-0 border-[#BDC1CAFF] hover:border-[#A8ADB7FF] focus:border-[#9095A1FF] font-inter"
              />
              <IonIcon
                icon={helpCircleOutline}
                className="w-4 h-4 text-[#171A1FFF] flex-shrink-0 cursor-pointer"
                onClick={() => {
                  const q = (serviceQuery || serviceTitle).toLowerCase();
                  const section = q.includes('3d') ? '3d' : q.includes('2d') ? '2d' : 'architecture';
                  window.location.href = `/requirement-guide?section=${encodeURIComponent(section)}`;
                }}
              />
            </div>

            <div className="mb-1 font-['Inter'] text-base leading-[26px] font-normal text-[#171A1FFF]">Describe your Requirement:</div>
            <CustomInputForm
              label=""
              name="requirement"
              placeholder="Input text"
              value={reqDesc}
              onChange={(e) => setReqDesc(e.target?.value ?? "")}
              textarea
              rows={4}
              className="font-inter text-[#171A1FFF] w-full h-[95px] pt-[7px] pb-[7px] px-[12px] bg-white rounded-[6px] border border-[#BDC1CAFF] hover:border-[#A8ADB7FF] focus:border-[#9095A1FF] focus:shadow-[0_0_5px_#9095a133] disabled:text-[#171A1FFF] disabled:bg-white disabled:border-[#BDC1CAFF]"
            />

            <div className="mt-3 mb-1 font-['Inter'] text-base leading-[26px] font-normal text-[#171A1FFF]">Describe what work you need:</div>
            <CustomInputForm
              label=""
              name="work"
              value={workDesc}
              onChange={(e) => setWorkDesc(e.target?.value ?? "")}
              textarea
              rows={4}
              className="font-inter text-[#171A1FFF] w-full h-[95px] pt-[7px] pb-[7px] px-[12px] bg-white rounded-[6px] border border-[#BDC1CAFF] hover:border-[#A8ADB7FF] focus:border-[#9095A1FF] focus:shadow-[0_0_5px_#9095a133] disabled:text-[#171A1FFF] disabled:bg-white disabled:border-[#BDC1CAFF]"
            />

            <div className="mb-4 mt-3">
              <label className="block text-[12px] leading-[18px] text-[#171A1F] mb-1">Upload any supporting Photos :</label>
              <label htmlFor="fileUpload" className="inline-flex items-center justify-center px-2 h-[18px] w-[78px] text-[#274C77] bg-white border border-[#274C77] rounded-[0px] text-[11px] leading-[18px] font-normal cursor-pointer hover:text-[#1B3756]">
                Choose File
              </label>
              <input id="fileUpload" type="file" multiple className="hidden" />
            </div>

            <div className="mb-6 flex justify-center">
              <CustomButton
                text="post requirement"
                className="w-[105px] h-[18px] px-2 flex items-center justify-center font-inter text-[11px] leading-[18px] font-normal text-white bg-[#274C77] border-none rounded-[6px] hover:bg-[#1B3756] active:bg-[#14273D] whitespace-nowrap"
                onClick={() => {}}
              />
            </div>
          </form>

          <ExpertAdviceCard
            imageSrc={expertImg}
            titleLine1="Get Expert advise"
            titleLine2="from JBconX"
            buttonText="Talk with Expert Now"
          />

          {/* near you */}
          <div className="w-full max-w-sm mx-auto mt-4">
            <h3 className="text-[#171A1F] font-inter text-[14px] font-semibold mb-2">{professionalLabel} near you</h3>
            <div className="grid grid-cols-1 gap-4">
              {pros.map((p, i) => (
                <OverlapProfileCard key={i} imageSrc={p.image} code={p.code} rating={4} />
              ))}
            </div>
          </div>
        </div>
      </IonContent>
    </PageLayout>
  );
};

export default PostRequirement;


