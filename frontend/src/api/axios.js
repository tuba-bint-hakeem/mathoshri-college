import axios from "axios";

const API = axios.create({
  baseURL: "https://mathoshri-college-eiiz.vercel.app/api",
});

export default API;

