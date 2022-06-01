import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import activityApi from "./activityApi";
// import defaultSlice from "./defaultSlice";

const store = configureStore({
  // Add the generated reducer as a specific top-level slice
  reducer: combineReducers({
    // [defaultSlice.name]: defaultSlice.reducer,
    [activityApi.reducerPath]: activityApi.reducer,
  }),
  // Adding the api middleware enables caching, invalidation, polling, and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(activityApi.middleware),
});

setupListeners(store.dispatch);

export default store;
