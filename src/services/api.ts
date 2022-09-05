import axios from "axios";

const api = axios.create({
  baseURL: "https://challenge.leadjet.io",
});

export default api;
