import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://sp-globalnomad-api.vercel.app/5-2",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export default axiosInstance;
