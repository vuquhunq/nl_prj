import axios from "axios";
import { access_admin, access_user } from "./authConfig";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    accept: "*",
  },
});
axiosInstance.defaults.headers.common['Authorization'] = access_admin || access_user
