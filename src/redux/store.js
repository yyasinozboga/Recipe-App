import { configureStore } from "@reduxjs/toolkit";
import getSearchFeedsSlice from "./slices/getSearchFeedsSlice";
import getFeedsSlice from "./slices/getFeedsSlice";
import getRecipeDataByIdSlice from "./slices/getRecipeDataByIdSlice";

const store = configureStore({
  reducer: {
    feeds: getFeedsSlice,
    searchFeeds: getSearchFeedsSlice,
    recipeDataById: getRecipeDataByIdSlice,
  },
});

export default store;
