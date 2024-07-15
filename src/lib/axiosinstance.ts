import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://sp-globalnomad-api.vercel.app/5-2",
});

// 요청 인터셉터 설정
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config; // 변경된 config 반환
  },
  (error) => Promise.reject(error),
);

// 새로운 토큰 가져오기
const getNewTokens = async () => {
  const storedRefreshToken = localStorage.getItem("refreshToken");
  if (!storedRefreshToken) {
    throw new Error("No refresh token available");
  }

  // 새로운 토큰 요청하기
  const response = await axios.post(
    "https://sp-globalnomad-api.vercel.app/5-2/auth/tokens",
    null,
    {
      headers: {
        Authorization: `Bearer ${storedRefreshToken}`,
      },
    },
  );

  const { accessToken, refreshToken: newRefreshToken } = response.data;

  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", newRefreshToken);

  return accessToken;
};

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest.retry) {
      originalRequest.retry = true;
      try {
        const newAccessToken = await getNewTokens();
        axiosInstance.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return await axiosInstance(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
