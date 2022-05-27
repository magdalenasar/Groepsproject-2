import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "defaultApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
  }),
  endpoints: builder => ({
    getDefault: builder.query({
      query: () => ({ url: `` }),
    }),
    getDefault2: builder.query({
      query: () => ({ url: `` }),
    }),
  }),
});

export default api;
