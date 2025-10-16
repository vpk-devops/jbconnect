import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllServices,
  fetchServicesBySubcategoryId,
  fetchServicesBySubcategoryName,
  fetchServiceByName,
} from "./serviceThunk";
import { ServiceState } from "./serviceTypes";
//  Initial state must match ServiceState
const initialState: ServiceState = {
  services: [],
  selectedService: null,
  loading: false,
  error: null,
};

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // All services
    builder.addCase(fetchAllServices.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllServices.fulfilled, (state, action) => {
      state.loading = false;
      state.services = action.payload;
    });
    builder.addCase(fetchAllServices.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // Services by Subcategory ID
    builder.addCase(fetchServicesBySubcategoryId.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchServicesBySubcategoryId.fulfilled, (state, action) => {
      state.loading = false;
      state.services = action.payload;
    });
    builder.addCase(fetchServicesBySubcategoryId.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // Services by Subcategory Name
    builder.addCase(fetchServicesBySubcategoryName.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchServicesBySubcategoryName.fulfilled, (state, action) => {
      state.loading = false;
      state.services = action.payload;
    });
    builder.addCase(fetchServicesBySubcategoryName.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // Service by Name
    builder.addCase(fetchServiceByName.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchServiceByName.fulfilled, (state, action) => {
      state.loading = false;
      state.selectedService = action.payload;
    });
    builder.addCase(fetchServiceByName.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default serviceSlice.reducer;
