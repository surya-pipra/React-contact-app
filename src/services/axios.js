import axios from "axios";
import store from '../redux/store';
import homeAction from "../redux/actions/home";
const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/api",
    headers: {
    "Content-Type": "application/json"
  },
  timeout: 30000
});

axiosInstance.interceptors.response.use(
  (response) => {
    if (response?.status > 200) {
      let tempMsg = response?.message;
      if (tempMsg && typeof tempMsg == "object") {
        tempMsg = tempMsg.message || "Unknown API error"
      }
     // store.dispatch(authAction.apiError({ message: tempMsg }));
    } 
    // else if(response?.status === 422){
    //   return response?.error?.details?.message?.email
    // }
    else {
      return response.data;
    }
  },
  (error) => {
    if (error) {
      if (error.message.includes("timeout of")) {
        // store.dispatch(authAction.apiError({
        //   message: "Sorry! It took longer than expected. Please try again."
        // }));
      }
      else if (error.message.includes("Network Error")) {
        // store.dispatch(authAction.apiError({
        //   message: "Network error. Please check your connection and retry."
        // }));
      }
      else {
        store.dispatch(homeAction.apiError(error));
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
