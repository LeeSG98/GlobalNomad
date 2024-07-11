import React from "react";
import Image from "next/image";
import Calendar from "/public/calendar.png";
import ArrowDown from "/public/arrowdown.png";
import Plus from "/public/plus-icon.png";
import Line from "/public/line.png";

const Reserve = () => {
  return (
    <>
      <div className="flex mt-[24px]">
        <span className="text-[24px] font-bold">예약 가능한 시간대</span>
      </div>
      <div className="flex flex-row gap-[20px]">
        <div className="flex flex-col mt-[24px] text-[20px] text-[#4B4B4B]">
          날짜
          <input className="w-[379px] h-[56px] mt-[10px] py-[8px] pl-[16px] border-[1px] border-[#79747E] rounded text-[16px] relative" type="text" placeholder="YY/MM/DD" />
        </div>
        <div className="flex flex-col mt-[24px] text-[20px] text-[#4B4B4B]"> 시작 시간
          <div className="flex w-[140px] h-[56px] mt-[10px] py-[8px] pl-[16px] justify-between items-center border-[1px] border-[#79747E] rounded text-[16px] text-[#A4A1AA]">
            0:00
            <button>
              <Image src={ArrowDown} alt="화살표" className="w-[24px] h-[24px] m-[12px]" />
            </button>
          </div>
        </div>
        <span className="flex text-[20px] text-[#1B1B1B] mt-[79px] mx-[-10px]">~</span>
        <div className="flex flex-col mt-[24px] text-[20px] text-[#4B4B4B]"> 종료 시간
          <div className="flex w-[140px] h-[56px] mt-[10px] py-[8px] pl-[16px] justify-between items-center border-[1px] border-[#79747E] rounded text-[16px] text-[#A4A1AA]">
            0:00
            <button>
              <Image src={ArrowDown} alt="화살표" className="w-[24px] h-[24px] m-[12px]" />
            </button>
          </div>
        </div>
        <button>
          <Image src={Plus} alt="추가" className="mt-[60px] w-[56px] h-[56px]" />
        </button>
      </div>
      <Image src={Line} alt="줄" className="flex mt-[21px]"/>
    </>
  );
};

export default Reserve;