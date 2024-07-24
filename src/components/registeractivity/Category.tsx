import React, { useState } from "react";
import Image from "next/image";
import ArrowDown from "/public/arrowdown.png";
import ArrowUp from "/public/arrowup.png";
import CheckMark from "/public/checkmark.png";

const Category = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string[]>([]);
  
  const onToggle = () => {
    setIsOpen(!isOpen);
  }

  const handleSelect = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsOpen(false);
  }

  return (
    <>
      <div className="flex mt-[1.5rem] w-[49.5rem] h-[3.5rem] py-[0.938rem] pl-[1rem] justify-between items-center border-[1px] border-gray_79 rounded text-[1rem] text-gray_A4 bg-white">
        {selectedValue ? selectedValue : "카테고리"}
        <button onClick={onToggle}>
          <Image src={isOpen ? ArrowDown : ArrowUp} alt="화살표" className="w-[1.5rem] h-[1.5rem] m-[0.75rem]" />
        </button>
      </div>
      <div>
        {isOpen && (
          <>
            <div className="w-[49.5rem] h-[13.5rem] p-[0.5rem] mt-[0.5rem] bg-white rounded shadow">
              <button className="relative w-[48.5rem] h-[2.5rem] text-[#1B1B1B] text-left pl-[2.25rem] hover:bg-[#112211] hover:text-white hover:rounded-[6px]">
                <Image src={CheckMark} alt="체크" className="absolute left-[0.5rem] top-[0.625rem] w-[1.25rem]" />
                문화 예술
              </button>
              <button className="relative w-[48.5rem] h-[2.5rem] text-[#1B1B1B] text-left pl-[2.25rem] hover:bg-[#112211] hover:text-white hover:rounded-[6px]">
                <Image src={CheckMark} alt="체크" className="absolute left-[0.5rem] top-[0.625rem] w-[1.25rem]" />
                식음료
              </button>
              <button className="relative w-[48.5rem] h-[2.5rem] text-[#1B1B1B] text-left pl-[2.25rem] hover:bg-[#112211] hover:text-white hover:rounded-[6px]">
                <Image src={CheckMark} alt="체크" className="absolute left-[0.5rem] top-[0.625rem] w-[1.25rem]" />
                스포츠
              </button>
              <button className="relative w-[48.5rem] h-[2.5rem] text-[#1B1B1B] text-left pl-[2.25rem] hover:bg-[#112211] hover:text-white hover:rounded-[6px]">
                <Image src={CheckMark} alt="체크" className="absolute left-[0.5rem] top-[0.625rem] w-[1.25rem]" />
                투어
              </button>
              <button className="relative w-[48.5rem] h-[2.5rem] text-[#1B1B1B] text-left pl-[2.25rem] hover:bg-[#112211] hover:text-white hover:rounded-[6px]">
                <Image src={CheckMark} alt="체크" className="absolute left-[0.5rem] top-[0.625rem] w-[1.25rem]" />
                관광
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Category;
