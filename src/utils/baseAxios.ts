/* eslint-disable no-undef */
import axios from "axios";
// export const baseUrl = process.env.REACT_APP_BACKEND_API_URL
export const baseUrl = 'https://apiiec.ttrudenty.com/api';

axios.defaults.withCredentials = true
export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: baseUrl,
});


// axiosInstance.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     if (error.response.status === 401 || error.response.status === 403) {
//       localStorage.clear();
//       window.dispatchEvent(new Event("storage"));
//       // window.location = "/"
//     } else {
//       return Promise.reject(error);
//     }
//   }
// );
