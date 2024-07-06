import React from "react";

const Title = () => {
  return (
    <div className="w-[100%] flex justify-between pr-[8px]">
      <span className="font-bold text-[32px]">
        내 체험 등록
      </span>
      <button type="submit" className="flex w-[120px] h-[48px] px-[16px] py-[8px] content-center items-center self-stretch text-white font-bold bg-nomad_black">
        등록하기
      </button>
    </div>
  );
};

export default Title;