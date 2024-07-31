import axiosInstance from "@/lib/axiosinstance";
import { ActivityResponse } from "@/types/mainPage";

const DEFAULT_ACTIVITY_RESOPONSE: ActivityResponse = {
  activities: [],
  totalCount: 0,
};

const urlSearchParams = new URLSearchParams({
  method: "offset",
  sort: "most_reviewed",
  page: String(1),
  size: String(10),
});

async function getPopularActivity() {
  try {
    const res = await axiosInstance.get<ActivityResponse>(
      `/activities?${urlSearchParams}`,
    );
    return res.data;
  } catch (e) {
    console.error("Error: ", e);
    return DEFAULT_ACTIVITY_RESOPONSE;
  }
}

export default getPopularActivity;
