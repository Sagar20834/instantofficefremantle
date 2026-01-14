import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./Components/Slices/apiSlices";
import authReducer from "./Components/Slices/authSlices";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
