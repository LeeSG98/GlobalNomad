import React, { useState } from "react";
import Calendar, { CalendarProps } from "react-calendar";
import useStore from "@/hooks/useStore";
import clsx from 'clsx';

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
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={handleOpenModal} />
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-2xl sm:max-w-lg p-6">
        <div className="w-full">
          <Calendar
            className={clsx(
              'w-full text-xl',
              'border border-gray-300 rounded-lg p-2',
            )}
            tileClassName={({ date, view }) => {
              const isSunday = date.getDay() === 0;
              const isSaturday = date.getDay() === 6;
              return clsx({
                'text-red-600': isSunday,
                'text-blue-600': isSaturday,
                'hover:bg-gray-200': true,
                'p-2 text-center': true
              });
            }}
            onChange={handleDateChange}
            value={selectedDate}
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarModal;
