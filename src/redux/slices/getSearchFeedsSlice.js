import { createSlice } from "@reduxjs/toolkit";
import { getSearchFeeds } from "../actions";

const initialState = {
  isLoading: false,
  error: null,
  searchFeeds: [],
};

const getSearchFeedsSlice = createSlice({
  name: "getSearchFeeds",
  initialState,
  reducers: {
    clearResults: (state) => {
      state.searchFeeds = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getSearchFeeds.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getSearchFeeds.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });

    builder.addCase(getSearchFeeds.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.searchFeeds = payload;
    });
  },
});

export const { clearResults } = getSearchFeedsSlice.actions;
export default getSearchFeedsSlice.reducer;
