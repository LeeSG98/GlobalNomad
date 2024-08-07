import React from "react";

interface StartTimeProps {
    onSelect: (startTime: string) => void;
}
  
  const StartTimeDropDown = ({ onSelect }: StartTimeProps) => {
    const reservationTime = [
      { startTime: "09:00" },
      { startTime: "10:00" },
      { startTime: "11:00" },
      { startTime: "12:00" },
      { startTime: "13:00" },
      { startTime: "14:00" },
      { startTime: "15:00" },
      { startTime: "16:00" },
      { startTime: "17:00" },
      { startTime: "18:00" },
      { startTime: "19:00" },
      { startTime: "20:00" },
      { startTime: "21:00" },
      { startTime: "22:00" },
      { startTime: "23:00" },
    ];
  
    const handleSelectedTime = (startTime: string) => () => {
      onSelect(startTime);
    };
  
    return (
      <ul className="absolute z-10 flex flex-col w-[100%] p-2 items-start gap-[4px] shrink-0 rounded-md bg-white shadow-md">
        {reservationTime.map((time) => (
          <button
            key={time.startTime}
            type="button"
            className="w-[100%] hover:bg-[#112211] hover:text-white"
            onClick={handleSelectedTime(time.startTime)}
          >
            <li className="flex text-base">{time.startTime}</li>
          </button>
        ))}
      </ul>
    );
  };
  
  export default StartTimeDropDown;