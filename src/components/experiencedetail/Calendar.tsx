import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import { enUS } from "date-fns/locale";
import styles from "./Calendar.module.css";

registerLocale("en-US", enUS);

const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <div className="flex justify-center">
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        locale="en-US"
        dateFormat="yyyy-MM-dd"
        className={`w-full rounded border border-gray-300 p-2 ${styles.customCalendar}`}
        inline
      />
    </div>
  );
};

export default Calendar;
