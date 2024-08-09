import axiosInstance from '@/lib/axiosinstance';
import { QueryFunctionContext } from '@tanstack/react-query';

const getBookingSchedule = async ({ queryKey }: QueryFunctionContext): Promise<any> => {
  const [, activityId, selectedDate] = queryKey;
  try {
    const response = await axiosInstance.get(
      `/my-activities/${activityId}/reserved-schedule?date=${selectedDate}`,
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching My activity data:', error);
    throw error;
  }
};

export default getBookingSchedule;