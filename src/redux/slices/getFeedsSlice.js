import { createSlice } from "@reduxjs/toolkit";
import { getFeeds } from "../actions";

const initialState = {
  isLoading: false,
  error: null,
  feeds: [],
};

const getFeedsSlice = createSlice({
  name: "getFeeds",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFeeds.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getFeeds.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });

    builder.addCase(getFeeds.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.feeds = payload;
    });
  },
});

export default getFeedsSlice.reducer;
