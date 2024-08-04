import axiosInstance from '@/lib/axiosinstance';

interface GetUpdateMyBookingParams {
  activityId: number;
  BookingId: number;
  status: 'confirmed' | 'declined';
}

const getUpdateMyBooking = async ({
  activityId,
  BookingId,
  status,
}: GetUpdateMyBookingParams): Promise<any> => {
  const response = await axiosInstance.patch(
    `/my-activities/${activityId}/Bookings/${BookingId}`,
    {
      status,
    },
  );

  return response.data;
};

export default getUpdateMyBooking;