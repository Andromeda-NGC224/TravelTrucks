import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import trucksReducer from "./trucksSlice.js";
import { filterReducer } from "./filter/filterSlice.js";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["trucks"],
};

const persistedTrucksReducer = persistReducer(persistConfig, trucksReducer);

export const store = configureStore({
  reducer: {
    trucks: persistedTrucksReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
