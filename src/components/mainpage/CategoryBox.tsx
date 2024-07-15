import React from "react";

type CategoryBoxProps = {
  category: string;
  onClick: () => void;
};

const CategoryBox = ({ category, onClick }: CategoryBoxProps) => {
  return (
    <div
      className="w-[127px] cursor-pointer rounded-2xl border border-green_0B px-8 py-4 text-center text-green_0B hover:bg-gray-200"
      onClick={onClick}
    >
      {category}
    </div>
  );
};

export default CategoryBox;
