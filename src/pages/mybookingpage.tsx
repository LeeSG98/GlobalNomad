import React, { useState } from 'react';
import CalendarModal from '@/components/booking/CalendarModal';

const MyBookingPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectDate = (date: string) => {
    setSelectedDate(date);
    handleCloseModal();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Calendar Modal Test</h1>
      <button
        onClick={handleOpenModal}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Open Calendar Modal
      </button>
      <p className="mt-4">Selected Date: {selectedDate}</p>
      {isModalOpen && (
        <CalendarModal
          onSelect={handleSelectDate}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default MyBookingPage;
