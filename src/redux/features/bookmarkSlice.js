import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarkItems: localStorage.getItem("bookmarkItems") ? JSON.parse(localStorage.getItem("bookmarkItems")) : [],
  bookmarkTotalQty: 0,
};

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    addBookmarkItem: (state, action) => {
      const itemIndex = state.bookmarkItems.findIndex((item) => item.id === action.payload.id);

      if (itemIndex >= 0) {
        state.bookmarkItems[itemIndex].bookmarkQty = 1;
        alert("You already added this item to your bookmark list");
      } else {
        const tempItem = { ...action.payload, bookmarkQty: 1 };
        state.bookmarkItems.push(tempItem);
      }
      localStorage.setItem("bookmarkItems", JSON.stringify(state.bookmarkItems));
    },
    removeBookmarkItem: (state, action) => {
      const checkBookmarkItem = state.bookmarkItems.filter((item) => item.id !== action.payload.id);
      state.bookmarkItems = checkBookmarkItem;
      localStorage.setItem("bookmarkItems", JSON.stringify(state.bookmarkItems));
    },
    totalBookmarkItems(state) {
      const { qty } = state.bookmarkItems.reduce(
        (bookmarkTotal, bookmarkItem) => {
          const { bookmarkQty } = bookmarkItem;
          bookmarkTotal.qty += bookmarkQty;
          return bookmarkTotal;
        },
        {
          qty: 0,
        }
      );
      state.bookmarkTotalQty = qty;
    },
  },
});

export const { addBookmarkItem, removeBookmarkItem, totalBookmarkItems } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
