import React from "react";
import Image from "next/image";
import AddImage from "/public/add-image.png";

const Banner = () => {
  return (
    <>
      <div className="mt-[24px] text-[24px] font-bold text-[#1B1B1B]">
        배너 이미지
      </div>
      <button>
        <Image src={AddImage} alt="이미지 추가" className="mt-[24px] w-[180px] h-[180px]"/>
      </button>
    </>
  );
};

export default Banner;