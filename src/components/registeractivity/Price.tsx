import React from "react";

const Price = () => {
  return (
    <div className="flex flex-col mt-[1.5rem]">
      <div className="text-[24px] font-bold">가격</div>
      <input className="w-[49.5rem] h-[3.5rem] mt-[1rem] py-[0.938rem] pl-[1rem] border-[1px] border-gray_79 rounded" type="text" placeholder="가격" />
    </div>
  );
};

export default Price;