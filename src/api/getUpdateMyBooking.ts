import axiosInstance from "@/lib/axiosinstance";

interface GetUpdateMybookingParams {
  activityId: number;
  bookingId: number;
  status: 'confirmed' | 'declined';
}

const getUpdateMybooking = async ({
  activityId,
  bookingId,
  status,
}: GetUpdateMybookingParams): Promise<any> => {
  const response = await axiosInstance.patch(
    `/my-activities/${activityId}/Bookings/${bookingId}`,
    {
      status,
    },
  );

  return response.data;
};
export default getUpdateMybooking;
