import { createAsyncThunk } from "@reduxjs/toolkit";
import * as blogsApi from "../../api/blogs/blogsApi";
import { Blog, BlogFilters } from "./blogsTypes";

// Fetch all blogs
export const fetchBlogs = createAsyncThunk(
  "blogs/fetchBlogs",
  async (filters: BlogFilters, { rejectWithValue }) => {
    try {
      const res = await blogsApi.getAllBlogs(filters);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// Fetch blog by ID
export const fetchBlogById = createAsyncThunk(
  "blogs/fetchBlogById",
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await blogsApi.getBlogById(id);
      return res.data.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);


