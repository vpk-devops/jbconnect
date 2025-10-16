import 'swiper/css';
import { expertList } from './data';
import CustomSwiperComponent from '../../components/Common/CustomSwiperSlider/CustomSwiperComponent';

const ExpertSection: React.FC = () => {
  return (
    <div>
      <div className="px-4 mt-5">
        <h2 className="text-xl font-bold text-custom-blue mb-2">Hire Experts For Your Construction</h2>
        <div className="flex flex-wrap gap-2">
          {expertList.slice(0, 5).map((expert, index) => (
            <span
              key={index}
              className="bg-[#F3F7FB] px-3 py-1 rounded-md text-custom-blue text-sm font-medium font-inter"
            >
              {expert.name}
            </span>
          ))}
        </div>
      </div>
      <CustomSwiperComponent
        items={expertList}
        slidesPerView={3.2}
        spaceBetween={12}
        autoplay
        className="my-4 bg-custom-blue p-4"
        renderItem={(expert) => (
          <div className="flex flex-col items-center">
            <img
              src={expert.image}
              alt={expert.name}
              className="object-cover w-24 h-28 bg-white rounded-[50px_0px_50px_0px] shadow-md border-2 border-[#DEE1E6]"
            />
            <h4 className="text-xs font-semibold text-white mt-2 text-center">
              {expert.name}
            </h4>
          </div>
        )}
      />
    </div>
  );
};

export default ExpertSection;
