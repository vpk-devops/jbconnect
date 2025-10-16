import { createSlice } from "@reduxjs/toolkit";
import { fetchCombos } from "./comboThunk";


interface CombosState {
  combos: any[];
  loading: boolean;
  error: string | null;
}

const initialState: CombosState = {
  combos: [],
  loading: false,
  error: null,
};

const combosSlice = createSlice({
  name: "combos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCombos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCombos.fulfilled, (state, action) => {
        state.loading = false;
        state.combos = action.payload;
      })
      .addCase(fetchCombos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default combosSlice.reducer;
