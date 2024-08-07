import axiosInstance from '@/lib/axiosinstance';
import { ActivityType } from '@/types/activitypage';

const getActivity = async (id: string): Promise<ActivityType> => {
  try {
    const response = await axiosInstance.get(`/activities/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching activity data:', error);
    throw error;
  }
};

export default getActivity;