import { configureStore } from "@reduxjs/toolkit";
import { booksAPI } from "./features/booksAPI";
import bookmarkReducer from "./features/bookmarkSlice";

const store = configureStore({
  reducer: {
    [booksAPI.reducerPath]: booksAPI.reducer,
    bookmark: bookmarkReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(booksAPI.middleware),
});

export default store;
