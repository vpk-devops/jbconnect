import { IonIcon } from "@ionic/react";

import React from "react";
import { FlipCard } from "../../components/Common/CustomCards/CustomCards";


const RecentFlips: React.FC = () => {
  const filters = ["#BeforeAfter", "#StageWise", "#Residential", "#Commercial"];

  const flipData = [
    {
      title: "Modern Kitchen Transformation",
      tag: "Before & After",
      image: "/assets/images/flips.jpg",
    },
    {
      title: "Roofing Installation Progress",
      tag: "Stage-Wise",
      image: "/assets/images/flips.jpg",
    },
    {
      title: "Modern Kitchen Transformation",
      tag: "Before & After",
      image: "/assets/images/flips.jpg",
    },
    {
      title: "Roofing Installation Progress",
      tag: "Stage-Wise",
      image: "/assets/images/flips.jpg",
    },
  ];

  return (
    <div className="px-4 mt-4">
      <h2 className="text-xl font-bold text-black mb-2 leading-[32px]">Recent Flips</h2>
      <div className="flex gap-2 flex-wrap mb-4">
        {filters.map((filter, idx) => (
          <span
            key={idx}
            className={`px-3 py-2 rounded-full text-sm font-semibold font-inter ${idx === 0
                ? "bg-custom-blue text-white"
                : "bg-[#F3F4F6] text-custom-black"
              }`}
          >
            {filter}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
        {flipData.map((flip, index) => (
          <FlipCard key={index} {...flip} />
        ))}
      </div>

    </div>
  );
};

export default RecentFlips;
