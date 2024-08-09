// import React, { useState, useEffect } from 'react';
// import Calendar from '@/components/experiencedetail/Calendar';
// import { useParams } from 'react-router-dom';
// import { getActivity } from '@/api/activity';
// import { ActivityResponse } from '@/api/models/activity';

// const ReservationDetails: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   const [selectedTime, setSelectedTime] = useState<string | null>(null);
//   const [participantCount, setParticipantCount] = useState<number>(1);
//   const [activity, setActivity] = useState<ActivityResponse | null>(null);

//   useEffect(() => {
//     if (id) {
//       const fetchActivity = async () => {
//         try {
//           const res = await getActivity(id);
//           setActivity(res);
//         } catch (error) {
//           console.error('Error fetching activity:', error);
//         }
//       };

//       fetchActivity();
//     }
//   }, [id]);

//   const handleTimeClick = (time: string) => {
//     setSelectedTime(time);
//   };

//   const handleParticipantChange = (change: number) => {
//     setParticipantCount((prev) => Math.max(1, prev + change));
//   };

//   return (
//     <div className="flex flex-col w-80 h-650 md:w-1/3 bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto ml-16">
//       <div className="flex items-baseline mb-2 space-x-1">
//         <h2 className="text-2xl font-bold">
//           ₩ {activity ? activity.price.toLocaleString() : '...'}
//         </h2>
//         <span className="text-xl font-normal">/ 인</span>
//       </div>
//       <hr className="my-4 border-gray-300" />
//       <div className="mb-4 bg-white p-4 rounded">
//         <h3 className="text-lg font-semibold mb-2">날짜</h3>
//         <Calendar />
//       </div>
//       <hr className="my-4 border-gray-300" />
//       <div className="mb-4">
//         <h3 className="text-lg font-semibold mb-2">예약 가능한 시간</h3>
//         <div className="flex space-x-2">
//           {activity?.schedules.map((schedule) => (
//             <button
//               key={schedule.id}
//               onClick={() =>
//                 handleTimeClick(`${schedule.startTime}-${schedule.endTime}`)
//               }
//               className={`w-full py-2 rounded ${
//                 selectedTime === `${schedule.startTime}-${schedule.endTime}`
//                   ? 'bg-black text-white'
//                   : 'bg-gray-200 hover:bg-gray-300'
//               }`}
//             >
//               {schedule.startTime}-{schedule.endTime}
//             </button>
//           ))}
//         </div>
//       </div>
//       <hr className="my-4 border-gray-300" />
//       <div className="mb-4">
//         <h3 className="text-lg font-semibold mb-2">참여 인원 수</h3>
//         <div className="flex items-center space-x-2">
//           <button
//             onClick={() => handleParticipantChange(-1)}
//             className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded"
//           >
//             -
//           </button>
//           <span className="w-12 text-center">{participantCount}</span>
//           <button
//             onClick={() => handleParticipantChange(1)}
//             className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded"
//           >
//             +
//           </button>
//         </div>
//       </div>
//       <button className="mt-4 w-full py-2 bg-black text-white rounded hover:bg-gray-800">
//         예약하기
//       </button>
//       <hr className="my-4 border-gray-300" />
//       <div className="flex justify-between items-center">
//         <span className="text-lg font-semibold">총 합계</span>
//         <span className="text-lg font-semibold">
//           ₩ {(participantCount * (activity?.price || 0)).toLocaleString()}
//         </span>
//       </div>
//     </div>
//   );
// };

// export default ReservationDetails;

import React, { useState, useEffect } from "react";
import Calendar from "@/components/experiencedetail/Calendar";
import { useParams } from "react-router-dom";
import { getActivity } from "@/api/activity";
import { ActivityResponse } from "@/api/models/activity";
import postActivityReservation from "@/api/postActivityReservation"; // 예약 함수 임포트

const ReservationDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedTimeId, setSelectedTimeId] = useState<number | null>(null); // ID로 변경
  const [participantCount, setParticipantCount] = useState<number>(1);
  const [activity, setActivity] = useState<ActivityResponse | null>(null);

  useEffect(() => {
    if (id) {
      const fetchActivity = async () => {
        try {
          const res = await getActivity(id);
          setActivity(res);
        } catch (error) {
          console.error("Error fetching activity:", error);
        }
      };

      fetchActivity();
    }
  }, [id]);

  const handleTimeClick = (scheduleId: number) => {
    setSelectedTimeId(scheduleId);
  };

  const handleParticipantChange = (change: number) => {
    setParticipantCount((prev) => Math.max(1, prev + change));
  };

  const handleReservationClick = async () => {
    if (!selectedTimeId || !id) {
      alert("예약 가능한 시간과 활동을 선택해주세요.");
      return;
    }

    try {
      const reservationResponse = await postActivityReservation({
        selectedTimeId,
        attendeeCount: participantCount,
        id,
      });

      alert("예약이 완료되었습니다!");
      console.log("예약 성공:", reservationResponse);
    } catch (error) {
      console.error("예약 중 오류 발생:", error);
      alert("예약에 실패하였습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="h-650 mx-auto ml-16 flex w-80 max-w-3xl flex-col rounded-lg bg-white p-6 shadow-md md:w-1/3">
      <div className="mb-2 flex items-baseline space-x-1">
        <h2 className="text-2xl font-bold">
          ₩ {activity ? activity.price.toLocaleString() : "..."}
        </h2>
        <span className="text-xl font-normal">/ 인</span>
      </div>
      <hr className="my-4 border-gray-300" />
      <div className="mb-4 rounded bg-white p-4">
        <h3 className="mb-2 text-lg font-semibold">날짜</h3>
        <Calendar />
      </div>
      <hr className="my-4 border-gray-300" />
      <div className="mb-4">
        <h3 className="mb-2 text-lg font-semibold">예약 가능한 시간</h3>
        <div className="flex space-x-2">
          {activity?.schedules.map((schedule) => (
            <button
              key={schedule.id}
              onClick={() => handleTimeClick(schedule.id)} // ID로 클릭 처리
              className={`w-full rounded py-2 ${
                selectedTimeId === schedule.id
                  ? "bg-black text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {schedule.startTime}-{schedule.endTime}
            </button>
          ))}
        </div>
      </div>
      <hr className="my-4 border-gray-300" />
      <div className="mb-4">
        <h3 className="mb-2 text-lg font-semibold">참여 인원 수</h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => handleParticipantChange(-1)}
            className="h-8 w-8 rounded bg-gray-200 hover:bg-gray-300"
          >
            -
          </button>
          <span className="w-12 text-center">{participantCount}</span>
          <button
            onClick={() => handleParticipantChange(1)}
            className="h-8 w-8 rounded bg-gray-200 hover:bg-gray-300"
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={handleReservationClick}
        className="mt-4 w-full rounded bg-black py-2 text-white hover:bg-gray-800"
      >
        예약하기
      </button>
      <hr className="my-4 border-gray-300" />
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold">총 합계</span>
        <span className="text-lg font-semibold">
          ₩ {(participantCount * (activity?.price || 0)).toLocaleString()}
        </span>
      </div>
    </div>
  );
};

export default ReservationDetails;
