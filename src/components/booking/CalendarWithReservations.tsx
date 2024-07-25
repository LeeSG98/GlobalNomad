import React from 'react';
import Calendar from './Calendar';
import ReservationStatus from './ReservationStatus';

interface Reservation {
  date: string;
  status: '완료' | '예약' | '승인';
  count: number;
}

interface CalendarWithReservationsProps {
  dates: string[];
  reservations: Reservation[];
  onDateClick: (date: string) => void;
}

const CalendarWithReservations: React.FC<CalendarWithReservationsProps> = ({ dates, reservations, onDateClick }) => {
  return (
    <div className="calendar-with-reservations">
      {dates.map(date => (
        <div key={date} className="calendar-date-wrapper">
          <Calendar dates={[date]} onDateClick={onDateClick} />
          <ReservationStatus reservations={reservations} date={date} />
        </div>
      ))}
    </div>
  );
};

export default CalendarWithReservations;
