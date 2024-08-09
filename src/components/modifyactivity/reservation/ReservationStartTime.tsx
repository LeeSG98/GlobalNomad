import React, { useRef, useState } from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import queryKeys from "@/api/reactQuery/queryKeys";
import useMergeModifyData from "@/hooks/useMergeModifyData";
import StartTimeDropDown from "../dropDown/StartTimeDropDown";
import ArrowDown from "/public/arrowdown.png";
import ArrowUp from "/public/arrowup.png";

const ReservationStartTime = () => {
  const { mergeStartTime } = useMergeModifyData();
  const [isStartTimeDropDown, setIsStartTimeDropDown] = useState<boolean>(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

  const { data: startTime = "" } = useQuery<string>({
    queryKey: queryKeys.modifyScheduleStartTime(),
  });

  const handleStartTimeDropDown = () => {
    setIsStartTimeDropDown(!isStartTimeDropDown);
  };

  const handleSelectStart = (time: string) => {
    mergeStartTime(time);
    setIsStartTimeDropDown(!isStartTimeDropDown);
  };

  return (
    <div className="w-[100%] relative mt-[25px]" ref={dropDownRef}>
      <div className="flex w-[100%] flex-col">
        <label className="text-[20px] mb-[10px]">시작 시간</label>
        <div
          className="flex h-14 w-[100%] pt-2 pr-4 pb-2 pl-4 items-center self-stretch rounded-[4px] border border-gray_79 bg-white cursor-pointer"
          onClick={handleStartTimeDropDown}
        >
          <input
            className="w-[100%] outline-none cursor-pointer"
            placeholder="0:00"
            value={startTime}
            readOnly
          />
          <button type="button">
            <Image
              src={isStartTimeDropDown ? ArrowUp : ArrowDown}
              alt="arrowIcon"
            />
          </button>
        </div>
      </div>
      {isStartTimeDropDown && <StartTimeDropDown onSelect={handleSelectStart} />}
    </div>
  );
};

export default ReservationStartTime;