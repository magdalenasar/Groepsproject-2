import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const activityApi = createApi({
  reducerPath: "activityApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://wdev2.be/fs_tijl/groepswerk2/api",
  }),
  endpoints: (builder) => ({
    getActivityByInput: builder.query({
      query: (input) => ({ url: `/activity/${input}` }),
    }),
    getActivityById: builder.query({
      query: (id) => ({ url: `/activity/${id}` }),
    }),
  }),
});

export default activityApi;

export const { useGetActivityByInputQuery, useGetActivityByIdQuery } =
  activityApi;
