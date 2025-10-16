import React from "react";
import { IonIcon } from "@ionic/react";
import { playCircleOutline, star } from "ionicons/icons";
import CustomButton from "../../components/Common/CustomButton/CustomButton";

interface BuilderCardProps {
  name: string;
  experience: string;
  image: string;
  initials: string;
}

const BuilderCard: React.FC<BuilderCardProps> = ({
  name,
  experience,
  image,
  initials,
}) => {
  return (
    <div className="flex sm:items-start bg-white border border-[#EBEBEA] rounded-[12px] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1F] p-4 w-full">
      <div className="flex flex-col items-center flex-[2] sm:items-start sm:w-1/2 ">
        <div className="w-16 h-16 rounded-full bg-[#23406A] text-white flex items-center justify-center text-2xl font-bold">
          {initials}
        </div>
        <div className="mt-2 text-center sm:text-left">
          <h3 className="text-base font-semibold text-black leading-[20px] w-20">{name}</h3>
          <p className="text-[12px] font-medium text-inter text-[#8C8D8BFF] w-20 pt-1">{experience} Experience</p>
          <div className=" sm:justify-start mt-1">
            {[...Array(5)].map((_, i) => (
              <IonIcon
                key={i}
                icon={star}
                className="text-yellow-400 text-[16px] mr-[1px] mt-1"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-[3] items-center sm:items-end ">
        <div className="relative w-full h-[130px] sm:h-[100px]  overflow-hidden">
          <img src={image} alt="builder preview" className="w-full h-full object-cover" />
          <IonIcon
            icon={playCircleOutline}
            className="absolute text-white text-3xl left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <CustomButton text="View Profile" className="!mt-3 w-full bg-[#0061D5] text-white text-md rounded-xl font-medium"/>
       
    
      </div>
    </div>
  );
};

const BuilderCardSection: React.FC = () => {
  const builders = [
    {
      name: "Johnathan Doe",
      experience: "15+ Years",
     image: "/assets/images/flips.jpg",
      initials: "JD",
    },
    {
      name: "Emily Smith",
      experience: "10+ Years",
  image: "/assets/images/flips.jpg",
      initials: "ES",
    },
  ];

  return (
    <div className="px-4 mt-5">
      <h2 className="text-xl font-bold text-black font-inter mb-4">Top Builders Near You</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {builders.map((builder, index) => (
          <BuilderCard key={index} {...builder} />
        ))}
      </div>
    </div>
  );
};

export default BuilderCardSection;
