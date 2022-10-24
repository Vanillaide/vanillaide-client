import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://192.168.0.17:8000",
  // process.env.REACT_APP_BACK_URL,
});

export default axiosInstance;
