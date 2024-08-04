import axiosInstance from "@/lib/axiosinstance";
import { GetActivitiesResponse } from "@/types/mainPage";

const defaultActivityResponse: GetActivitiesResponse = {
  activities: [],
  totalCount: 0,
};

const getSearchResult = async (
  keyword: string,
  pageNum: number,
  size: number,
): Promise<GetActivitiesResponse> => {
  const urlSearchParams = new URLSearchParams({
    method: "offset",
    keyword,
    page: String(pageNum + 1),
    size: String(size),
  });

  try {
    const res = await axiosInstance.get<GetActivitiesResponse>(
      `/activities?${urlSearchParams}`,
    );
    return res.data;
  } catch (e) {
    console.error("Error: ", e);
    return defaultActivityResponse;
  }
};

export default getSearchResult;
