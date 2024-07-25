import React from 'react';

interface ReservationItemProps {
  reservation: {
    id: string;
    nickname: string;
    people: number;
    time: string;
    status: '신청' | '승인' | '거절';
  };
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
  status: '신청' | '승인' | '거절';
}

const ReservationItem: React.FC<ReservationItemProps> = ({ reservation, onApprove, onReject, status }) => {
  return (
    <div className="reservation-item">
      <span>{reservation.nickname}</span>
      <span>{reservation.people}명</span>
      <span>{reservation.time}</span>
      {status === '신청' && (
        <div>
          <button onClick={() => onApprove(reservation.id)}>승인하기</button>
          <button onClick={() => onReject(reservation.id)}>거절하기</button>
        </div>
      )}
      {status === '승인' && <span>승인됨</span>}
      {status === '거절' && <span>거절됨</span>}
    </div>
  );
};

export default ReservationItem;
