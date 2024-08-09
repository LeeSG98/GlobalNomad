import React from 'react';
import { ReservationDetail } from '@/types/types';
import ReservationTabs from './ReservationTabs';

interface ReservationModalProps {
  date: string;
  reservations: ReservationDetail[];
  onApprove: (reservation: ReservationDetail) => void;
  onReject: (reservation: ReservationDetail) => void;
  onClose: () => void;
}

const ReservationModal: React.FC<ReservationModalProps> = ({ date, reservations, onApprove, onReject, onClose }) => {
  return (
    <div className="modal">
      <h2>{date} 예약 정보</h2>
      <ReservationTabs experienceId="1" date={new Date(date)} onApprove={onApprove} onReject={onReject} />
      <button onClick={onClose}>닫기</button>
    </div>
  );
};

export default ReservationModal;
