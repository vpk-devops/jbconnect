import { IonIcon } from "@ionic/react";
import { categories, subServices } from "./data";
import homeservvice from "/assets/images/1.jpeg";
import CustomButton from "../../components/Common/CustomButton/CustomButton";

interface Props {
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
}

const HomeServiceSelector: React.FC<Props> = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="px-4 mt-6">
      <h2 className="text-xl font-bold text-custom-blue mb-3">
        Hire by Home Services
      </h2>
      <div className="bg-[#F3F4F6] rounded-md shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1F] p-2">
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map((cat, i) => {
            const isSelected = selectedCategory === cat.name;
            return (
              <div
                key={i}
                onClick={() => setSelectedCategory(cat.name)}
                className={`flex items-center px-3 py-1 gap-1 text-sm font-inter font-medium rounded-md cursor-pointer transition-colors duration-200 ${isSelected
                    ? "bg-[#A3CEF1] text-[#09273F]"
                    : "border border-[#124A77] bg-white text-[#09273F]"
                  }`}
              >
                <IonIcon icon={cat.icon} />
                {cat.name}
              </div>
            );
          })}
        </div>

        <h3 className="text-base font-bold text-custom-black mb-2">
          Choose services
        </h3>

        <div className="grid grid-cols-4 gap-2 mb-6">
          {subServices.map((service, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-[70px] h-[48px] rounded-xl overflow-hidden">
                <img
                  src={service.img}
                  alt={service.label}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[10px] bg-[#6096BA] text-white mt-1 py-0.5 px-1 xs:px-2 rounded-md">
                {service.label}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-start gap-2 py-2">
          <div className="flex-1">
            <h4 className="text-custom-black text-lg font-bold font-inter">
              Book an Electrician
            </h4>
            <p className="text-[10px] text-custom-black mt-1 leading-tight">
              The final price will be determined based on the actual scope of work and the applicable rate card.
            </p>
            <p className="text-[10px] mt-2">
              Book for inspection at just <span className="text-lg font-semibold">₹99/-</span>
            </p>
            <CustomButton
              className="!mt-3 bg-[#6096BA] text-white px-1  !h-8 rounded-lg text-[12px] w-24"
              text="Book Now"
            />
          </div>
          <div>
            <img
              src={homeservvice}
              alt="electrician"
              className="rounded-l-full w-36 h-28 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServiceSelector;
