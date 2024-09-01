import { createSlice } from "@reduxjs/toolkit";
import { fetchTruckDetails, fetchTrucks } from "./operations.js";

const trucksSlice = createSlice({
  name: "trucks",
  initialState: {
    items: [],
    status: "",
    error: null,
    currentPage: 1,
    hasMore: true,
    currentTruck: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrucks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTrucks.fulfilled, (state, action) => {
        state.status = "success";
        state.items = [...state.items, ...action.payload];
        state.currentPage += 1;
        state.hasMore = action.payload.length === 4;
      })
      .addCase(fetchTrucks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchTruckDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTruckDetails.fulfilled, (state, action) => {
        state.status = "success";
        state.currentTruck = action.payload;
      })
      .addCase(fetchTruckDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default trucksSlice.reducer;
