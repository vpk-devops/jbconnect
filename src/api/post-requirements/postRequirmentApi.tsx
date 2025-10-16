import axiosInstance from "../axiosInstance";
// import { Requirement } from "../../redux/post-requirements/postRequirementTypes";

// 1. Get all requirements
export const getRequirements = () => {
  return axiosInstance.get("/content/requirements");
};

// 2. Get requirement by ID
export const getRequirementById = (id: string) => {
  return axiosInstance.get(`/content/requirements/${id}`);
};

// 3. Get all categories
export const getCategories = () => {
  return axiosInstance.get("/content/requirements/categories");
};

// 4. Get subcategories by category ID
export const getSubcategories = (categoryId: string) => {
  return axiosInstance.get(`/content/requirements/categories/${categoryId}/subcategories`);
};

// 5. Get services by subcategory ID
export const getServices = (subCategoryId: string) => {
  return axiosInstance.get(`/content/requirements/subcategories/${subCategoryId}/services`);
};

// 6. Create requirement
export const createRequirement = (formData: FormData) => {
  return axiosInstance.post("/content/requirements", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
