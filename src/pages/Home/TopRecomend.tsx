import { expertCards, ExpertCardType } from "./data";
import CustomButton from "../../components/Common/CustomButton/CustomButton";
import CustomSwiperComponent from "../../components/Common/CustomSwiperSlider/CustomSwiperComponent";

const ExpertCard: React.FC<ExpertCardType> = ({
  name,
  role,
  image,
  code,
  available = true,
}) => {
  return (
    <div className="w-[250px] max-w-[300px] bg-white rounded-xl shadow-[0_0_5px_rgba(0,0,0,0.1)] px-2 py-2 mx-auto">
      <div className="flex justify-between mb-3 text-[11px] font-medium">
        <div>
          <h6 className="font-inter font-normal text-[8px] text-custom-blue pl-1">Availability</h6>
          <div className="bg-[#F3F4F6] text-custom-black px-2 py-0.5 mt-1 rounded-full">
            {available ? "Available to Hire" : "Not Available"}
          </div>
        </div>
        <div>
          <h6 className="font-inter font-normal text-[8px] text-custom-blue pl-1">Code</h6>
          <div className="bg-[#F3F4F6] text-custom-black px-4 py-0.5 mt-1 rounded-full font-semibold">
            #{code}
          </div>
        </div>
      </div>

      <div className="w-24 h-24 mx-auto mb-2 bg-[#E4ECF6FF] rounded-full">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-full pt-3"
        />
      </div>

      <div className="text-center">
        <h3 className="text-base font-bold text-custom-black">{name}</h3>
        <p className="text-gray-500 text-sm">{role}</p>
      </div>

      <div className="flex justify-between mt-4 gap-2">
        <CustomButton
          className="!w-30 !h-8 !text-sm !bg-custom-blue !text-white rounded-lg !p-0"
          text="Contact"
        />
        <CustomButton
          className="!w-30 !h-8 !text-sm !bg-custom-blue !text-white rounded-lg"
          text="View Details"
        />
      </div>

      <div className="flex mt-3 text-sm text-black">★ ★ ★ ★ ☆</div>
    </div>
  );
};

const ExpertSlider: React.FC = () => {
  return (
    <div className="px-4 mt-2 shadow-[0_0_5px_rgba(0,0,0,0.1)] mx-4 py-2">
      <h2 className="font-[Aclonica] text-xl text-[#274C77] mb-2 pl-2">
        Top Talent Recommendations
      </h2>

     <CustomSwiperComponent
        items={expertCards}
        slidesPerView={1.2}
        spaceBetween={12}
        autoplay
        breakpoints={{
          480: { slidesPerView: 1.4 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3 },
        }}
        renderItem={(expert) => <ExpertCard {...expert} />}
      />
    </div>
  );
};

export default ExpertSlider;
