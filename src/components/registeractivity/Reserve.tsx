import React, { useState } from "react";
import Image from "next/image";
import Calendar from "/public/calendar.png";
import ArrowDown from "/public/arrowdown.png";
import ArrowUp from "/public/arrowup.png";
import Plus from "/public/plus-icon.png";
import Line from "/public/line.png";

const Reserve = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onToggle = () => setIsOpen(!isOpen);

  const [isCloseOpen, setIsCloseOpen] = useState<boolean>(false);
  const onCloseToggle = () => setIsCloseOpen(!isCloseOpen);

  return (
    <>
      <div className="flex mt-[1.5rem]">
        <span className="text-[1.5rem] font-bold">예약 가능한 시간대</span>
      </div>
      <div className="flex flex-row gap-[1.25rem]">
        <div className="flex flex-col mt-[1.5rem] text-[1.25rem] text-gray_4B">
          날짜
          <input className="w-[23.688rem] h-[3.5rem] mt-[0.625rem] py-[0.5rem] pl-[1rem] border-[1px] border-gray_79 rounded text-[1rem] relative" type="text" placeholder="YY/MM/DD" />
        </div>
        <div className="flex flex-col mt-[1.5rem] text-[20px] text-gray_4B"> 시작 시간
          <div className="flex relative w-[8.75rem] h-[3.5rem] mt-[0.625rem] py-[0.5rem] pl-[1rem] justify-between items-center border-[1px] border-gray_79 rounded text-[1rem] text-gray_A4 bg-white">
            0:00
            <button onClick={onToggle}>
              <Image src={isOpen ? ArrowDown : ArrowUp} alt="화살표" className="w-[1.25rem] h-[1.25rem] m-[0.75rem]" />
            </button>
          </div>
        </div>
        <div>
          {isOpen && (
            <>
              <div className="absolute left-[72.3rem] -bottom-[27.188rem] w-[8.75rem] h-[14.5rem] p-[0.5rem] mt-[0.5rem] bg-white rounded shadow overflow-y-scroll">
                <button className="w-[6rem] h-[2.5rem] text-[#1B1B1B] text-center hover:bg-[#112211] hover:text-white hover:rounded-[6px]">
                  9:00
                </button>
                <button className="w-[6rem] h-[2.5rem] pt-[2px] text-[#1B1B1B] text-center hover:bg-[#112211] hover:text-white hover:rounded-[6px]">
                  10:00
                </button>
                <button className="w-[6rem] h-[2.5rem] pt-[2px] text-[#1B1B1B] text-center hover:bg-[#112211] hover:text-white hover:rounded-[6px]">
                  11:00
                </button>
                <button className="w-[6rem] h-[2.5rem] pt-[2px] text-[#1B1B1B] text-center hover:bg-[#112211] hover:text-white hover:rounded-[6px]">
                  12:00
                </button>
                <button className="w-[6rem] h-[2.5rem] pt-[2px] text-[#1B1B1B] text-center hover:bg-[#112211] hover:text-white hover:rounded-[6px]">
                  13:00
                </button>
                <button className="w-[6rem] h-[2.5rem] pt-[2px] text-[#1B1B1B] text-center hover:bg-[#112211] hover:text-white hover:rounded-[6px]">
                  14:00
                </button>
                <button className="w-[6rem] h-[2.5rem] pt-[2px] text-[#1B1B1B] text-center hover:bg-[#112211] hover:text-white hover:rounded-[6px]">
                  15:00
                </button>
                <button className="w-[6rem] h-[2.5rem] pt-[2px] text-[#1B1B1B] text-center hover:bg-[#112211] hover:text-white hover:rounded-[6px]">
                  16:00
                </button>
                <button className="w-[6rem] h-[2.5rem] pt-[2px] text-[#1B1B1B] text-center hover:bg-[#112211] hover:text-white hover:rounded-[6px]">
                  17:00
                </button>
                <button className="w-[6rem] h-[2.5rem] pt-[2px] text-[#1B1B1B] text-center hover:bg-[#112211] hover:text-white hover:rounded-[6px]">
                  18:00
                </button>
              </div>
            </>
          )}
        </div>
        <span className="flex text-[1.25rem] text-black mt-[4.8rem] -ml-[25px] -mr-[5px]">~</span>
        <div className="flex flex-col mt-[1.5rem] text-[1.25rem] text-gray_4B"> 종료 시간
          <div className="flex w-[8.75rem] h-[3.5rem] mt-[0.625rem] py-[0.5rem] pl-[1rem] justify-between items-center border-[1px] border-gray_79 rounded text-[1rem] text-gray_A4 bg-white">
            0:00
            <button onClick={onCloseToggle}>
              <Image src={isCloseOpen ? ArrowDown : ArrowUp} alt="화살표" className="w-[1.5rem] h-[1.5rem] m-[0.75rem]" />
            </button>
          </div>
        </div>
        <div>
          {isCloseOpen && (
            <>
              <div className="absolute left-[83.563rem] -bottom-[27.188rem] w-[8.75rem] h-[14.5rem] p-[0.5rem] mt-[0.5rem] bg-white rounded shadow overflow-y-scroll">
                <button className="w-[6rem] h-[2.5rem] text-[#1B1B1B] text-center hover:bg-[#112211] hover:text-white hover:rounded-[6px]">
                  9:00
                </button>
                <button className="w-[6rem] h-[2.5rem] pt-[2px] text-[#1B1B1B] text-center hover:bg-[#112211] hover:text-white hover:rounded-[6px]">
                  10:00
                </button>
                <button className="w-[6rem] h-[2.5rem] pt-[2px] text-[#1B1B1B] text-center hover:bg-[#112211] hover:text-white hover:rounded-[6px]">
                  11:00
                </button>
                <button className="w-[6rem] h-[2.5rem] pt-[2px] text-[#1B1B1B] text-center hover:bg-[#112211] hover:text-white hover:rounded-[6px]">
                  12:00
                </button>
                <button className="w-[6rem] h-[2.5rem] pt-[2px] text-[#1B1B1B] text-center hover:bg-[#112211] hover:text-white hover:rounded-[6px]">
                  13:00
                </button>
                <button className="w-[6rem] h-[2.5rem] pt-[2px] text-[#1B1B1B] text-center hover:bg-[#112211] hover:text-white hover:rounded-[6px]">
                  14:00
                </button>
                <button className="w-[6rem] h-[2.5rem] pt-[2px] text-[#1B1B1B] text-center hover:bg-[#112211] hover:text-white hover:rounded-[6px]">
                  15:00
                </button>
                <button className="w-[6rem] h-[2.5rem] pt-[2px] text-[#1B1B1B] text-center hover:bg-[#112211] hover:text-white hover:rounded-[6px]">
                  16:00
                </button>
                <button className="w-[6rem] h-[2.5rem] pt-[2px] text-[#1B1B1B] text-center hover:bg-[#112211] hover:text-white hover:rounded-[6px]">
                  17:00
                </button>
                <button className="w-[6rem] h-[2.5rem] pt-[2px] text-[#1B1B1B] text-center hover:bg-[#112211] hover:text-white hover:rounded-[6px]">
                  18:00
                </button>
              </div>
            </>
          )}
        </div>
        <button>
          <Image src={Plus} alt="추가" className="mt-[3.938rem] w-[3.5rem] h-[3.5rem] -ml-[20px]" />
        </button>
      </div>
      <Image src={Line} alt="줄" className="flex mt-[1.313rem]"/>
    </>
  );
};

export default Reserve;