import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://sp-globalnomad-api.vercel.app/5-2",
});

export default axiosInstance;
