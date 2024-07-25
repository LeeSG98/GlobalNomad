import React, { useState } from 'react';
import Calendar from '@/components/experiencedetail/Calendar';

const ReservationDetails: React.FC = () => {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [participantCount, setParticipantCount] = useState<number>(1);

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
  };

  const handleParticipantChange = (change: number) => {
    setParticipantCount((prev) => Math.max(1, prev + change));
  };

  return (
    <div className="flex flex-col w-80 h-650 md:w-1/3 bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto ml-16">
     <div className="flex items-baseline mb-2 space-x-1">
      <h2 className="text-2xl font-bold">₩ 1,000</h2>
      <span className="text-xl font-normal">/ 인</span>
      </div>
      <hr className="my-4 border-gray-300" />
      <div className="mb-4 bg-white p-4 rounded">
        <h3 className="text-lg font-semibold mb-2">날짜</h3>
        <Calendar />
      </div>
      <hr className="my-4 border-gray-300" />
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">예약 가능한 시간</h3>
        <div className="flex space-x-2">
          <button
            onClick={() => handleTimeClick('14:00-15:00')}
            className={`w-full py-2 rounded ${selectedTime === '14:00-15:00' ? 'bg-black text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            14:00-15:00
          </button>
          <button
            onClick={() => handleTimeClick('15:00-16:00')}
            className={`w-full py-2 rounded ${selectedTime === '15:00-16:00' ? 'bg-black text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            15:00-16:00
          </button>
        </div>
      </div>
      <hr className="my-4 border-gray-300" />
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">참여 인원 수</h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => handleParticipantChange(-1)}
            className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded"
          >
            -
          </button>
          <span className="w-12 text-center">{participantCount}</span>
          <button
            onClick={() => handleParticipantChange(1)}
            className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded"
          >
            +
          </button>
        </div>
      </div>
      <button className="mt-4 w-full py-2 bg-black text-white rounded hover:bg-gray-800">
        예약하기
      </button>
      <hr className="my-4 border-gray-300" />
      <div className="flex justify-between items-center">
        <span className="text-lg font-semibold">총 합계</span>
        <span className="text-lg font-semibold">₩{(participantCount * 1000).toLocaleString()}</span>
      </div>
    </div>
  );
};

export default ReservationDetails;
