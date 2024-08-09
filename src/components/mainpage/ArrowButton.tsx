import React from "react";

type ArrowButtonProps = {
  direction: "left" | "right";
  onClick: () => void;
  disabled?: boolean; // disabled 속성 추가
};

const ArrowButton = ({ direction, onClick, disabled }: ArrowButtonProps) => {
  return (
    <button
      onClick={disabled ? undefined : onClick} // 비활성화 상태일 때 클릭 이벤트를 무시
      disabled={disabled} // 버튼 자체를 비활성화
      className={`p-2 ${direction === "left" ? "mr-2" : "ml-2"} ${
        disabled ? "cursor-not-allowed opacity-50" : ""
      }`} // 비활성화 상태에 따른 스타일 적용
      aria-label={`${direction} arrow`}
    >
      <img
        src={
          direction === "left"
            ? "/image/left-arrow.svg"
            : "/image/right-arrow.svg"
        }
        alt={`${direction} arrow`}
        className="h-6 w-6"
      />
    </button>
  );
};

export default ArrowButton;
