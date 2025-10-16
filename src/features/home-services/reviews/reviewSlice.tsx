
import { createSlice } from "@reduxjs/toolkit";
import { Review } from "./reviewTypes";
import { fetchAllReviews, fetchReviews, submitReview } from "./reviewThunk";

interface ReviewState {
    reviews: Review[];
    allReviews: Review[];
    average: number | null;
    loading: boolean;
    error: string | null;
}

const initialState: ReviewState = {
    reviews: [],
    allReviews: [],
    average: null,
    loading: false,
    error: null,
};

const reviewSlice = createSlice({
    name: "reviews",
    initialState,
    reducers: {
        clearReviews: (state) => {
            state.reviews = [];
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        // Fetch Reviews
        builder
            .addCase(fetchReviews.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchReviews.fulfilled, (state, action) => {
                state.loading = false;
                state.reviews = action.payload;
            })
            .addCase(fetchReviews.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to fetch reviews";
            });
        //   all reviews
        builder
            .addCase(fetchAllReviews.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllReviews.fulfilled, (state, action) => {
                state.loading = false;
                state.allReviews = action.payload.items;
                state.average = action.payload.average;
            })

            .addCase(fetchAllReviews.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to fetch all reviews";
            });
        // Submit Review
        builder
            .addCase(submitReview.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(submitReview.fulfilled, (state, action) => {
                state.loading = false;
                state.reviews.push(action.payload)
            })
            .addCase(submitReview.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to submit review";
            });
    },
});

export const { clearReviews } = reviewSlice.actions;
export default reviewSlice.reducer;
