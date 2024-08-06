import React, { useRef, useState } from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import queryKeys from "@/api/reactQuery/queryKeys";
import useMergeModifyData from "@/hooks/useMergeModifyData";
import EndTimeDropDown from "../dropDown/EndTimeDropDown";
import ArrowDown from "/public/arrowdown.png";
import ArrowUp from "/public/arrowup.png";

const ReservationEndTime = () => {
  const { mergeEndTime } = useMergeModifyData();
  const [isEndTimeDropDown, setIsEndTimeDropDown] = useState<boolean>(false);
  const dropDownRef = useRef<HTMLDivElement>(null);
  const { data: endTime = "" } = useQuery<string>({
    queryKey: queryKeys.registerEndTime(),
  });

  const handleEndTimeDropDown = () => {
    setIsEndTimeDropDown(!isEndTimeDropDown);
  };

  const handleSelectEnd = (time: string) => {
    mergeEndTime(time);
    setIsEndTimeDropDown(!isEndTimeDropDown);
  };

  return (
    <div className="w-[100%] relative mt-[25px]" ref={dropDownRef}>
      <div className="flex w-[100%] flex-col ">
        <label className="text-[20px] mb-[10px]">종료 시간</label>
        <div
          className="flex h-14 w-[100%] pt-2 pr-4 pb-2 pl-4 items-center self-stretch rounded-[4px] border border-gray_79 bg-white cursor-pointer"
          onClick={handleEndTimeDropDown}
        >
          <input
            className="w-[100%] outline-none cursor-pointer"
            placeholder="0:00"
            value={endTime}
            readOnly
          />
          <button type="button">
            <Image
              src={isEndTimeDropDown ? ArrowUp : ArrowDown}
              alt="arrowIcon"
            />
          </button>
        </div>
      </div>
      {isEndTimeDropDown && <EndTimeDropDown onSelect={handleSelectEnd} />}
    </div>
  );
};

export default ReservationEndTime;