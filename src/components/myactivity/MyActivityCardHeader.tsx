import React from "react";
import { useRouter } from "next/router";

const MyActivityCardHeader = () => {
  const router = useRouter();

  const handleAssignClick = () => {
    router.push("/my/activity/assign");
  };

  return (
    <div className="mb-6 flex w-full min-w-[21.5rem] justify-between">
      <h2 className="dark:text-darkMode-white-10 self-start text-[32px] font-bold text-black">
        내 체험 관리
      </h2>
      <button
        type="button"
        className="border-green-80 dark:bg-darkMode-black-20 flex h-12 min-w-[7.5rem] items-center justify-center gap-1 self-stretch rounded border-[1.5px] bg-[#121] p-2.5 text-white"
        onClick={handleAssignClick}
      >
        체험 등록하기
      </button>
    </div>
  );
};

export default MyActivityCardHeader;
