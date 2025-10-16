import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCombooffers } from "../../../api/home-services/combooffersApi";


export const fetchCombos = createAsyncThunk(
  "combos/fetchCombos",
  async (_, { rejectWithValue }) => {
    try {
      const res = await getAllCombooffers();
      // console.log("cobos", res.data.combos);
      return res.data.combos;


    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);