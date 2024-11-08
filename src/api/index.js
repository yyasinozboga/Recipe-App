import axios from "axios";

const api = axios.create({
  baseURL: "https://api.edamam.com/api/recipes/v2",
});

export default api;
