import { useRef, useState } from "react";
import { VscTriangleDown } from "react-icons/vsc";

interface FilterProps {
  setFilter: (filter: string) => void;
}

export default function Filter({ setFilter }: FilterProps) {
  const hover =
    "block w-full px-4 py-2 text-center text-gray-700 hover:bg-gray-100 border-b";
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);

  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  const applyFilter = (filter: string) => {
    setFilter(filter);
    setIsOpen(false);
  };

  return (
    <div ref={buttonRef} className="relative hidden lg:block">
      <button
        className="flex w-[130px] items-center justify-between rounded-xl border border-green_0B bg-white px-[20px] py-[10px] shadow-md"
        onClick={toggleFilter}
      >
        필터
        <VscTriangleDown
          className={`${isOpen ? "rotate-180 transform" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="absolute mt-1 w-[130px] rounded-md border bg-white shadow-lg">
          <button className={hover} onClick={() => applyFilter("all")}>
            모두 보기
          </button>
          <button className={hover} onClick={() => applyFilter("pending")}>
            예약 신청
          </button>
          <button className={hover} onClick={() => applyFilter("canceled")}>
            예약 취소
          </button>
          <button className={hover} onClick={() => applyFilter("confirmed")}>
            예약 승인
          </button>
          <button className={hover} onClick={() => applyFilter("declined")}>
            예약 거절
          </button>
          <button className={hover} onClick={() => applyFilter("completed")}>
            체험 완료
          </button>
        </div>
      )}
    </div>
  );
}
