import { AllServiceCard, RecommendedCard } from "../../../components/Common/CustomCards/CustomCards";
import { ServiceCard } from "../../../components/Common/CustomCards/CustomCards";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { useEffect, useState } from "react";
import { fetchAgents } from "../../../features/home-services/ProfessionalAgent/agentThunk";
import { fetchSubcategoriesByName } from '../../../features/home-services/category/categoryThunk';
import { fetchCombos } from "../../../features/home-services/combooffers/comboThunk";
import CustomSwiperComponent from "../../../components/Common/CustomSwiperSlider/CustomSwiperComponent";

const services = [
  { image: "/assets/images/ser8.jpg", title: "Plumbing" },
  { image: "/assets/images/ser11.png", title: "Electrician" },
  { image: "/assets/images/ser10.png", title: "TV Service" },
  { image: "/assets/images/ser8.jpg", title: "Gardening" },
  { image: "/assets/images/ser11.png", title: "Kitchen Service" },
];
interface RecommendedSectionProps {
  onSubcategoryClick: (categoryName: string, sub: any) => void;
}
const RecommendedSection: React.FC<RecommendedSectionProps> = ({ onSubcategoryClick }) => {

  const dispatch = useAppDispatch();
  const { agents, loading: agentLoading } = useAppSelector(
    (state) => state.agent
  );
  // console.log("agents", agents)
  const { combos } = useAppSelector(
    (state) => state.combos
  );
  // console.log("combos", combos)
  const [showAll, setShowAll] = useState(false);
  const { categories = [] } = useAppSelector((state) => state.category);
  const { subcategories } = useAppSelector((state) => state.category);
  // console.log("subcaet", subcategories)

  useEffect(() => {
    dispatch(fetchAgents());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCombos());
  }, [dispatch]);


  useEffect(() => {
    dispatch(fetchSubcategoriesByName("Cleaning"));
    dispatch(fetchSubcategoriesByName("Appliance Repair"));
  }, [dispatch]);

  const sortedAgents = agents
    .slice()
    .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));

  const displayedAgents = showAll ? sortedAgents : sortedAgents.slice(0, 2);

  return (
    <div className="px-2 py-4">
      <div className="flex justify-between items-center my-4-1 px-2">
        <h2 className="text-lg font-bold text-custom-blue font-inter leading-7">Recommended</h2>

        {sortedAgents.length > 2 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-[#6096BAFF] text-sm font-medium font-inter underline"
          >
            {showAll ? "See less" : "See all"}
          </button>
        )}

      </div>
      {/*Recommend Cards */}
      <div className="flex flex-col gap-4">
        {displayedAgents
          .slice()
          .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))
          .slice(0, 5) // take top 5 only
          .map((item, index) => (
            // <RecommendedCard
            //   key={index}
            //   id={item._id}
            //   discount="15%"
            //   duration="2-3 hours"
            //   distance="5km"
            //   {...item}
            //   pname={item.specialists?.[0]?.name ?? item.name}
            //   description={item.description ?? ""}
            //   image={item.image ?? "/assets/images/default-avatar.png"}
            //   rating={item.rating ?? 0}
            // />
            <RecommendedCard
              key={index}
              id={item._id}
              discount="15%"
              duration="2-3 hours"
              distance="5km"
              {...item} // includes categoryId, specialists, etc.
              pname={item.specialists?.[0]?.name ?? item.name}
              description={item.description ?? ""}
              image={item.image ?? "/assets/images/default-avatar.png"}
              rating={item.rating ?? 0}
              specialists={item} // 👈 add this
            />

          ))}
      </div>
      {/* Frequently booked section */}
      <div className="space-y-3 mx-2 my-4">
        <h2 className="text-lg font-bold text-custom-blue font-inter leading-7">
          Frequently Booked
        </h2>
        <div className="flex gap-2 md:gap-4 overflow-x-auto scrollbar-hide">
          {services.map((service, index) => (
            <AllServiceCard
              key={index}
              image={service.image}
              title={service.title} />
          ))}
        </div>
      </div>
      {/* Comobo offer section */}
      <div className=" mx-2">
        <h2 className="text-lg font-bold text-custom-blue font-inter leading-7 pb-2">
          Combo Offers
        </h2>
        <CustomSwiperComponent
          items={combos}
          slidesPerView={1}
          spaceBetween={16}
          autoplay={true}
          pagination={false}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          renderItem={(combo, idx) => (
            <ServiceCard
              key={idx}
              image={combo.image}
              data={combo}
              overlayPosition="left"
            />
          )}
        />
      </div>
      {/* cleanig and applaince repair cards */}
      {categories
        .filter(cat => subcategories[cat.name])
        .map(cat => (
          <div key={cat._id} className="space-y-3 mx-2 my-3">
            <h2 className="text-lg font-bold text-custom-blue font-inter leading-7">
              {cat.name} Services
            </h2>
            <div className="flex gap-2 md:gap-4 overflow-x-auto scrollbar-hide">
              {(subcategories[cat.name] ?? []).map((service: any) => (
                <AllServiceCard
                  key={service._id}
                  image={service.image}
                  title={service.name}
                  onClick={() => onSubcategoryClick(cat.name, service)}
                />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default RecommendedSection;
