import React, { useEffect } from "react";
import { IonContent } from "@ionic/react";
import { useIonRouter } from "@ionic/react";
import { useParams } from "react-router-dom";
import Header from "../../../components/Header/Header";
import PageLayout from "../../../components/Layout/Layout";
import { ComboOfferCard } from "../../../components/Common/CustomCards/CustomCards";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { fetchCombos } from "../../../features/home-services/combooffers/comboThunk";
import { useAddToCart } from "../../../utils/ReusableHook";

const ComboDetailPage: React.FC = () => {
  const { addItemToCart } = useAddToCart();
  const ionRouter = useIonRouter();
  const { id } = useParams<{ id?: string }>();
  const dispatch = useAppDispatch();

  const { combos, loading } = useAppSelector((state) => state.combos);
  console.log("cobos", combos)
  useEffect(() => {
    if (!combos || combos.length === 0) {
      dispatch(fetchCombos());
    }
  }, [dispatch, combos]);

  // const handleBookService = (combo: { id: string; title: string; price: number; image: string; }, comboItem: {
  //   parentId(item: any, parentId: any): unknown;
  //   id: string;
  //   title: string;
  //   price: number;
  //   image: string;
  //   categoryId?: string;
  // }) => {
  //   const item: any = {
  //     id: comboItem.id,
  //     title: comboItem.title,
  //     price: comboItem.price,
  //     image: comboItem.image,
  //     quantity: 1,
  //   };

  //  addItemToCart(item,comboItem.parentId
  // );

  // };
  // Scroll to selected combo card on load
  const handleBookService = (
    combo: { id: string; title: string; price: number; image: string },
    categoryId?: string
  ) => {
    const item: any = {
      id: combo.id,
      title: combo.title,
      price: combo.price,
      image: combo.image,
      quantity: 1,
    };
    console.log("catId", categoryId)
    addItemToCart(item, true, categoryId);
  };


  useEffect(() => {
    if (id) {
      const el = document.getElementById(`combo-${id}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [id, combos]);

  return (
    <PageLayout
      header={<Header title="Combo Offers" type="page" showRightIcon={false} />}
    >
      <IonContent>
        <div className="max-w-md mx-auto px-4">
          {loading && <p className="text-center py-4">Loading combos...</p>}

          {combos.map((combo) => {
            // Calculate discounted price
            const discountValue = combo.discount
              ? parseFloat(combo.discount.toString().replace("%", ""))
              : 0;
            const discountedPrices = combo.price
              ? combo.price - (combo.price * discountValue) / 100
              : undefined;

            const bulletPoints =
              combo.specialOffers?.[0]?.bulletPoints ?? [];

            return (
              <div key={combo._id} id={`combo-${combo._id}`}>

                <ComboOfferCard
                  id={combo._id}
                  title={combo.name}
                  image={combo.image}
                  secondaryImage={combo.image}
                  rating={combo.rating}
                  originalPrice={combo.price}
                  discountedPrice={discountedPrices}
                  services={bulletPoints}
                  onBookService={() =>
                    handleBookService(
                      {
                        id: combo._id,
                        title: combo.name,
                        price: discountedPrices || combo.price,
                        image: combo.image,
                        
                      },
                      combo.parentId // 👈 pass as parentId/categoryId
                    )
                  }
                />

              </div>
            );
          })}
        </div>
      </IonContent>
    </PageLayout>
  );
};

export default ComboDetailPage;
