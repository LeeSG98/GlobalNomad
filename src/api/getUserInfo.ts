import axiosInstance from "@/lib/axiosinstance";

const getUserInfo = async (): Promise<any> => {
  const response = await axiosInstance.get("/users/me");
  return response.data;
};

export default getUserInfo;
