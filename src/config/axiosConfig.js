import axios from "axios";
import { access_token, access_user } from "./authConfig";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "Applicaiton/json",
    accept: "*",
  },
});
axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${access_token}`
axiosInstance.defaults.headers.common["Content-Type"] = "Application/json"