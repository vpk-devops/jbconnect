import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RequirementStatus, RequirementState, Requirement } from "./postRequirementTypes";
import { 
  fetchRequirements, 
  fetchRequirementById, 
  fetchCategories, 
  fetchSubcategories, 
  fetchServices, 
  addRequirement 
} from "./postRequirementThunk";

const initialState: RequirementState = {
  requirements: [],
  requirement: null,
  categories: [],
  subcategories: [],
  services: [],
  status: RequirementStatus.IDLE,
  error: null,
};

const requirementSlice = createSlice({
  name: "requirement",
  initialState,
  reducers: {
    clearRequirement(state) {
      state.requirement = null;
      state.error = null;
    },
    clearSubcategories(state) {
      state.subcategories = [];
    },
    clearServices(state) {
      state.services = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all requirements
      .addCase(fetchRequirements.pending, (state) => {
        state.status = RequirementStatus.LOADING;
      })
      .addCase(fetchRequirements.fulfilled, (state, action: PayloadAction<Requirement[]>) => {
        state.status = RequirementStatus.SUCCEEDED;
        state.requirements = action.payload;
      })
      .addCase(fetchRequirements.rejected, (state, action: PayloadAction<any>) => {
        state.status = RequirementStatus.FAILED;
        state.error = action.payload ?? "Failed to fetch requirements";
      })

      // Fetch single requirement
      .addCase(fetchRequirementById.pending, (state) => {
        state.status = RequirementStatus.LOADING;
      })
      .addCase(fetchRequirementById.fulfilled, (state, action: PayloadAction<Requirement>) => {
        state.status = RequirementStatus.SUCCEEDED;
        state.requirement = action.payload;
      })
      .addCase(fetchRequirementById.rejected, (state, action: PayloadAction<any>) => {
        state.status = RequirementStatus.FAILED;
        state.error = action.payload ?? "Failed to fetch requirement";
      })

      // Fetch categories
      .addCase(fetchCategories.pending, (state) => {
        state.status = RequirementStatus.LOADING;
      })
      .addCase(fetchCategories.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.status = RequirementStatus.SUCCEEDED;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action: PayloadAction<any>) => {
        state.status = RequirementStatus.FAILED;
        state.error = action.payload ?? "Failed to fetch categories";
      })

      // Fetch subcategories
      .addCase(fetchSubcategories.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.subcategories = action.payload;
      })
      .addCase(fetchSubcategories.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload ?? "Failed to fetch subcategories";
      })

      // Fetch services
      .addCase(fetchServices.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.services = action.payload;
      })
      .addCase(fetchServices.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload ?? "Failed to fetch services";
      })

      // Add requirement
      .addCase(addRequirement.fulfilled, (state, action: PayloadAction<Requirement>) => {
        state.requirements.push(action.payload);
      })
      .addCase(addRequirement.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload ?? "Failed to add requirement";
      });
  },
});

export const { clearRequirement, clearSubcategories, clearServices } = requirementSlice.actions;
export default requirementSlice.reducer;
