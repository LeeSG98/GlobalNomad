import React from "react";

const Price = () => {
  return (
    <div className="flex flex-col mt-[24px]">
      <div className="text-[24px] font-bold">가격</div>
      <input className="w-[792px] h-[56px] mt-[16px] py-[16px] pl-[16px] border-[1px] border-[#79747E] rounded" type="text" placeholder="가격" />
    </div>
  );
};

export default Price;