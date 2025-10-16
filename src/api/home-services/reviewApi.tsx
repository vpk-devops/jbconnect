import axiosInstance from "../../api/axiosInstance";

// Add a review
export const addReview = (formData: FormData) => {
  return axiosInstance.post("/homeservices/reviews", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

// Get all reviews
export const getAllReviews = () => {
  return axiosInstance.get("/homeservices/reviews");
};
// Get reviews by modelId
export const getReviewsByModelId = (modelId: string) => {
  return axiosInstance.get(`/homeservices/reviews/${modelId}`);
};
