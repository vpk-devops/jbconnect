import axiosInstance from "../axiosInstance";
import { Blog, BlogFilters, BlogResponse } from "../../features/blogs/blogsTypes";

// 1. Get all blogs with filters
export const getAllBlogs = (filters: BlogFilters = {}) => {
  return axiosInstance.get<BlogResponse>("/content/blogs", { params: filters });
};

// 2. Get blog by ID
export const getBlogById = (id: string) => {
  return axiosInstance.get<{ success: boolean; data: Blog }>(`/content/blogs/${id}`);
};

