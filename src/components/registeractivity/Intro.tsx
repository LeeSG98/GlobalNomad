import React from "react";
import Image from "next/image";
import AddImage from "/public/add-image.png";

const Intro = () => {
  return (
    <>
      <div className="mt-[24px] text-[24px] font-bold text-[#1B1B1B]">
        소개 이미지
      </div>
      <button>
        <Image src={AddImage} alt="이미지 추가" className="mt-[24px] w-[180px] h-[180px]"/>
      </button>
      <span className="mt-[24px] text-[18px] text-[#4B4B4B]">*이미지는 최대 4개까지 등록 가능합니다.</span>
    </>
  );
};

export default Intro;