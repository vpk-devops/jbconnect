// import { createSlice } from "@reduxjs/toolkit";
// import { fetchAllOrders, fetchOrderById } from './bookingThunk';


// export interface Order {
//   _id: string;
//   userId?: string;
//   sections?: any[];
//   address?: any;
//   agent?: any;
//   method: string;
//   amount: number;
//   amountPaise: number;
//   currency: string;
//   paymentStatus: "pending" | "success" | "failed";
//   orderStatus: "placed" | "accepted" | "in-progress" | "completed" | "cancelled";
//   createdAt?: string;
//   updatedAt?: string;
// }

// interface BookingState {
//   orders: Order[];
//   currentOrder: Order | null;
//   loading: boolean;
//   error: string | null;
//   status: {
//     upcoming: number;
//     completed: number;
//     cancelled: number;
//     total: number;
//   };
// }

// const initialState: BookingState = {
//   orders: [],
//   currentOrder: null,
//   loading: false,
//   error: null,
//   status: {
//     upcoming: 0,
//     completed: 0,
//     cancelled: 0,
//     total: 0,
//   },
// };

// const bookingSlice = createSlice({
//   name: "bookings",
//   initialState,
//   reducers: {
//     clearCurrentOrder: (state) => {
//       state.currentOrder = null;
//     },
//   },
//   extraReducers: (builder) => {
//     const setLoading = (state: BookingState) => {
//       state.loading = true;
//       state.error = null;
//     };
//     const setError = (state: BookingState, action: any) => {
//       state.loading = false;
//       state.error = action.payload as string;
//     };

//     //  fetch all orders
//     builder.addCase(fetchAllOrders.pending, setLoading);
//     builder.addCase(fetchAllOrders.fulfilled, (state, action) => {
//       state.loading = false;
//       state.orders = action.payload;

//       // update stats
//       const upcoming = action.payload.filter(
//         (o: Order) =>
//           o.orderStatus === "placed" ||
//           o.orderStatus === "accepted" ||
//           o.orderStatus === "in-progress"
//       ).length;

//       const completed = action.payload.filter(
//         (o: Order) => o.orderStatus === "completed"
//       ).length;

//       const cancelled = action.payload.filter(
//         (o: Order) => o.orderStatus === "cancelled"
//       ).length;

//       state.status = {
//         upcoming,
//         completed,
//         cancelled,
//         total: action.payload.length,
//       };
//     });
//     builder.addCase(fetchAllOrders.rejected, setError);

//     //  fetch single order
//     builder.addCase(fetchOrderById.pending, setLoading);
//     builder.addCase(fetchOrderById.fulfilled, (state, action) => {
//       state.loading = false;
//       state.currentOrder = action.payload;
//     });
//     builder.addCase(fetchOrderById.rejected, setError);
//   },
// });

// export const { clearCurrentOrder } = bookingSlice.actions;
// export default bookingSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAllOrders, fetchOrderById } from "./bookingThunk";

export interface Order {
  _id: string;
  userId?: string;
  sections?: any[];
  address?: any;
  agent?: any;
  method: string;
  amount: number;
  amountPaise: number;
  currency: string;
  paymentStatus: "pending" | "success" | "failed";
  orderStatus: "placed" | "accepted" | "in-progress" | "completed" | "cancelled";
  createdAt?: string;
  updatedAt?: string;
}

// 👉 New: local booking draft (before placing order)
export interface DraftBooking {
  serviceName?: string;
  providerName?: string;
  providerId?: string;
  date?: string;
  time?: string;
  specialRequests?: string;
}

interface BookingState {
  orders: Order[];
  currentOrder: Order | null;
  draftBooking: DraftBooking | null; // new
  loading: boolean;
  error: string | null;
  status: {
    upcoming: number;
    completed: number;
    cancelled: number;
    total: number;
  };
}

const initialState: BookingState = {
  orders: [],
  currentOrder: null,
  draftBooking: null, // init
  loading: false,
  error: null,
  status: {
    upcoming: 0,
    completed: 0,
    cancelled: 0,
    total: 0,
  },
};

const bookingSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    clearCurrentOrder: (state) => {
      state.currentOrder = null;
    },

    // 👉 new reducers for draft flow
    setDraftBooking: (state, action: PayloadAction<DraftBooking>) => {
      state.draftBooking = { ...state.draftBooking, ...action.payload };
    },
    clearDraftBooking: (state) => {
      state.draftBooking = null;
    },
  },
  extraReducers: (builder) => {
    const setLoading = (state: BookingState) => {
      state.loading = true;
      state.error = null;
    };
    const setError = (state: BookingState, action: any) => {
      state.loading = false;
      state.error = action.payload as string;
    };

    // fetch all orders
    builder.addCase(fetchAllOrders.pending, setLoading);
    builder.addCase(fetchAllOrders.fulfilled, (state, action) => {
      state.loading = false;
      state.orders = action.payload;

      const upcoming = action.payload.filter(
        (o: Order) =>
          o.orderStatus === "placed" ||
          o.orderStatus === "accepted" ||
          o.orderStatus === "in-progress"
      ).length;

      const completed = action.payload.filter(
        (o: Order) => o.orderStatus === "completed"
      ).length;

      const cancelled = action.payload.filter(
        (o: Order) => o.orderStatus === "cancelled"
      ).length;

      state.status = {
        upcoming,
        completed,
        cancelled,
        total: action.payload.length,
      };
    });
    builder.addCase(fetchAllOrders.rejected, setError);

    // fetch single order
    builder.addCase(fetchOrderById.pending, setLoading);
    builder.addCase(fetchOrderById.fulfilled, (state, action) => {
      state.loading = false;
      state.currentOrder = action.payload;
    });
    builder.addCase(fetchOrderById.rejected, setError);
  },
});

export const {
  clearCurrentOrder,
  setDraftBooking,
  clearDraftBooking,
} = bookingSlice.actions;

export default bookingSlice.reducer;
