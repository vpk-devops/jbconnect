import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories, fetchSubcategories, fetchSubcategoriesByName } from "./categoryThunk";

interface CategoryState {
  categories: any[];
  subcategories: { [key: string]: any[] };
  loading: boolean;
  subLoading: boolean;
  error: string | null;
}

const initialState: CategoryState = {
  categories: [],
  subcategories: {},
  loading: false,
  subLoading: false,
  error: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // categories
    builder.addCase(fetchCategories.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // subcategories by id
    builder.addCase(fetchSubcategories.pending, (state) => {
      state.subLoading = true;
    });
    builder.addCase(fetchSubcategories.fulfilled, (state, action) => {
      state.subLoading = false;
      const { categoryId, subcategories } = action.payload;
      state.subcategories[categoryId] = subcategories;
    });
    builder.addCase(fetchSubcategories.rejected, (state, action) => {
      state.subLoading = false;
      state.error = action.payload as string;
    });
    // fetch subcategory by nme
     builder.addCase(fetchSubcategoriesByName.pending, (state) => {
    state.subLoading = true;
  });
  builder.addCase(fetchSubcategoriesByName.fulfilled, (state, action) => {
    state.subLoading = false;
    const { categoryName, subcategories } = action.payload;
    state.subcategories[categoryName] = subcategories;
  });
  builder.addCase(fetchSubcategoriesByName.rejected, (state, action) => {
    state.subLoading = false;
    state.error = action.payload as string;
  });
  },
});

export default categorySlice.reducer;
