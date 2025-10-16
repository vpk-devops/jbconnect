import React, { useState } from "react";
import { ReviewCard } from "../../../components/Common/CustomCards/CustomCards";
import CustomSwiperComponent from "../../../components/Common/CustomSwiperSlider/CustomSwiperComponent";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { fetchAllReviews } from "../../../features/home-services/reviews/reviewThunk";
import { RootState } from "../../../app/store";
import { timeAgo } from "../../../utils/helpers";

interface Option {
  title: string;
  description: string;
}
const options: Option[] = [
  {
    title: "Weekly Cleaning",
    description: "Ideal for consistent upkeep and busy households.",
  },
  {
    title: "Bi-Weekly Cleaning",
    description: "Perfect for maintaining cleanliness regularly.",
  },
  {
    title: "Monthly Deep Clean",
    description: "Suitable for less frequent, thorough cleanings.",
  },
  {
    title: "One-Time Service",
    description: "Great for special occasions or initial deep cleans.",
  },
];
const ReviewSection: React.FC = () => {
  const [selected, setSelected] = useState<string>("Weekly Cleaning");
   const { allReviews, loading, error } = useAppSelector((state: RootState) => state.reviews);
   console.log("reviews",allReviews)
const dispatch=useAppDispatch()
  React.useEffect(() => {
    dispatch(fetchAllReviews());
  }, [dispatch]);

const mappedReviews = allReviews.map((rev) => ({
  name: rev.name || "Anonymous",
  avatar:
    rev.images?.[0]?.replace("D:\\MobileApp\\Jbconx\\Backend", "") ||
    "/assets/images/default-avatar.png",
  time: timeAgo(rev.createdAt),
  rating: rev.rating,
  review: rev.comment,
}));

  return (
    <div className="mx-4">
      <h2 className="text-lg font-bold text-custom-blue font-inter leading-7">
        Client's Review
      </h2>
         {loading && <p>Loading reviews...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <CustomSwiperComponent
        items={mappedReviews}
        slidesPerView={1}
        spaceBetween={16}
        autoplay
        pagination={false}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        renderItem={(review, idx) => <ReviewCard key={idx} {...review} />}
      />
      {/* Freuency options */}
      <div className="flex flex-col items-center  px-2 pb-3 ">
        <h2 className="text-xl font-bold text-custom-blue font-inter leading-7 mb-2 text-center">
          Frequency Options
        </h2>
        <p className="text-custom-gray font-inter text-center mb-6 w-80 text-sm">
          Select how often you'd like our professional cleaners to visit your
          home.
        </p>
        <div className="w-full  font-inter  space-y-2">
          {options.map((opt) => (
            <div
              key={opt.title}
              onClick={() => setSelected(opt.title)}
              className={`cursor-pointer rounded-lg border px-4 py-3 shadow-sm transition 
              ${
                selected === opt.title
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 bg-white"
              }`}
            >
              <h3 className="font-semibold text-custom-black">{opt.title}</h3>
              <p className="text-custom-gray text-sm pt-0.5">
                {opt.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
