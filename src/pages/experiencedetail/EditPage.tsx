import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  ReservationStatus,
  fetchReservedSchedule,
  updateReservationStatus,
} from "@/api/api";

const EditReservation: React.FC = () => {
  const router = useRouter();
  const { reservationId, activityId } = router.query; // activityId 추가
  const [reservationDetails, setReservationDetails] = useState<any>(null);
  const [price, setPrice] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      if (reservationId && activityId) {
        // activityId가 추가된 경우
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
  }, [reservationId, activityId, date]); // activityId 의존성 추가

  const handleUpdate = async () => {
    try {
      if (!activityId || !reservationId) {
        throw new Error("Activity ID or Reservation ID is missing.");
      }
      const updatedData = {
        date,
        count: 1, // Example count
      };
      await updateReservationStatus(
        Number(activityId), // activityId 전달
        Number(reservationId), // reservationId 전달
        ReservationStatus.APPROVAL, // 상태 전달
      );
      alert("예약이 수정되었습니다.");
      router.push("/"); // Redirect to home or another page after update
    } catch (error) {
      console.error("예약 수정 중 오류 발생:", error);
      alert("예약 수정 중 오류가 발생했습니다.");
    }
  };

  if (!reservationDetails) return <div>Loading...</div>;

  return (
    <div className="mx-auto max-w-3xl rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-2xl font-semibold">예약 수정</h2>
      <div className="mb-4">
        <label className="mb-2 block text-gray-700">가격</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full rounded-lg border px-4 py-2"
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block text-gray-700">체험 설명</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full rounded-lg border px-4 py-2"
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block text-gray-700">날짜</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full rounded-lg border px-4 py-2"
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block text-gray-700">예약 가능한 시간</label>
        <input
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full rounded-lg border px-4 py-2"
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block text-gray-700">위치</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full rounded-lg border px-4 py-2"
        />
      </div>
      <button
        onClick={handleUpdate}
        className="bg-green-500 hover:bg-green-600 rounded px-4 py-2 text-white"
      >
        수정하기
      </button>
    </div>
  );
};

export default EditReservation;
