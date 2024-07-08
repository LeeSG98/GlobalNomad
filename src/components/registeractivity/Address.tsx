import React from "react";

const Address = () => {
  return (
    <div className="flex flex-col mt-[24px]">
      <div className="text-[24px] font-bold">주소</div>
      <input className="w-[792px] h-[56px] mt-[16px] py-[16px] pl-[16px] border-[1px] border-[#79747E] rounded" type="text" placeholder="주소를 입력해 주세요" />
    </div>
  );
};

export default Address;