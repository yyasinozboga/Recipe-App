import { cuisinesData, mealTypeData, dishTypeData } from "../data";
import api from "../api";

export const editName = (name) => {
  const editedName = name[0].toUpperCase() + name.slice(1);
  return editedName;
};

export const getCategory = (type) => {
  let category;
  let title;
  if (cuisinesData.find((item) => item.type === type)) {
    category = cuisinesData;
    title = "CUISINE";
  } else if (mealTypeData.find((item) => item.type === type)) {
    category = mealTypeData;
    title = "MEAL TYPE";
  } else {
    category = dishTypeData;
    title = "DISH TYPE";
  }

  return { category, title };
};

export const getType = (type) => {
  let category;
  if (type === "meals") {
    category = mealTypeData;
  } else if (type === "dishTypes") {
    category = dishTypeData;
  } else {
    category = cuisinesData;
  }

  return category;
};

export const getData = async (data) => {
  const res = await api.get("", { params: data });
  return res.data;
};
