import React from 'react';

interface CalendarProps {
  dates: string[];
  onDateClick: (date: string) => void;
}

const Calendar: React.FC<CalendarProps> = ({ dates, onDateClick }) => {
  return (
    <div className="calendar">
      {dates.map(date => (
        <div key={date} className="calendar-date" onClick={() => onDateClick(date)}>
          {date}
        </div>
      ))}
    </div>
  );
};

export default Calendar;