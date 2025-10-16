import { createAsyncThunk } from "@reduxjs/toolkit";
import { Review, ReviewResponse } from "./reviewTypes";
import {
  addReview,
  getAllReviews,
  getReviewsByModelId,
} from "../../../api/home-services/reviewApi";

// Fetch reviews by modelId
export const fetchReviews = createAsyncThunk<
  Review[],
  string,
  { rejectValue: string }
>("reviews/fetchReviews", async (modelId, { rejectWithValue }) => {
  try {
    const res = await getReviewsByModelId(modelId);
    if (!res.data.success) {
      return rejectWithValue(res.data.message || "Failed to load reviews");
    }
    // backend returns { items: [...] }
    return res.data.items as Review[];
  } catch (err: any) {
    return rejectWithValue(err.response?.data?.message || err.message);
  }
});

// fetch all reviews
export const fetchAllReviews = createAsyncThunk<
  { items: Review[]; average: number },
  void,
  { rejectValue: string }
>("reviews/fetchAllReviews", async (_, { rejectWithValue }) => {
  try {
    const res = await getAllReviews();
    if (!res.data.success) {
      return rejectWithValue(res.data.message || "Failed to load all reviews");
    }

    console.log("allreviw", res.data.items);

  
    return {
      items: res.data.items.items,
      average: res.data.items.average,
    };
  } catch (err: any) {
    return rejectWithValue(err.response?.data?.message || err.message);
  }
});

// add a review
export const submitReview = createAsyncThunk<
  Review,
  FormData,
  { rejectValue: string }
>("reviews/submitReview", async (formData, { rejectWithValue }) => {
  try {
    const res = await addReview(formData);
    if (!res.data.success) {
      return rejectWithValue(res.data.message || "Failed to submit review");
    }
   
    return res.data.data as Review;  
  } catch (err: any) {
    return rejectWithValue(err.response?.data?.message || err.message);
  }
});


