import axiosInstance from "@/lib/axiosinstance";

const getDeleteNotification = async (notificationId: number): Promise<any> => {
  const response = await axiosInstance.delete(
    `/my-notifications/${notificationId}`,
  );
  return response.data;
};

export default getDeleteNotification;
