import { createAsyncThunk } from "@reduxjs/toolkit";
import { app_id, app_key, apiType } from "../../api/apiConstants";
import api from "../../api";
import { cuisinesData } from "../../data";
import { getCategory, getData } from "../../utils/helper";

const cuisineArray = cuisinesData.map((item) => item.type);
const cuisineParams = cuisineArray.reduce((acc, type) => {
  acc.append("cuisineType", type);
  return acc;
}, new URLSearchParams());
const params = { type: apiType, app_id, app_key, q: "chicken" };

export const getFeeds = createAsyncThunk("getFeeds", async (obj) => {
  const { type, nextPage } = obj;
  const { title } = getCategory(type);

  let data;

  if (nextPage) {
    const { data } = await api.get(nextPage);
    return data;
  } else if (!type) {
    data = await getData({ ...params, ...cuisineParams });
  } else if (type && title === "CUISINE") {
    data = await getData({ ...params, cuisineType: type });
  } else if (title === "MEAL TYPE") {
    data = await getData({ ...params, mealType: type });
  } else {
    data = await getData({ ...params, dishType: type });
  }

  return data;
});

export const getSearchFeeds = createAsyncThunk(
  "getSearchFeeds",
  async (obj) => {
    const { q, nextPage } = obj;
    if (nextPage) {
      const { data } = await api.get(nextPage);
      return data;
    } else {
      const { data } = await api.get("", { params: { ...params, q } });
      return data;
    }
  },
);

export const getRecipeDataById = createAsyncThunk(
  "getRecipeDataById",
  async (url) => {
    const { data } = await api.get(url);
    return data;
  },
);
