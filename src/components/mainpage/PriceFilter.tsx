import React from "react";

type PriceFilterProps = {
  options: string[];
  selectedOption: string;
  onChange: (option: string) => void;
};

const PriceFilter = ({
  options,
  selectedOption,
  onChange,
}: PriceFilterProps) => {
  return (
    <div className="relative inline-block">
      <div className="relative inline-block">
        <select
          className="block w-[127px] cursor-pointer appearance-none rounded-2xl border border-green_0B bg-white px-8 py-4 pr-8 text-left leading-tight text-green_0B focus:outline-none"
          value={selectedOption}
          onChange={(e) => onChange(e.target.value)}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
          <img
            src="/image/arrow-down.svg"
            alt="arrow-down"
            className="h-4 w-4"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
