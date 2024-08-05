import React from 'react';
import Image from "next/image";
import { useQuery } from '@tanstack/react-query';
import queryKeys from '@/api/reactQuery/queryKeys';
import useMergeRegisterData from '@/hooks/useMergeRegisterData';
import { RegisterData, Schedule } from '@/types/registerActivity';
import MinusButton from "/public/minus-icon.png";

const ReservationForm = () => {
  const { resetSchedule } = useMergeRegisterData();

  const data = useQuery({ queryKey: queryKeys.registerData() }).data as RegisterData;
  const time: Schedule[] = data ? data.schedules : [];

  const handleRemoveReservationTime = (index: number): void => {
    const updatedTimes = time.filter((_, i) => i !== index);
    resetSchedule(updatedTimes);
  };

  return (
    <div className="flex w-[100%] flex-col items-start gap-[21px]">
      <div className="border-t-2 border-gray-30 w-full" />

      {time.map((reservation, index) => (
        <div
          key={reservation.date + reservation.startTime + reservation.endTime}
          className="flex w-[100%] items-center gap-5"
        >
          {/* 날짜 */}
          <div className="flex w-[100%] flex-col">
            <div className=" flex w-[100%] h-14 pt-2 pr-4 pb-2 pl-4 items-center self-stretch rounded-[4px] border border-gray_79 bg-white">
              <input
                className="w-[100%] outline-none"
                value={reservation.date}
                readOnly
              />
            </div>
          </div>
          {/* 날짜 */}

          <div className=" flex h-[70px] w-[100%] items-center gap-3">
            {/* 시작 시간 */}
            <div className="flex w-[100%] flex-col ">
              <div className=" flex h-14 w-[100%] pt-2 pr-4 pb-2 pl-4 items-center self-stretch rounded-[4px] border border-gray_79 bg-white">
                <input
                  className="w-[100%] outline-none"
                  value={reservation.startTime}
                  readOnly
                />
              </div>
            </div>
            {/* 시작 시간 */}

            <span>~</span>
            {/* 종료 시간 */}
            <div className="flex w-[100%] flex-col ">
              <div className="flex h-14 w-[100%] pt-2 pr-4 pb-2 pl-4 items-center self-stretch rounded-[4px] border border-gray_79 bg-white">
                <input
                  className="w-[100%] outline-none"
                  value={reservation.endTime}
                  readOnly
                />
              </div>
            </div>
            {/* 종료 시간 */}
          </div>

          <Image
            className="h-[56px] cursor-pointer"
            src={MinusButton}
            alt="minusTimeBtn"
            onClick={() => handleRemoveReservationTime(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default ReservationForm;