// import React from "react";

// type SearchBarProps = {
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   onCloseClick: () => void;
// };

// const SearchBar = ({ value, onChange, onCloseClick }: SearchBarProps) => {
//   return (
//     <div className="relative -top-14 h-[178px] items-center space-x-2 rounded-2xl bg-white px-6 py-8 shadow-md">
//       <p className="mb-8 text-xl font-bold">무엇을 체험하고 싶으세요?</p>
//       <div className="ml-0 flex flex-row">
//         <img
//           src="/image/searchbar.svg"
//           alt="searchIcon"
//           className="absolute left-12 top-[68%] h-6 w-6 -translate-y-1/2 transform"
//         />
//         <input
//           type="text"
//           placeholder="내가 원하는 체험은"
//           value={value}
//           onChange={onChange}
//           className="mr-3 flex-grow rounded border border-gray-300 px-12 py-2"
//         />
//         <button
//           onClick={onCloseClick}
//           className="rounded bg-black px-10 py-4 text-base font-bold text-white"
//         >
//           검색하기
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SearchBar;

import { useRouter } from "next/router";
import React, { useState, ChangeEvent, FormEvent, MouseEvent } from "react";

const SearchBar = () => {
  const [searchWord, setSearchWord] = useState("");
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // URL 변경 (페이지 새로고침 발생)
    window.location.href = `/search?keyword=${searchWord}`;
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (searchWord === "") router.push("/");
    else router.push(`/search?keyword=${searchWord}`);
  };

  return (
    <div className="relative bg-white pb-32">
      <form
        className="absolute -top-14 flex flex-col gap-8 rounded-2xl bg-white px-6 py-8 shadow-lg"
        onSubmit={handleSubmit}
      >
        <label className="text-xl font-bold text-black">
          무엇을 체험하고 싶으신가요?
        </label>
        <div className="flex items-center gap-3">
          <div className="relative">
            <input
              className="border-gray-60 focus:border-green-40 placeholder:pl-0.1 h-14 w-[62.5rem] rounded-md border border-solid px-10 py-2 focus:outline-none"
              type="search"
              value={searchWord}
              onChange={handleChange}
              placeholder="내가 원하는 체험은"
            />
            <img
              className="absolute left-2 top-4"
              src="/image/searchbar.svg"
              alt="search-icon"
            />
          </div>
          <button
            className="h-14 w-[136px] rounded-md bg-nomad_black px-10 py-2 font-bold text-white"
            type="submit"
            onClick={handleClick}
          >
            검색하기
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
