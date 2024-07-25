import React, { useState, useEffect } from 'react';
import ReservationList from './ReservationList';
import { ReservationStatus, reservationStatusItems, ReservationDetail } from '@/types/types';

interface ReservationTabsProps {
  experienceId: string;
  date: Date;
  onApprove: (reservation: ReservationDetail) => void;
  onReject: (reservation: ReservationDetail) => void;
}

const ReservationTabs: React.FC<ReservationTabsProps> = ({ experienceId, date, onApprove, onReject }) => {
  const [reservations, setReservations] = useState<ReservationDetail[]>([]);
  const [activeTab, setActiveTab] = useState<ReservationStatus>(ReservationStatus.PROPOSAL);

  useEffect(() => {
    const fetchReservations = async () => {
      // 여기서 API 호출을 통해 예약 정보를 가져옵니다
      const response = await fetch(`/api/reservations?experienceId=${experienceId}&date=${date}`);
      const data = await response.json();
      setReservations(data);
    };

    fetchReservations();
  }, [experienceId, date]);

  const filteredReservations = reservations.filter(res => res.status === activeTab);

  return (
    <div className="reservation-tabs">
      <div className="tab-header">
        {Array.from(reservationStatusItems.entries()).map(([status, label]) => (
          <button
            key={status}
            onClick={() => setActiveTab(status)}
            className={activeTab === status ? 'active' : ''}
          >
            {label}
          </button>
        ))}
      </div>
      <ReservationList reservations={filteredReservations} onApprove={onApprove} onReject={onReject} />
    </div>
  );
};

export default ReservationTabs;