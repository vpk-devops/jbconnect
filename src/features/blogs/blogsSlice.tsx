import { createSlice } from "@reduxjs/toolkit";
import { Blog } from "./blogsTypes";
import { fetchBlogs, fetchBlogById } from "./blogsThunk";

interface BlogState {
  blogs: Blog[];
  blog?: Blog;
  total: number;
  page: number;
  pages: number;
  loading: boolean;
  error: string | null;
}

const initialState: BlogState = {
  blogs: [],
  total: 0,
  page: 1,
  pages: 0,
  loading: false,
  error: null,
};

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch all blogs
    builder.addCase(fetchBlogs.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.loading = false;
      state.blogs = action.payload.blogs;
      state.total = action.payload.total;
      state.page = action.payload.page;
      state.pages = action.payload.pages;
    });
    builder.addCase(fetchBlogs.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // Fetch single blog
    builder.addCase(fetchBlogById.fulfilled, (state, action) => {
      state.blog = action.payload;
    });

 
  },
});

export default blogSlice.reducer;
