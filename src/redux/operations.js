import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTrucks = createAsyncThunk(
  "trucks/fetchTrucks",
  async (page = 1, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers?page=${page}&limit=4`
      );
      return response.data.items;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return thunkAPI.rejectWithValue("Truck not found");
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchTruckDetails = createAsyncThunk(
  "trucks/fetchTruckDetails",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`
      );
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return thunkAPI.rejectWithValue("Truck not found");
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
