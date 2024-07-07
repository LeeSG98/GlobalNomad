import React from "react";

const Input = () => {
  return (
    <div className="flex pt-[8px] pr-[16px] pb-[8px] pl-[16px] items-center self-stretch rounded-[4px] border-gray-79 bg-white">
      <input
        className="w-[100%]"
        placeholder="제목"
      />
    </div>
  );
};

export default Input;
