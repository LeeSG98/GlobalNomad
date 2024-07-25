
import React from 'react';
import ReactModal from 'react-modal';
import dayjs from 'dayjs';
import ReservationTabs from './ReservationTabs';
import { Experience, ReservationDetail } from '@/types/types';

interface ReservationStatusModalProps {
  experience: Experience;
  date: Date;
  onClose: () => void;
}

ReactModal.setAppElement('#__next'); // Next.js에서는 '__next'를 사용

const ReservationStatusModal: React.FC<ReservationStatusModalProps> = ({ experience, date, onClose }) => {
  const handleApprove = (reservation: ReservationDetail) => {
  };

  const handleReject = (reservation: ReservationDetail) => {
  };

  return (
    <ReactModal isOpen onRequestClose={onClose} contentLabel="Reservation Details">
      <h2>{experience.name} - {dayjs(date).format('YYYY-MM-DD')}</h2>
      <ReservationTabs experienceId={experience.id.toString()} date={date} onApprove={handleApprove} onReject={handleReject} />
      <button onClick={onClose}>Close</button>
    </ReactModal>
  );
};

export default ReservationStatusModal;
