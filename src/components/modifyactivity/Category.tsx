import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import useMergeModifyData from "@/hooks/useMergeModifyData";
import { Category } from "@/types/category";
import CategoryDropDown from "./dropDown/CategoryDropDown";
import ArrowDown from "/public/arrowdown.png";
import ArrowUp from "/public/arrowup.png";

interface ModifyCategoryProps {
  category: string;
}

const RegisterCategory = ({ category }: ModifyCategoryProps) => {
  const { mergeCategory } = useMergeModifyData();
  const [isDropDown, setIsDropDown] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<Category | null>(null);
  const dropDownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mergeCategory(category);
  }, []);

  const handleDropDown = () => {
    setIsDropDown(!isDropDown);
  };

  const handleSelect = (value: Category) => {
    setSelectedValue(value);
    setIsDropDown(false);
  };

  return (
    <div
      className=" w-[100%] relative bg-white"
      ref={dropDownRef}
    >
      <div
        className="flex h-14 pt-2 pr-4 pb-2 pl-4 mt-6 items-center self-stretch rounded-[4px] border border-gray_79"
        onClick={handleDropDown}
      >
        <input
          className="w-[100%] outline-none cursor-pointer"
          value={selectedValue || ""}
          placeholder="카테고리"
          readOnly
        />
        <button type="button">
          <Image
            src={isDropDown ? ArrowUp : ArrowDown}
            alt="arrowDownIcon"
            className="h-6 w-6"
          />
        </button>
      </div>
      {isDropDown && <CategoryDropDown onSelect={handleSelect} />}
    </div>
  );
};

export default RegisterCategory;
