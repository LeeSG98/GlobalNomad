import { Dispatch, SetStateAction } from 'react';

export interface Activity {
  id: number;
  userId: number;
  title: string;
  description: string;
  category: string;
  price: number;
  address: string;
  bannerImageUrl: string;
  rating: number;
  reviewCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface ActivityDropDownProps {
  setViewActivityDropDown: Dispatch<SetStateAction<boolean>>;
  setSelectedActivity: Dispatch<SetStateAction<Activity | null>>;
  viewActivityDropDown: boolean;
}

export interface BookingData {
  date: string;
  Booking: {
    completed: number;
    confirmed: number;
    pending: number;
  };
}

export interface ScheduleType {
  scheduleId: number;
  startTime: string;
  endTime: string;
  count: {
    declined: number;
    confirmed: number;
    pending: number;
  };
}

export interface ScheduleTimeDropDownProps {
  schedule: ScheduleType[];
  setSelectedSchedule: React.Dispatch<React.SetStateAction<ScheduleType | null>>;
  viewScheduleTimeDropDown: boolean;
  setVieScheduleTimeDropDown: Dispatch<SetStateAction<boolean>>;
}

interface Booking {
  id: number;
  status: string;
  totalPrice: number;
  headCount: number;
  nickname: string;
  userId: number;
  date: string;
  startTime: string;
  endTime: string;
  createdAt: string;
  updatedAt: string;
  activityId: number;
  scheduleId: number;
  reviewSubmitted: boolean;
  teamId: string;
}

export interface BookingResponse {
  Booking: Booking[];
  totalCount: number;
  cursorId: number | null;
}

export interface Schedule {
  scheduleId: number;
  startTime: string;
  endTime: string;
  count: {
    declined: number;
    confirmed: number;
    pending: number;
  };
}

export interface BookingModalProps {
  setViewBookingModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedDate: { year: string; month: string; day: string | null };
  activitiyId: number;
  viewBookingModal: boolean;
}

export interface BookingScheduleProps {
  BookingStatus: string;
  nickname: string;
  headCount: number;
  activityId: number;
  BookingId: number;
  setSelectedSchedule: React.Dispatch<React.SetStateAction<ScheduleType | null>>;
  fetchNextPage: () => void;
  inView: boolean;
}
