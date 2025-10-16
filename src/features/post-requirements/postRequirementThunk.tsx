import { createAsyncThunk } from "@reduxjs/toolkit";
import * as requirementApi from "../../api/post-requirements/postRequirmentApi";
import { Requirement } from "./postRequirementTypes";

// Fetch all requirements
export const fetchRequirements = createAsyncThunk<Requirement[]>(
  "requirements/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const res = await requirementApi.getRequirements();
      console.log("post-req",res.data.requirements)
      return res.data.requirements; // matches your backend
    } catch (err: any) {
      return rejectWithValue(err.response?.data || "Failed to fetch requirements");
    }
  }
);

// Fetch requirement by ID
export const fetchRequirementById = createAsyncThunk<Requirement, string>(
  "requirements/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const res = await requirementApi.getRequirementById(id);
      return res.data.requirement;
    } catch (err: any) {
      return rejectWithValue(err.response?.data || "Failed to fetch requirement");
    }
  }
);

// Fetch categories
export const fetchCategories = createAsyncThunk<any[]>(
  "requirements/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const res = await requirementApi.getCategories();
      return res.data.categories;
    } catch (err: any) {
      return rejectWithValue(err.response?.data || "Failed to fetch categories");
    }
  }
);

// Fetch subcategories
export const fetchSubcategories = createAsyncThunk<any[], string>(
  "requirements/fetchSubcategories",
  async (categoryId, { rejectWithValue }) => {
    try {
      const res = await requirementApi.getSubcategories(categoryId);
      return res.data.subcategories;
    } catch (err: any) {
      return rejectWithValue(err.response?.data || "Failed to fetch subcategories");
    }
  }
);

// Fetch services
export const fetchServices = createAsyncThunk<any[], string>(
  "requirements/fetchServices",
  async (subCategoryId, { rejectWithValue }) => {
    try {
      const res = await requirementApi.getServices(subCategoryId);
      return res.data.services;
    } catch (err: any) {
      return rejectWithValue(err.response?.data || "Failed to fetch services");
    }
  }
);

// Create requirement
export const addRequirement = createAsyncThunk<Requirement, FormData>(
  "requirements/addRequirement",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await requirementApi.createRequirement(formData);
      return res.data.requirement;
    } catch (err: any) {
      return rejectWithValue(err.response?.data || "Failed to create requirement");
    }
  }
);
