import React from "react";
import useMergeRegisterData from "@/hooks/useMergeRegisterData";

const ReservationDate = () => {
  const { mergeDate } = useMergeRegisterData();


  const handleDateSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    mergeDate(e.target.value);
  };

  return (
    <div className="w-[100%] relative">
      <div className="flex w-[100%] flex-col">
        <label className="text-[20px] mb-[10px]">날짜</label>
        <div
          className="flex w-[100%] h-14 pt-2 pr-4 pb-2 pl-4 items-center self-stretch rounded-[4px] border border-gray_79 bg-white cursor-pointer"
        >
          <input
            className="w-[100%] outline-none"
            placeholder="YYYY-MM-DD"
            onChange={handleDateSelect}
          />
        </div>
      </div>
    </div>
  );
};

export default ReservationDate;