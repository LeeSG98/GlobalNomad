import React, { useState } from "react";
import Calendar from "react-calendar";
import useStore from "@/hooks/useStore";
import "react-calendar/dist/Calendar.css";

type DatePiece = Date | null;
type SelectedDate = DatePiece | [DatePiece, DatePiece];

const dateToString = (date: Date) => {
  const year = date.getFullYear(); // 연
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // 월 (0부터 시작하므로 +1)
  const day = date.getDate().toString().padStart(2, "0"); // 일

  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
};

interface CalendarModalProps {
  onSelect: (date: string) => void;
  onClose: () => void;
}

const CalendarModal: React.FC<CalendarModalProps> = ({ onSelect, onClose }) => {
  const { darkMode } = useStore();
  const [selectedDate, setSelectedDate] = useState<SelectedDate>(new Date());

  const formatDate = (date: SelectedDate): string => {
    if (Array.isArray(date)) {
      return `${dateToString(date[0] as Date)} - ${dateToString(
        date[1] as Date,
      )}`;
    }
    return date ? dateToString(date as Date) : "";
  };

  const handleDateChange = (newDate: SelectedDate) => {
    setSelectedDate(newDate);
    if (!Array.isArray(newDate) && newDate !== null) {
      onSelect(formatDate(newDate));
    }
  };

  const handleOpenModal = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={handleOpenModal}
      />
      <div className="relative w-full max-w-2xl rounded-lg bg-white shadow-lg sm:max-w-lg">
        <div
          className={`w-full rounded-lg border border-gray-300 p-2 ${
            darkMode ? "bg-gray-900 text-white" : "bg-white"
          }`}
        >
          <Calendar
            className="w-full text-xl"
            onChange={handleDateChange}
            value={selectedDate}
            tileClassName={({ date, view }) => {
              const baseClasses =
                "flex justify-center items-center w-full h-12 text-lg font-semibold";
              const nowClasses =
                date.toDateString() === new Date().toDateString()
                  ? "bg-green-500 text-white border border-green-500"
                  : "";
              const activeClasses =
                view === "month" && date.toDateString() === date.toDateString()
                  ? "bg-green-500 text-white font-bold"
                  : "";
              return `${baseClasses} ${nowClasses} ${activeClasses}`;
            }}
            tileContent={({ date, view }) => {
              if (view === "month" && date.getDay() === 6) {
                return <div className="text-blue-500">{date.getDate()}</div>;
              } else if (view === "month" && date.getDay() === 0) {
                return <div className="text-red-500">{date.getDate()}</div>;
              }
              return null;
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarModal;
