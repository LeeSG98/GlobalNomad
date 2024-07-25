// 파일: src/pages/bookingstatus.tsx
import React, { useState, useEffect } from 'react';
import DropdownMenu from '../components/booking/DropdownMenu';
import CalendarWithReservations from '../components/booking/CalendarWithReservations';
import ReservationStatusModal from '../components/booking/ReservationStatusModal';
import {
  fetchMyActivities,
  fetchReservationsByMonth,
  fetchReservedSchedule,
  updateReservationStatus,
  ReservationStatus
} from '../api/api';
import { generateCalendarDates } from '../utils/generateCalendarDates';
import { Experience, ReservationDetail } from '../types/types';

interface Reservation {
  id: number;
  date: string;
  status: '완료' | '예약' | '승인';
  count: number;
}

const BookingStatus = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [reservationDetails, setReservationDetails] = useState<ReservationDetail[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const loadMyActivities = async () => {
      const activities = await fetchMyActivities();
      setExperiences(activities);
    };

    loadMyActivities();
  }, []);

  useEffect(() => {
    if (selectedExperience) {
      const loadReservationsByMonth = async () => {
        const reservations = await fetchReservationsByMonth(selectedExperience.id, new Date().getMonth() + 1);
        setReservations(reservations);
      };

      loadReservationsByMonth();
    }
  }, [selectedExperience]);

  const handleSelectExperience = (experience: Experience) => {
    setSelectedExperience(experience);
  };

  const handleDateClick = async (date: string) => {
    if (selectedExperience) {
      const reservationDetails = await fetchReservedSchedule(selectedExperience.id, date);
      setSelectedDate(date);
      setShowModal(true);
      setReservationDetails(reservationDetails);
    }
  };

  const handleApprove = async (reservation: ReservationDetail) => {
    if (selectedExperience) {
      await updateReservationStatus(selectedExperience.id, reservation.id, ReservationStatus.APPROVAL);
      const updatedReservations = reservationDetails.map((res) =>
        res.id === reservation.id ? { ...res, status: ReservationStatus.APPROVAL } : res
      );
      setReservationDetails(updatedReservations);
    }
  };

  const handleReject = async (reservation: ReservationDetail) => {
    if (selectedExperience) {
      await updateReservationStatus(selectedExperience.id, reservation.id, ReservationStatus.REFUSE);
      const updatedReservations = reservationDetails.map((res) =>
        res.id === reservation.id ? { ...res, status: ReservationStatus.REFUSE } : res
      );
      setReservationDetails(updatedReservations);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {experiences.length === 0 ? (
        <p>아직 등록한 체험이 없어요</p>
      ) : (
        <>
          <DropdownMenu experiences={experiences} onSelect={handleSelectExperience} />
          <CalendarWithReservations dates={generateCalendarDates()} reservations={reservations} onDateClick={handleDateClick} />
        </>
      )}
      {showModal && selectedDate && selectedExperience && (
        <ReservationStatusModal
          experience={selectedExperience}
          date={new Date(selectedDate)}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default BookingStatus;
