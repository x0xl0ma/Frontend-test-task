import { createSlice } from "@reduxjs/toolkit";
import data from "./data";

const dataSlice = createSlice({
  name: "slice",
  initialState: {
    items: data,
    filterCategory: "all",
    filterSubCategory: "all",
    
  },
  reducers: {
    filterByCategory: (state, action) => {
      state.filterCategory = action.payload;
      
    },
    filterBySubCategory: (state, action) => {
      state.filterSubCategory = action.payload;
    },
  },
});

export const { filterByCategory, filterBySubCategory } = dataSlice.actions;

export default dataSlice.reducer;
