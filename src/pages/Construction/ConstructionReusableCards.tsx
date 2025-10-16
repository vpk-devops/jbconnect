import React from "react";
import CustomButton from "../../components/Common/CustomButton/CustomButton";
import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonTitle, IonToolbar, useIonRouter } from "@ionic/react";
import {
  briefcaseOutline,
  chevronBack,
  eyeOffOutline,
  flashOutline,
  pricetagOutline,
  starOutline,
  timeOutline,
} from "ionicons/icons";
import StarRating from "../../components/Common/CustomStarRating/StarRating";
import CustomInputForm from "../../components/Common/CustomInputForm/CustomInputForm";

// constructionoptions
interface ConstructionOption {
  title: string;
  btnLabel: string;
  img: string;
  link:string
}
interface Props {
  options: ConstructionOption[];
}

export const ConstructionOptions: React.FC<Props> = ({ options }) => {
  const ionRouter=useIonRouter();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  mt-4 mx-4 md:flex md:items-center md:justify-center fon-inter">
      {options.map((item, idx) => (
        <div
          key={idx}
          className="relative rounded-xl overflow-hidden shadow-md md:w-52"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black/10 flex flex-col justify-end p-3">
            <h2 className="text-white text-lg leading-[22px] font-semibold mb-2">
              {item.title}
            </h2>
            <CustomButton
              text={item.btnLabel}
              icon="alertCircleOutline"
              className="h-9 text-xs rounded-lg bg-custom-blue text-white !font-medium "
        onClick={() => ionRouter.push(item.link , "forward", "push")}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
// ConstructionStages card
interface ConstructionStage {
  title: string;
  img: string;
}
interface Props {
  stages: ConstructionStage[];
}
export const ConstructionStages: React.FC<Props> = ({ stages }) => {
  return (
    <div className="mt-4 mx-4  font-inter">
      <h3 className="text-lg font-semibold text-custom-blue mb-4 ">
        Construction Stages
      </h3>
      <div className="flex flex-wrap justify-between ">
        {stages.map((stage, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full overflow-hidden shadow-md">
              <img
                src={stage.img}
                alt={stage.title}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2 text-sm font-medium text-[#8c8d8bff]">
              {stage.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

interface SpecialOfferProps {
  title: string;
  description: string;
  timeLeft: string;
  image: string;
}
export const SpecialOfferCard: React.FC<SpecialOfferProps> = ({
  title,
  description,
  timeLeft,
  image,
}) => {
  return (
    <IonCard className="!m-0 relative rounded-lg overflow-hidden shadow-md font-inter w-[100%] sm:w-[280px] mx-auto ">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-44 sm:h-44 object-cover"
        />

        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Content overlay */}
        <IonCardContent className="absolute inset-0 flex flex-col justify-between p-3 text-white">
          <div>
            <div className="flex justify-between">
              <h3 className="!text-lg sm:text-base !font-semibold !leading-[24px]">
                {title}
              </h3>
              <div className="flex items-center justify-end text-xs sm:text-sm bg-custom-blue rounded-full !h-6 p-2">
                <IonIcon
                  icon={timeOutline}
                  className="mr-1 text-white font-bold"
                />
                {timeLeft}
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-200 w-44 leading-[18px] pt-1">
              {description}
            </p>
          </div>
                <CustomButton
            text=" Get Offer"
            icon="pricetagOutline"
            className="!mt-2 bg-[#FFFFFF4D] rounded-md  text-sm text-white !h-20 sm:text-sm font-medium"
          />
        </IonCardContent>
        
      </div>
    </IonCard>
  );
};
interface ConstructionBuilderCardProps {
  name: string;
  experience: string;
  avatar: string;
  projects: number;
  rating: number;
  priceRange: string;
}
export const ConstructionBuilderCard: React.FC< ConstructionBuilderCardProps> = ({ name, experience, avatar, projects, rating, priceRange }) => {
  return (
    <IonCard className="!m-0 rounded-xl shadow-xl border border-[#EBEBEAFF] font-inter w-full">
      <IonCardContent className="!p-3">
        <div className="flex items-center gap-3 mb-3">
          <img src={avatar} alt={name} className="!w-16 h-16 rounded-full" />

          <div className="ml-2">
            <h2 className="!font-xl !font-semibold text-custom-black">
              {name}
            </h2>
            <p className="!text-sm text-[#8C8D8BFF] pt-1">{experience}</p>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm mb-3">
          <div className="flex items-center gap-1 text-[#8C8D8BFF]">
            <IonIcon icon={briefcaseOutline} />
            <span className="font-medium">{projects}</span>
            <span>Projects Completed</span>
          </div>
          <div className="flex items-center gap-1">
            <StarRating />
            <span className="ml-1 text-gray-600 text-sm">{rating}</span>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg p-2 py-2 text-center text-sm font-semibold text-[#0071b8ff] mt-1 mb-3">
          {priceRange}
        </div>
        <div className="flex justify-between gap-4 mt-2">
          <CustomButton
            text="View Portfolio"
            icon="eyeOutline"
            className="flex-1 mr-2 rounded-lg font-medium  text-sm border border-[#0071b8ff] text-[#0071b8ff] "
          />

          <CustomButton
            text="Select Builder"
            icon="thumbsUpOutline"
            className="flex-1 rounded-lg text-sm font-medium bg-custom-blue text-white"
          />
        </div>
      </IonCardContent>
    </IonCard>
  );
};
export const ReadyToBuildCard: React.FC = () => {
  return (
    <IonCard className="!m-0 !my-4 shadow-md bg-[#F3F4F6FF] font-inter !h-[260px]">
      <IonCardContent className=" !p-0 text-center ">
        <h2 className="!text-xl sm:text-xl !font-semibold text-custom-blue pt-3">
          Ready to Start <br /> Building?
        </h2>

        <div className="w-full flex text-sm sm:text-base text-gray-700">
          <div className="!h-30">
            <img
              src="/assets/images/Readytobuild.png"
              alt="Building illustration"
              className="w-40 sm:w-48 "
            />
          </div>
          <div className="flex flex-col space-y-2 justify-center mb-4 ml-3">
            <div className="flex  ">
              <IonIcon icon={flashOutline} className="text-blue-500 text-lg" />
              <span className="ml-2 text-custom-black">Faster response</span>
            </div>
            <div className="flex items-center space-x-2">
              <IonIcon icon={timeOutline} className="text-blue-500 text-lg" />
              <span className="ml-2 text-custom-black">Easy Availability</span>
            </div>
            <hr className="text-[#D9D9D9FF] border-2 !w-[120%]" />
            <CustomButton
              text="Talk to Experts"
              className="!mt-2 bg-[#1C5D8EFF] text-white hover:bg-[#15306b] rounded-md !py-0 !w-30 !h-9 text-sm"
            />
          </div>
        </div>
      </IonCardContent>
    </IonCard>
  );
};
//  Professional Individual Card Component
interface ReusableProfessionalIndividualCardProps {
  id: string;
  name: string;
  profession: string;
  backgroundImage: string;
  description: string;
  onContact?: () => void;
  onViewDetails?: () => void;
}

export const ReusableProfessionalIndividualCard: React.FC<ReusableProfessionalIndividualCardProps> = ({
  id,
  name,
  profession,
  backgroundImage,
  description,
  onContact,
  onViewDetails,
}) => {
  return (
    <div className="flex justify-center items-start min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] overflow-visible px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12">
      <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto flex flex-col items-center justify-start" style={{ transform: 'translateY(10px)' }}>
        {/*  Background Container  */}
        <div 
          className="absolute"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'clamp(300px, 80vw, 392px)',
            height: 'clamp(350px, 85vw, 431px)',
            background: '#DEE1E6FF',
            borderRadius: '0px 0px 196px 196px',
            boxShadow: '0px 17px 35px rgba(23, 26, 31, 0.24), 0px 0px 2px rgba(23, 26, 31, 0.12)',
            zIndex: 1
          }}
        />

        {/* Main Card Container */}
        <div 
          className="bg-white overflow-hidden relative z-20 w-[240px] h-[320px] sm:w-[260px] sm:h-[360px] lg:w-[276px] lg:h-[398px] rounded-[0px_120px_120px_120px] sm:rounded-[0px_130px_130px_130px] lg:rounded-[0px_138px_138px_138px] shadow-[0px_17px_35px_rgba(23,26,31,0.24)]"
          style={{
            transform: 'translateY(-17px)'
          }}
        >
          {/* Image Section */}
          <div className="relative h-32 sm:h-40 lg:h-48 overflow-hidden">
            <img
              src={backgroundImage}
              alt={name}
              className="w-full h-full object-cover"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 100%, 0 100%)',
                borderRadius: '0px 120px 0 0'
              }}
              onError={(e) => {
                e.currentTarget.src = '/assets/images/expert2.jpg';
              }}
            />
            {/* Code Label */}
            <div className="absolute top-1 left-1 sm:top-2 sm:left-2 bg-gray-100 text-gray-800 px-1 py-0.5 sm:px-2 sm:py-1 rounded shadow-sm">
              <div className="text-xs leading-tight">Code</div>
              <div className="text-xs sm:text-sm font-bold leading-tight">#{id}</div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-2 sm:p-3 lg:p-4 text-center">
            {/* Name */}
            <h3 className="text-lg sm:text-xl font-bold text-black mb-1">{name}</h3>
            
            {/* Profession */}
            <p className="text-xs sm:text-sm font-medium text-[#274C77] mb-2">{profession}</p>
            
            {/* Description */}
            <p className="text-xs text-gray-600 mb-3 sm:mb-4 leading-relaxed max-w-xs mx-auto">{description}</p>

            {/* Action Buttons */}
            <div className="flex gap-1 sm:gap-2 justify-center">
              <button
                onClick={onContact}
                className="bg-[#274C77] text-white text-xs font-medium py-1.5 px-2 sm:py-2 sm:px-4 rounded-md hover:bg-[#1e3a5f] transition-colors"
              >
                Contact
              </button>
              <button
                onClick={onViewDetails}
                className="bg-[#274C77] text-white text-xs font-medium py-1.5 px-2 sm:py-2 sm:px-4 rounded-md hover:bg-[#1e3a5f] transition-colors"
              >
                view Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// end-to-end cards

interface StepCardProps {
  icon: string;
  title: string;
  desc: string;
}

export const StepCard: React.FC<StepCardProps> = ({ icon, title, desc }) => {
  return (
    <IonCard className="!mx-0 border border-[#EBEBEAFF] rounded-xl shadow-sm !h-[145px]">
      <IonCardContent className="!px-3 !py-2">
        <div style={{ fontSize: "30px" }} className="text-custom-blue">
          {icon}
        </div>
        <h3 className="pt-2 !text-custom-black !font-inter !font-semibold">
          {title}
        </h3>
        <p className="pt-1 text-[#4B5563FF] text-xs !font-inter leading-snug">
          {desc}
        </p>
      </IonCardContent>
    </IonCard>
  );
};


 interface FieldConfig {
  label: string;
  name: string;
  placeholder?: string;
  type: "text" | "textarea" | "radio"|"number"; // match what your CustomInputForm supports
  rows?: number; // for textarea
  radioOptions?: Array<string | { label: string; value: string }>; // for radio
}
export interface StepConfig {
  step: number;
  totalSteps: number;
  title: string;
  subtitle: string;
  fields: FieldConfig[];
  button: string;
}
interface MultiStepFormProps {
  config: StepConfig;
  values: Record<string, any>;
  onChange: (name: string, value: any) => void;
  onNext: () => void;
}

export const MultiStepForm: React.FC<MultiStepFormProps> = ({
  config,
  values,
  onChange,
  onNext,
}) => {
  return (
  
      <IonContent className="ion-padding">
        <p className="text-sm text-gray-500 font-medium">
          Step {config.step} of {config.totalSteps}
        </p>

        <p className="text-gray-500 text-sm mb-4">{config.subtitle}</p>

        {config.fields.map((field, idx) => (
          <CustomInputForm
            key={idx}
            label={field.label}
            name={field.name}
            placeholder={field.placeholder}
            value={values[field.name] || ""}
            textarea={field.type === "textarea"}
            rows={field.rows}
            radioOptions={field.radioOptions}
            radioValue={field.type === "radio" ? values[field.name] : undefined}
            onRadioChange={(val) => onChange(field.name, val)}
            onChange={(e) =>
              onChange(field.name, e.detail ? e.detail.value : e.target.value)
            }
          />
        ))}
        <CustomButton  onClick={onNext} text={config.button}  className="!bg-[#274C77] !text-white rounded-md h-10 text-sm md:text-base"/>
      </IonContent>

  );
};



interface HeaderProps {
  title: string;
  type?: "home" | "page";
  onBack?: () => void;
}

export const HeaderStep: React.FC<HeaderProps> = ({ title, type = "page", onBack }) => {
  return (
    <IonHeader>
      <IonToolbar>
        {type === "page" && (
          <IonButtons slot="start">
            <IonButton onClick={onBack}>
              <IonIcon icon={chevronBack} />
            </IonButton>
          </IonButtons>
        )}
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};


