import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartLineItem {
  id: string;
  title: string;
  price: number;
  tag?: string;
  image?: string;
  quantity: number;
  categoryId?: string;

  issueType?: string[];
  requestType?: string | null;
  machineType?: string | null;
}

export interface CartSection {
  id: string;
  title: string;
  items: CartLineItem[];

}
interface CartState { sections: CartSection[];requiredCategoryId: any;}

const initialState: CartState = { sections: [], requiredCategoryId: null, };

interface AddToCartPayload {
  sectionId: string;
  sectionTitle: string;
  item: Omit<CartLineItem, "quantity"> & { quantity?: number };
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
      let { sectionId, sectionTitle, item } = action.payload;
      if (sectionTitle.toLowerCase().includes("service services")) {
       sectionTitle = "Combo Offers";
  }

      let section = state.sections.find((sec) => sec.title === sectionTitle);
      if (!section) {
        section = { id: sectionId, title: sectionTitle, items: [] };
        console.log("slice",section)
        state.sections.push(section);
      }
      const existingItem = section.items.find((it) => it.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        section.items.push({ ...item, quantity: item.quantity ?? 1 });
      }
    },

    setRequiredCategoryId: (state, action: PayloadAction<string | null>) => {
      state.requiredCategoryId = action.payload;   
    },
    updateItemQty: (
      state,
      action: PayloadAction<{ sectionId: string; itemId: string; quantity: number }>
    ) => {
      const { sectionId, itemId, quantity } = action.payload;
      const section = state.sections.find((sec) => sec.id === sectionId);
      if (!section) return;
      const item = section.items.find((it) => it.id === itemId);
      if (item) item.quantity = quantity;
    },

    removeItem: (
      state,
      action: PayloadAction<{ sectionId: string; itemId: string }>
    ) => {
      const { sectionId, itemId } = action.payload;
      const sectionIndex = state.sections.findIndex((sec) => sec.id === sectionId);
      if (sectionIndex === -1) return;

      const section = state.sections[sectionIndex];
      section.items = section.items.filter((it) => it.id !== itemId);

      // Remove section if empty
      if (section.items.length === 0) {
        state.sections.splice(sectionIndex, 1);
      }
    },
    removeSection: (state, action: PayloadAction<{ sectionId: string }>) => {
      state.sections = state.sections.filter(sec => sec.id !== action.payload.sectionId);
    },

    clearCart: (state) => {
      state.sections = [];
      state.requiredCategoryId = null;
    },
  },
});

export const { addToCart, updateItemQty, removeItem, clearCart, removeSection ,setRequiredCategoryId} = cartSlice.actions;
export default cartSlice.reducer;
