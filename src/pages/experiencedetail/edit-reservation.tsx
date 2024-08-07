import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { fetchReservedSchedule, updateReservationStatus, ReservationStatus } from '@/api';

const EditReservation: React.FC = () => {
  const router = useRouter();
  const { reservationId } = router.query;
  const [reservationDetails, setReservationDetails] = useState<any>(null);
  const [price, setPrice] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [location, setLocation] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      if (reservationId) {
        const data = await fetchReservedSchedule(Number(reservationId), date);
        setReservationDetails(data);
        // Assuming the API returns an object with price, description, date, time, and location properties
        setPrice(data.price);
        setDescription(data.description);
        setDate(data.date);
        setTime(data.time);
        setLocation(data.location);
      }
    };
    fetchData();
  }, [reservationId, date]);

  const handleUpdate = async () => {
    try {
      const updatedData = {
        date,
        status: ReservationStatus.APPROVAL, // Example status
        count: 1, // Example count
      };
      await updateReservationStatus(Number(reservationId), updatedData);
      alert('예약이 수정되었습니다.');
      router.push('/'); // Redirect to home or another page after update
    } catch (error) {
      console.error('예약 수정 중 오류 발생:', error);
      alert('예약 수정 중 오류가 발생했습니다.');
    }
  };

  if (!reservationDetails) return <div>Loading...</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">예약 수정</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">가격</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">체험 설명</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">날짜</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">예약 가능한 시간</label>
        <input
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">위치</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
      <button
        onClick={handleUpdate}
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
      >
        수정하기
      </button>
    </div>
  );
};

export default EditReservation;
