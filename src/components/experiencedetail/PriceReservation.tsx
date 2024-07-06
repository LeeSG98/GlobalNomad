// components/PriceReservation.js
import React from 'react';

function PriceReservation() {
  return (
    <div className="border p-4 rounded-lg">
      <h2 className="text-xl font-semibold">₩1,000 /인</h2>
      <div className="mt-4">
        <label className="block mb-2">날짜</label>
        <input type="date" className="border rounded w-full p-2" />
      </div>
      <div className="mt-4">
        <label className="block mb-2">예약 가능 시간</label>
        <select className="border rounded w-full p-2">
          <option>14:00-15:00</option>
          <option>15:00-16:00</option>
        </select>
      </div>
      <div className="mt-4">
        <label className="block mb-2">참여 인원 수</label>
        <input type="number" min="1" max="10" className="border rounded w-full p-2" />
      </div>
      <button className="w-full bg-green-500 text-white py-2 mt-4 rounded">예약하기</button>
    </div>
  );
}

export default PriceReservation;
