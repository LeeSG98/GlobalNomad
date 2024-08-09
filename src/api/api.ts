import axios from "axios";
import axiosInstance from "@/lib/axiosinstance";
import { GetActivitiesParams, GetActivitiesResponse } from "@/types/mainPage";

const API_BASE_URL = "https://sp-globalnomad-api.vercel.app/5-2";

export enum ReservationStatus {
  PROPOSAL = "PROPOSAL", // 신청
  APPROVAL = "APPROVAL", // 승인
  REFUSE = "REFUSE", // 거절
}

interface ReservationData {
  date: string;
  status: ReservationStatus;
  count: number;
}

interface Experience {
  id: number;
  name: string;
}

interface ReservationDetail {
  id: number;
  date: string;
  status: ReservationStatus;
  nickname: string;
  people: number;
  time: string;
}

// 체험 리스트 조회
export const fetchActivities = async () => {
  const response = await axiosInstance.get(`/activities`);
  return response.data;
};

// 체험 예약 신청
export const createReservation = async (
  activityId: number,
  reservationData: ReservationData,
) => {
  const response = await axiosInstance.post(
    `/activities/${activityId}/reservations`,
    reservationData,
  );
  return response.data;
};

// 내 체험 리스트 조회
export const fetchMyActivities = async () => {
  const response = await axiosInstance.get(`/my-activities`);
  return response.data;
};

// 내 체험 월별 예약 현황 조회
export const fetchReservationsByMonth = async (
  activityId: number,
  month: number,
) => {
  const response = await axiosInstance.get(
    `/my-activities/${activityId}/reservation-dashboard?month=${month}`,
  );
  return response.data;
};

// 내 체험 날짜별 예약 정보 조회
export const fetchReservedSchedule = async (
  activityId: number,
  date: string,
) => {
  const response = await axiosInstance.get(
    `/my-activities/${activityId}/reserved-schedule?date=${date}`,
  );
  return response.data;
};

// 내 체험 예약 상태 업데이트
export const updateReservationStatus = async (
  activityId: number,
  reservationId: number,
  status: ReservationStatus,
) => {
  const response = await axiosInstance.patch(
    `/my-activities/${activityId}/reservations/${reservationId}`,
    { status },
  );
  return response.data;
};

// 내 예약 리스트 조회
export const fetchReservation = async () => {
  const response = await axiosInstance.get(`${API_BASE_URL}/my-reservations`);
  return response.data;
};

// 내 예약 수정(취소)
export const deleteReservation = async (reservationId: number) => {
  const response = await axiosInstance.patch(
    `${API_BASE_URL}/my-reservations/${reservationId}`,
    { status: "canceled" },
  );
  return response.data;
};

// 내 예약 리뷰 작성
export const createReservationReview = async (
  reservationId: number,
  rating: number,
  content: string,
) => {
  const response = await axiosInstance.post(
    `${API_BASE_URL}/my-reservations/${reservationId}/reviews`,
    { rating, content },
  );
  return response.data;
};

export const getActivities = async (
  params: GetActivitiesParams,
): Promise<GetActivitiesResponse> => {
  const { category, ...otherParams } = params;
  const requestParams = category ? { ...otherParams, category } : otherParams;

  const response = await axiosInstance.get("/activities", {
    params: requestParams,
  });
  return response.data;
};
