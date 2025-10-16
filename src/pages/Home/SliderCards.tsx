import CustomButton from "../../components/Common/CustomButton/CustomButton";
import { sliderData } from "./data";
import cardImage from "/assets/images/logo1.png";
import CustomSwiperComponent from "../../components/Common/CustomSwiperSlider/CustomSwiperComponent";

const SliderCards: React.FC = () => {


  return (
    <div className="mt-4 px-4">
      <CustomSwiperComponent
        items={sliderData}
        slidesPerView={1}
        spaceBetween={16}
        autoplay
        // autoplayDelay={4000}
        pagination
        className=""
        renderItem={(data) => (
          <div className="bg-custom-blue rounded-xl pt-2 pb-5 px-4 text-white relative">
            <div className="bg-gray-200 px-3 py-0.5 rounded-full w-fit text-custom-gray text-xs font-normal mb-2">
              Popular
            </div>
            <h2 className="font-archivo text-xl font-bold text-[#EAECF0FF] leading-snug">
              {data.title}
            </h2>
            <p className="font-inter text-sm font-normal text-[#EAECF0FF] leading-[22px] mt-1 w-70">
              {data.text}
            </p>
            <CustomButton
              text={data.buttonText}
              className="!mt-4 w-fit text-[#09273F] bg-[#A3CEF1] text-lg px-4 !h-9"
            />
            <img
              src={cardImage}
              alt="characters"
              className="absolute -bottom-6 -right-3 w-36"
            />
          </div>
        )}
      />
      <div className="tailwind-pagination flex justify-center items-center gap-2 mt-2"></div>
    </div>
  );
};

export default SliderCards;
