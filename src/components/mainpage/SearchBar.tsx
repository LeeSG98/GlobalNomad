import React from "react";

type SearchBarProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCloseClick: () => void;
};

const SearchBar = ({ value, onChange, onCloseClick }: SearchBarProps) => {
  return (
    <div className="relative -top-14 h-[178px] items-center space-x-2 rounded-2xl bg-white px-6 py-8 shadow-md">
      <p className="mb-8 text-xl font-bold">무엇을 체험하고 싶으세요?</p>
      <div className="ml-0 flex flex-row">
        <img
          src="/image/searchbar.svg"
          alt="searchIcon"
          className="absolute left-12 top-[68%] h-6 w-6 -translate-y-1/2 transform"
        />
        <input
          type="text"
          placeholder="내가 원하는 체험은"
          value={value}
          onChange={onChange}
          className="mr-3 flex-grow rounded border border-gray-300 px-12 py-2"
        />
        <button
          onClick={onCloseClick}
          className="rounded bg-black px-10 py-4 text-base font-bold text-white"
        >
          검색하기
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
