import { useIonRouter } from "@ionic/react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addToCart, CartLineItem, setRequiredCategoryId } from "../features/home-services/cart/cartSlice";

// export const useAddToCart = () => {
//   const dispatch = useAppDispatch();
//   const router = useIonRouter();
//   const { services } = useAppSelector((state) => state.services);

//   const addItemToCart = (item: CartLineItem, navigate: boolean = true,) => {
//     dispatch(
//       addToCart({
//         sectionId: services?.[0]?.path?.[0] || "",
//         sectionTitle: `${services?.[0]?.pathNames?.[0] || "Service"} Services`,
//         item,
//       })
//     );

//     dispatch(setRequiredCategoryId(services?.[0]?.path?.[0] || ""));

//     if (navigate) {
//       router.push("/home-services/cart", "forward");
//     }
//   };

//   return { addItemToCart };
// };


export const useAddToCart = () => {
  const dispatch = useAppDispatch();
  const router = useIonRouter();
  const { services } = useAppSelector((state) => state.services);

  // const addItemToCart = (
  //   item: CartLineItem,
  //   navigate: boolean = true,
  //   categoryId?: string
  // ) => {
  //   const sectionId = categoryId || services?.[0]?.path?.[0] || "";
  //   const sectionTitle =
  //     categoryId
  //       ? "Combo Services" // 👈 or map from combo data
  //       : `${services?.[0]?.pathNames?.[0] || "Service"} Services`;

  //   dispatch(
  //     addToCart({
  //       sectionId,
  //       sectionTitle,
  //       item,
  //     })
  //   );

  //   dispatch(setRequiredCategoryId(sectionId)); // 👈 now correct

  //   if (navigate) {
  //     router.push("/home-services/cart", "forward");
  //   }
  // };
const addItemToCart = (
  item: CartLineItem,
  navigate: boolean = true,
  categoryId?: string
) => {
  const sectionId = categoryId || services?.[0]?.path?.[0] || "";
  const sectionTitle = categoryId
    ? "Combo Services"
    : `${services?.[0]?.pathNames?.[0] || "Service"} Services`;

  dispatch(addToCart({ sectionId, sectionTitle, item }));
  dispatch(setRequiredCategoryId(sectionId));

  if (navigate) {
    router.push("/home-services/cart", "forward");
  }
};

  return { addItemToCart };
};
