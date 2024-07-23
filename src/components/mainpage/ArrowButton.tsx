import React from "react";

type ArrowButtonProps = {
  direction: "left" | "right";
  onClick: () => void;
};

const ArrowButton = ({ direction, onClick }: ArrowButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 ${direction === "left" ? "mr-2" : "ml-2"}`}
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
