
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCategories,
  getSubCategories,
  getSubCategoriesByName,
} from "../../../api/home-services/categoryApi"; 

// Fetch all categories
export const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const res = await getCategories();
      // console.log("cat", res.data.categories)
      return res.data.categories;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// Fetch subcategories by categoryId
export const fetchSubcategories = createAsyncThunk(
  "category/fetchSubcategories",
  async (categoryId: string, { rejectWithValue }) => {
    try {
      const res = await getSubCategories(categoryId);
      return { categoryId, subcategories: res.data.subcategories };
    } catch (err: any) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Fetch subcategories by name
export const fetchSubcategoriesByName = createAsyncThunk(
  "category/fetchSubcategoriesByName",
  async (categoryName: string, { rejectWithValue }) => {
    try {
      const res = await getSubCategoriesByName(categoryName);
      return { categoryName, subcategories: res.data.subcategories };
    } catch (err: any) {
      return rejectWithValue(err.response?.data || "Error fetching subcategories");
    }
  }
);
