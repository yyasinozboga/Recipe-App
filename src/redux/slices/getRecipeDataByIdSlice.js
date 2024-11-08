import { createSlice } from "@reduxjs/toolkit";
import { getRecipeDataById } from "../actions";

const initialState = {
  isLoading: false,
  error: null,
  recipeDataById: [],
};

const getRecipeDataByIdSlice = createSlice({
  name: "getRecipeDataById",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRecipeDataById.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getRecipeDataById.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });

    builder.addCase(getRecipeDataById.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.recipeDataById = payload;
    });
  },
});

export default getRecipeDataByIdSlice.reducer;
