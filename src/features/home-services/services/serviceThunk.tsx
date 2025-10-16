import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getServicesBySubcategoryId,
  getServicesBySubcategoryName,
  getAllServices,
  getServiceByName,
} from "../../../api/home-services/serviceApi";

// Fetch all services
export const fetchAllServices = createAsyncThunk(
  "services/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const res = await getAllServices();
      return res.data.services; 
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Fetch services by subcategory ID
export const fetchServicesBySubcategoryId = createAsyncThunk(
  "services/fetchBySubcategoryId",
  async (subCategoryId: string, { rejectWithValue }) => {
    try {
      const res = await getServicesBySubcategoryId(subCategoryId);
      console.log("All",res.data.services)
      return res.data.services; 
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Fetch services by subcategory Name
export const fetchServicesBySubcategoryName = createAsyncThunk(
  "services/fetchBySubcategoryName",
  async (name: string, { rejectWithValue }) => {
    try {
      const res = await getServicesBySubcategoryName(name);
      return res.data.services;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Fetch single service by name
export const fetchServiceByName = createAsyncThunk(
  "services/fetchByName",
  async (name: string, { rejectWithValue }) => {
    try {
      const res = await getServiceByName(name);
      return res.data.services;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
