// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface Address {
//   id: string; 
//   text: string; // Full address string
//   house: string; 
//   landmark: string; 
//   tag: "Home" | "Work" | "Other";
//   coords?: {
//     lat: number;
//     lng: number;
//   };
// }

// interface Agent {
//   id: string;
//   name: string;
//   profession?: string;
//   basicCharge?:number;
//   image?: string|undefined;
//   rating?:number;
//   phone?: string;
// }

// interface DateTimeSelection {
//   date: string;
//   time?: string;
// }

// interface OrderState {
//   addresses: Address[]; // list of addresses
//   selectedAddressId?: string;
//   dateTime?: DateTimeSelection;
//   agent?: Agent;
//   requiredCategories?: string[];
// }

// const initialState: OrderState = {
//   addresses: [],
  
// };

// const orderSlice = createSlice({
//   name: "order",
//   initialState,
//   reducers: {
//     addAddress: (state, action: PayloadAction<Address>) => {
//       state.addresses.push(action.payload);
//       state.selectedAddressId = action.payload.id; // auto-select last added
//     },
//     setSelectedAddresses: (state, action: PayloadAction<string>) => {
//   state.selectedAddressId = action.payload;
// },
//     setDateTime: (state, action: PayloadAction<DateTimeSelection>) => {
//       state.dateTime = action.payload;
//     },
//     setAgent: (state, action: PayloadAction<Agent>) => {
//       state.agent = action.payload;
//     },
//     setRequiredCategories: (state, action: PayloadAction<string[]>) => {
//       state.requiredCategories = action.payload;
//     },
//     resetOrder: () => initialState,
//   },
// });

// export const {
//   addAddress,
//   setSelectedAddresses,
//   setDateTime,
//   setAgent,
//   setRequiredCategories,
//   resetOrder,
// } = orderSlice.actions;

// export default orderSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Address {
  id: string;
  text: string; // Full address string
  house: string;
  landmark: string;
  tag: "Home" | "Work" | "Other";
  coords?: {
    lat: number;
    lng: number;
  };
}

interface Agent {
  id: string;
  name: string;
  profession?: string;
  basicCharge?: number;
  image?: string | undefined;
  rating?: number;
  phone?: string;
}

interface DateTimeSelection {
  date: string;
  time?: string;
}

interface OrderState {
  addresses: Address[];
  mainAddressId?: string;          // 👈 NEW: fixed address for homepage
  selectedAddressId?: string;      // 👈 still used for booking flow
  dateTime?: DateTimeSelection;
  agent?: Agent;
  requiredCategories?: string[];
}

const initialState: OrderState = {
  addresses: [],
  mainAddressId: undefined,
  selectedAddressId: undefined,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addAddress: (state, action: PayloadAction<Address>) => {
      state.addresses.push(action.payload);
      // If no main address yet, set this one as main
      if (!state.mainAddressId) {
        state.mainAddressId = action.payload.id;
      }
    },
    setMainAddress: (state, action: PayloadAction<string>) => {
      state.mainAddressId = action.payload;
    },
    setSelectedAddresses: (state, action: PayloadAction<string>) => {
      state.selectedAddressId = action.payload;
    },
    setDateTime: (state, action: PayloadAction<DateTimeSelection>) => {
      state.dateTime = action.payload;
    },
    setAgent: (state, action: PayloadAction<Agent>) => {
      state.agent = action.payload;
    },
    setRequiredCategories: (state, action: PayloadAction<string[]>) => {
      state.requiredCategories = action.payload;
    },
    resetOrder: () => initialState,
  },
});

export const {
  addAddress,
  setMainAddress,
  setSelectedAddresses,
  setDateTime,
  setAgent,
  setRequiredCategories,
  resetOrder,
} = orderSlice.actions;

export default orderSlice.reducer;
