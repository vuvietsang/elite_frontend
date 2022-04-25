import axios from "axios";

const jwtToken = localStorage.getItem("token") || "";

const axiosClient = axios.create({
  baseURL: "http://localhost:8080/",
});
//Interceptors --muốn làm 1 cái gì cho tất cả req hoặc response
// Add a request interceptor
axiosClient.interceptors.request.use(
  (config) => {
    if (!config.headers?.Authorization) {
      if (jwtToken) {
          if(config.headers){
            config.headers.Authorization = jwtToken;
          }
      }
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
export { axiosClient };
