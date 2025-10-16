import axiosInstance from "../axiosInstance";

// 1. Get all categories
export const getCategories = () => {
  return axiosInstance.get("/homeservices/categories");
};

// 2. Get category by ID
export const getCategoryById = (id: string) => {
  return axiosInstance.get(`/homeservices/categories/${id}`);
};

// 3. Get subcategories by categoryId
export const getSubCategories = (categoryId: string) => {
  return axiosInstance.get(`/homeservices/categories/${categoryId}/subcategories`);
};

export const getSubCategoriesByName = (categoryName: string) => {
  return axiosInstance.get(`/homeservices/categories/name/${categoryName}/subcategories`);
};

// 4. Get services by subCategoryId
export const getServices = (subCategoryId: string) => {
  return axiosInstance.get(`/homeservices/categories/services/${subCategoryId}`);
};