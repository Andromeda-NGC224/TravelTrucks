import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTrucks = createAsyncThunk(
  "trucks/fetchTrucks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers"
      );
      return response.data.items;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

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
