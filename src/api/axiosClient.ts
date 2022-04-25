import axios from "axios";
// import Cookies from "js-cookie";
// axios.defaults.baseURL = import.meta.env.BE_URL;
import { store } from "../app/store/index";
const API = axios.create({
  baseURL: "http://localhost:8080/",
  // withCredentials: true,
});
API.interceptors.request.use(
  (config) => {
    if (!config.headers?.Authorization) {
      const token = store.getState().auth.token;
      if (token) {
        if(config.headers)
        config.headers.Authorization = `${token}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);
export { API };