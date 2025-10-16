import React, { useEffect } from "react";
import { IonGrid, IonRow, IonCol, IonCard } from "@ionic/react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { fetchCategories, fetchSubcategories } from "../../../features/home-services/category/categoryThunk";
import { ServiceCard } from "../../../components/Common/CustomCards/CustomCards";
import CustomSwiperComponent from "../../../components/Common/CustomSwiperSlider/CustomSwiperComponent";
import { fetchCombos } from "../../../features/home-services/combooffers/comboThunk";

interface CategoryProps {
  onOpenModal: (category: any) => void;
}

const Category: React.FC<CategoryProps> = ({ onOpenModal }) => {
  const dispatch = useAppDispatch();
  const { categories = [], loading } = useAppSelector((state) => state.category);
  console.log("categ", categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryClick = (cat: any) => {
    console.log("id", cat._id, cat);
    onOpenModal(cat);
    dispatch(fetchSubcategories(cat._id));
  };

  
  const offers = categories
    .filter((cat) => {
      const offer = cat.specialOffers;
      return (
        offer &&
        offer.title &&
        offer.title.trim() !== "" &&
        offer.priceRange &&
        offer.priceRange.trim() !== ""
      );
    })
    .map((cat) => {
      const offer = cat.specialOffers;
 
      const offerImage = (Array.isArray(offer.image) && offer.image.length > 0) 
        ? offer.image[0] 
        : cat.image;

      return {
        type: 'specialOffer',
        categoryId: cat._id,
        categoryName: cat.name,
        
        subcategory: offer.subcategory ? {
          _id: offer.subcategory._id,
          name: offer.subcategory.name,
          slug: offer.subcategory.slug || null
        } : null,
        title: offer.title,
        subtitle: offer.subtitle || "",
        priceRange: offer.priceRange,
        discount: offer.discount || "",
        image: offerImage,
      };
    });

  console.log("offers", offers);

  if (loading) return <p>Loading categories...</p>;

  return (
    <div className="mt-2">
      {/* Category Section */}
      <IonCard className="!mb-4 px-2 py-2 bg-white rounded-lg shadow-sm font-inter">
        <h2 className="text-base pl-2 font-medium text-[#6096baff] mb-1">
          Select By Category
        </h2>
        <IonGrid>
          <IonRow className="gap-y-2">
            {categories.map((cat: any) => (
              <IonCol
                key={cat._id}
                size="4"
                sizeMd="2"
                sizeLg="2.4"
                className="flex flex-col items-center"
                onClick={() => handleCategoryClick(cat)}
              >
                <div className="w-24 h-14 md:w-30 md:h-30 bg-[#E5EDFFFF] rounded-full flex items-center justify-center">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="h-14 w-14 object-contain"
                  />
                </div>
                <span className="mt-1 text-sm md:text-base font-bold text-[#6096baff] text-center">
                  {cat.name}
                </span>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonCard>

      {/* Special Offers  */}
      {offers.length > 0 && (
        <div className="mx-4">
          <CustomSwiperComponent
            items={offers}
            slidesPerView={1}
            spaceBetween={16}
            autoplay={true}
            pagination={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            renderItem={(offer, idx) => (
              <ServiceCard
                key={idx}
                data={offer}
                image={offer.image}
              />
            )}
          />
          <div className="tailwind-pagination flex justify-center items-center gap-2 mt-3"></div>
        </div>
      )}
    </div>
  );
};

export default Category;