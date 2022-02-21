import { configureStore } from "@reduxjs/toolkit";
// import { booksAPI } from "./features/booksAPI";
import bookmarkReducer from "./features/bookmarkSlice";
// import booksReducer from "./features/booksSlice";
import { gbooksAPI } from "./features/gbooksAPI";

const store = configureStore({
  reducer: {
    // [booksAPI.reducerPath]: booksAPI.reducer,
    [gbooksAPI.reducerPath]: gbooksAPI.reducer,
    bookmark: bookmarkReducer,
    // books: booksReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(booksAPI.middleware),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(gbooksAPI.middleware),
});

export default store;
