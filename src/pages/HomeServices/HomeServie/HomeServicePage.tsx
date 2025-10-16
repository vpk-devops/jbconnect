import { IonContent, useIonRouter } from "@ionic/react";
import PageLayout from "../../../components/Layout/Layout";
import LocationSearch from "./LocationSearch";
import Category from "./Category";
import RecommendedSection from "./RecommendedSection";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import CategoryModal from "./CategoryModal/CategoryModal";
import ReviewSection from "./ReviewSection";
import ReferWorkSection from "./ReferWorkSection";
import { useLocation } from "react-router";
import { fetchCategories, fetchSubcategories } from "../../../features/home-services/category/categoryThunk";
import { slugify } from "../../../utils/helpers";

const HomeServicePage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categorySlug = queryParams.get("category");
  const router = useIonRouter();
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const { subcategories } = useAppSelector((state) => state.category);
  const { categories = [], loading } = useAppSelector((state) => state.category);
  
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);


  useEffect(() => {
    if (categorySlug && categories.length > 0) {
      const matchedCategory = categories.find(
        (cat) =>
          cat.slug === categorySlug ||
          cat.name.toLowerCase().replace(/\s+/g, "-") === categorySlug
      );

      if (matchedCategory) {
        setSelectedCategory(matchedCategory);

        // ensure subcategories are fetched
        if (!subcategories[matchedCategory._id]) {
          dispatch(fetchSubcategories(matchedCategory._id));
        }
      }
    }
  }, [categorySlug, categories, dispatch]);


  const handleSubcategoryClick = (categoryName: string, sub: any) => {
    setSelectedCategory(null);

    const catSlug = slugify(categoryName);

    const subSlug = sub.slug || slugify(sub.name || "");

    router.push(
      `/home-services/${catSlug}/${subSlug}/${sub._id}`,
      "forward",
      "replace"
    );
  };


  return (
    <PageLayout>
      <IonContent style={{ "--background": "#f8f8f8" } as React.CSSProperties}>
        <LocationSearch />
        <Category onOpenModal={(cat) => setSelectedCategory(cat)} />
        <RecommendedSection onSubcategoryClick={handleSubcategoryClick} />
        <ReviewSection />
        <ReferWorkSection />

        {selectedCategory && subcategories[selectedCategory._id] && (
          <CategoryModal
            isOpen={!!selectedCategory}
            onClose={() => setSelectedCategory(null)}
            title={`${selectedCategory.name} Services`}
            items={subcategories[selectedCategory._id].map((sub: any) => ({
              name: sub.name,
              image: sub.image,
              // onClick: () => handleSubcategoryClick(sub),
              onClick: () => handleSubcategoryClick(selectedCategory.name, sub)
            }))}
          />
        )}
      </IonContent>
    </PageLayout>
  );
};


export default HomeServicePage;
