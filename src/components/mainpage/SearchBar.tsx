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
              className="placeholder:pl-0.1 h-14 w-[62.5rem] rounded-md border border-solid border-gray_A4 px-10 py-2 focus:border-green_CE focus:outline-none"
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
