import React from 'react';

interface Reservation {
  date: string;
  status: '완료' | '예약' | '승인';
  count: number;
}

interface ReservationStatusProps {
  reservations: Reservation[];
  date: string;
}

const ReservationStatus: React.FC<ReservationStatusProps> = ({ reservations, date }) => {
  const reservation = reservations.find(res => res.date === date);

  if (!reservation) return null;

  return (
    <div className="reservation-status">
      <span>{reservation.status} {reservation.count}</span>
      {reservation.status === '완료' && <span className="black-dot"></span>}
      {(reservation.status === '예약' || reservation.status === '승인') && <span className="blue-dot"></span>}
    </div>
  );
};

export default ReservationStatus;