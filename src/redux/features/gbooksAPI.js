import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const gbooksAPI = createApi({
  reducerPath: "gbooksAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.googleapis.com/books/v1/" }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: (search) => `volumes?q=${search}&key=AIzaSyB19jw3uzc3oUeKRSSAWEUOYyy1_dmhI5M`,
      transformResponse: (response, meta, arg) => response.items,
    }),
  }),
});

export const { useGetCategoriesQuery } = gbooksAPI;
