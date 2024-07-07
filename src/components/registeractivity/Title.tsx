import React from "react";

const Title = () => {
  return (
    <div className="w-[800px] flex justify-between pr-[8px]">
      <span className="font-bold text-[32px]">
        내 체험 등록
      </span>
      <button type="submit" className="flex w-[120px] h-[48px] px-[16px] py-[8px] gap-[4px] rounded justify-center items-center text-white font-bold bg-[#112211] text-[16px]">
        등록하기
      </button>
    </div>
  );
};

export default Title;