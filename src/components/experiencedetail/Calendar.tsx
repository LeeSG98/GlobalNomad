import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale } from 'react-datepicker';
import { enUS } from 'date-fns/locale';

registerLocale('en-US', enUS);

const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleDateChange}
      locale="en-US"
      dateFormat="yyyy-MM-dd"
      className="w-full p-2 border border-gray-300 rounded"
      inline
    />
  );
};

export default Calendar;
