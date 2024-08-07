import React, { useEffect } from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { Schedule } from "@/types/modifyActivity";
import queryKeys from "@/api/reactQuery/queryKeys";
import useMergeModifyData from "@/hooks/useMergeModifyData";
import ReservationDate from "./reservation/ReservationDate";
import ReservationStartTime from "./reservation/ReservationStartTime";
import ReservationEndTime from "./reservation/ReservationEndTime";
import ReservationForm from "./reservation/ReservationForm";
import PlusButton from "/public/plus-icon.png";

interface ModifyReservationTimeProps {
  schedules: Schedule[];
}

const Reserve = ({ schedules }: ModifyReservationTimeProps) => {
  const { mergeSchedule, mergeAddSchedule, mergeModifySchedule, initialTimes } = useMergeModifyData();
  
  useEffect(() => {
    mergeSchedule(schedules);
  }, []);

  const { data: scheduleData } = useQuery<{ schedules: Schedule[] }>({
    queryKey: queryKeys.modifySchedule(),
  });
  const times = scheduleData ? scheduleData.schedules : [];

  const { data: reservationDate } = useQuery({ queryKey: queryKeys.modifyScheduleDate() });
  const { data: reservationStartTime } = useQuery({
    queryKey: queryKeys.modifyScheduleStartTime(),
  });
  const { data: reservationEndTime } = useQuery({
    queryKey: queryKeys.modifyScheduleEndTime(),
  });

  const handleAssignTime = () => {
    if (reservationDate && reservationStartTime && reservationEndTime) {
      const newReservationTime: Schedule = {
        date: reservationDate as string,
        startTime: reservationStartTime as string,
        endTime: reservationEndTime as string,
      };
      const isDuplicate = times.some(
        (t: Schedule) =>
          t.date === newReservationTime.date &&
          t.startTime === newReservationTime.startTime &&
          t.endTime === newReservationTime.endTime,
      );
      if (isDuplicate) {
        console.error('동일한 날짜 및 시간대는 중복될 수 없습니다.');
        initialTimes();
        return;
      }
      mergeAddSchedule(newReservationTime);
      mergeModifySchedule(newReservationTime);
      initialTimes();
    } else {
      console.error('날짜와 시간대는 필수 입력 사항입니다.');
    }
  };

  return (
    <div className="flex w-[100%] flex-col items-start gap-6">
      <span className="mt-6 text-black text-2xl font-bold">
        예약 가능한 시간대
      </span>
      <div className=" flex w-[100%] flex-col items-start gap-[21px]">
        <div className="flex w-[100%] items-start gap-5">
          <ReservationDate />

          <div className="flex h-[70px] w-[100%] items-center gap-3">
            <ReservationStartTime />

            <span className="mt-16">~</span>

            <ReservationEndTime />
          </div>

          <Image
            className="mt-9 h-[56px] cursor-pointer"
            src={PlusButton}
            alt="plusTimeBtn"
            onClick={handleAssignTime}
          />
        </div>
        {scheduleData && scheduleData.schedules && scheduleData.schedules.length > 0 && (
          <ReservationForm />
        )}
      </div>
    </div>
  );
};

export default Reserve;