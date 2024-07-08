import React from "react";
import Image from "next/image";
import ArrowDown from "/public/arrowdown.png";

const Category = () => {
  return (
    <>
      <div className="flex mt-[24px] w-[792px] h-[56px] py-[15px] pl-[16px] justify-between items-center border-[1px] border-[#79747E] rounded text-[16px] text-[#A4A1AA]">
        카테고리
        <button>
          <Image src={ArrowDown} alt="화살표" className="w-[24px] h-[24px] m-[12px]" />
        </button>
      </div>
    </>
  );
};

export default Category;
