import { combineReducers, configureStore } from "@reduxjs/toolkit";
import defaultApi from "./defaultApi";
import defaultSlice from "./defaultSlice";

const store = configureStore({
  reducer: combineReducers({
    [defaultSlice.name]: defaultSlice.reducer,
    [defaultApi.reducerPath]: defaultApi.reducer,
  }),
});

export default store;
