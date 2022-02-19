import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksAPI = createApi({
  reducerPath: "booksAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => "fee-assessment-categories",
    }),
    getAllBooks: builder.query({
      query: ({ categoryId, page, size }) => `fee-assessment-books?categoryId=${categoryId}&page=${page}&size=${size}`,
    }),
  }),
});

export const { useGetAllCategoriesQuery, useGetAllBooksQuery } = booksAPI;
