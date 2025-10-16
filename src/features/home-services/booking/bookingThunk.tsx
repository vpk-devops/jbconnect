import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllOrders, getOrderById } from "../../../api/home-services/bookingApi";

// Get all orders 
export const fetchAllOrders = createAsyncThunk(
  "orders/fetchAllOrders",
  async (_, { rejectWithValue }) => {
    try {
      const res = await getAllOrders();
      console.log("orede",res.data.orders)
      return res.data.orders; 
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// Get single order by ID
export const fetchOrderById = createAsyncThunk(
  "orders/fetchOrderById",
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await getOrderById(id);
      console.log("orede",res.data.orders)
      return res.data.order;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);
