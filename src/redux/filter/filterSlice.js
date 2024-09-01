import { createSlice } from "@reduxjs/toolkit";

const loadFavoritesState = () => {
  try {
    const favoritesState = localStorage.getItem("favorites");
    if (favoritesState === null) {
      return [];
    }
    return JSON.parse(favoritesState);
  } catch (err) {
    return [];
  }
};

const saveFavoritesState = (state) => {
  try {
    const favoritesState = JSON.stringify(state);
    localStorage.setItem("favorites", favoritesState);
  } catch (err) {
    console.error("Error saving favorites state:", err);
  }
};

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    location: "",
    AC: "",
    Automatic: "",
    Kitchen: "",
    TV: "",
    Bathroom: "",
    VehicleType: "",
    favorites: loadFavoritesState(),
  },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    toggleFilter: (state, action) => {
      const filterName = action.payload;
      state[filterName] = !state[filterName];
    },
    setVehicleType: (state, action) => {
      state.VehicleType = action.payload;
    },
    toggleFavorite: (state, action) => {
      const truckId = action.payload;
      if (state.favorites.includes(truckId)) {
        state.favorites = state.favorites.filter((id) => id !== truckId);
      } else {
        state.favorites.push(truckId);
      }
      saveFavoritesState(state.favorites);
    },
  },
});

export const { setLocation, toggleFilter, setVehicleType, toggleFavorite } =
  filterSlice.actions;

export const filterReducer = filterSlice.reducer;
