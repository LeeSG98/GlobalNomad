import React, { useState } from "react";
import CalendarModal from "@/components/booking/CalendarModal";

const MyBookingPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

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
      <h1 className="mb-4 text-2xl font-bold">Calendar Modal Test</h1>
      <button
        onClick={handleOpenModal}
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Open Calendar Modal
      </button>
      <p className="mt-4">Selected Date: {selectedDate}</p>
      {isModalOpen && (
        <CalendarModal onSelect={handleSelectDate} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default MyBookingPage;
