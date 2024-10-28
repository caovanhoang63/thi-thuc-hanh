import axios from "axios";
import { BASE_URL } from "./utils/contants.ts";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 7000,
  headers: {
    "Content-type": "application/json"
  }
});
//
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (
//       error.response &&
//       (error.response.status === 401 || error.response.status === 403)
//     ) {
//       window.location.href = "/login";
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
