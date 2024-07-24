import React from 'react';
import { ReservationStatus } from './ReservationTabs';

interface ReservationDetail {
  id: number;
  nickname: string;
  people: number;
  time: string;
  status: ReservationStatus;
}

interface ReservationListProps {
  reservations: ReservationDetail[];
  onApprove: (reservation: ReservationDetail) => void;
  onReject: (reservation: ReservationDetail) => void;
}

const ReservationList: React.FC<ReservationListProps> = ({ reservations, onApprove, onReject }) => {
  return (
    <div>
      {reservations.map(res => (
        <div key={res.id} className="reservation-item">
          <span>{res.nickname} {res.people}명 {res.time}</span>
          {res.status === ReservationStatus.PROPOSAL && (
            <>
              <button onClick={() => onApprove(res)}>승인하기</button>
              <button onClick={() => onReject(res)}>거절하기</button>
            </>
          )}
          {res.status === ReservationStatus.APPROVAL && <span>예약 승인</span>}
          {res.status === ReservationStatus.REFUSE && <span>예약 거절</span>}
        </div>
      ))}
    </div>
  );
};

export default ReservationList;
