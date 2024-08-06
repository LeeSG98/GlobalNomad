import axiosInstance from "@/lib/axiosinstance";
import { id } from "date-fns/locale";
import { ActivityResponse } from "./models/activity";

// fetcher 함수 관리
export async function getActivity(id: string) {
    const res = await axiosInstance.get<ActivityResponse>(`/activities/${id}`);
    return res.data;
}