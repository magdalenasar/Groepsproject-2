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
    postActivity: builder.mutation({
      query: (activity) => ({
        url: `/`,
        method: "POST",
        body: JSON.stringify({
          title,
          type,
          activity,
          duration,
          participants,
        }),
      }),
    }),
    removeActivity: builder.mutation({
      query: (id) => ({
        url: `activity/${id}`,
        method: "DELETE",
      }),
    }),
    updateActivity: builder.mutation({
      query: ({ id, body }) => {
        return {
          url: `activity/${id}`,
          method: "PATCH",
          body,
        };
      },
    }),
  }),
});

export default activityApi;

export const {
  useGetActivityByInputQuery,
  useGetActivityByIdQuery,
  usePostActivityMutation,
  useRemoveActivityMutation,
  useUpdateActivityMutation,
} = activityApi;
