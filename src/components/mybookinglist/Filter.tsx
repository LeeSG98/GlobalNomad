import { useRef, useState } from "react";
import { VscTriangleDown } from "react-icons/vsc";

export default function Filter() {
  const hover =
    "block w-full px-4 py-2 text-center text-gray-700 hover:bg-gray-100 border-b";
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);

  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div ref={buttonRef} className="relative">
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
          <button className={hover}>예약 신청</button>
          <button className={hover}>예약 취소</button>
          <button className={hover}>예약 승인</button>
          <button className={hover}>예약 거절</button>
          <button className="block w-full px-4 py-2 text-center text-gray-700 hover:bg-gray-100">
            체험 완료
          </button>
        </div>
      )}
    </div>
  );
}
