import { createSlice } from "@reduxjs/toolkit";
import { fetchTrucks } from "./operations.js";

const trucksSlice = createSlice({
  name: "trucks",
  initialState: {
    items: [],
    status: "",
    error: null,
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const truck = state.items.find((truck) => truck.id === action.payload);
      if (truck) {
        truck.isFavorite = !truck.isFavorite;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrucks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTrucks.fulfilled, (state, action) => {
        state.status = "success";
        state.items = action.payload;
      })
      .addCase(fetchTrucks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { toggleFavorite } = trucksSlice.actions;

export default trucksSlice.reducer;
