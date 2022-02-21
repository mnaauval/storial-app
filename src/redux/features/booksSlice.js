import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const initialState = {
  books: [],
  status: null,
  error: null,
};

export const booksFetch = createAsyncThunk("books/booksFetch", async () => {
  const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyB19jw3uzc3oUeKRSSAWEUOYyy1_dmhI5M`);
  return response?.data.items;
});

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: {
    [booksFetch.pending]: (state) => {
      state.status = "pending";
    },
    [booksFetch.fulfilled]: (state, action) => {
      state.books = action.payload;
      state.status = "success";
    },
    [booksFetch.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export default booksSlice.reducer;
