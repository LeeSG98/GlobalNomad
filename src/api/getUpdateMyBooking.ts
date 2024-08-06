import axiosInstance from "@/lib/axiosinstance";

interface GetUpdateMyBookingParams {
  activityId: number;
  bookingId: number;
  status: "confirmed" | "declined";
}

const getUpdateMyBooking = async ({
  activityId,
  bookingId,
  status,
}: GetUpdateMyBookingParams): Promise<any> => {
  const response = await axiosInstance.patch(
    `/my-activities/${activityId}/Bookings/${bookingId}`,
    {
      status,
    },
  );

  return response.data;
};

export default getUpdateMyBooking;
