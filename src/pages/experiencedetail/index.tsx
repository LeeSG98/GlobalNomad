import React, { useState } from 'react';
import Gallery from '@/components/experiencedetail/Gallery';
import Menu from '@/components/experiencedetail/Menu';
import Top from '@/components/experiencedetail/Top';
import Calendar from '@/components/experiencedetail/Calendar';

const ExperienceDetailPage: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [participantCount, setParticipantCount] = useState<number>(1);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
  };

  const handleParticipantChange = (change: number) => {
    setParticipantCount(prev => Math.max(1, prev + change));
  };

  return (
    <div className="flex flex-col items-center p-8 space-y-8 bg-[#FAFAFA] min-h-screen">
      <div className="flex justify-between items-center w-full max-w-screen-lg">
        <Top />
        <div className="relative">
          <button onClick={toggleMenu} className="focus:outline-none">
            <MenuIcon />
          </button>
          {menuOpen && <Menu />}
        </div>
      </div>
      <div className="w-full max-w-screen-lg">
        <Gallery />
      </div>
      <div className="w-full max-w-screen-lg flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
        <div className="md:w-2/3">         
          <hr className="my-4 border-gray-300" />
          <h2 className="text-xl font-semibold mb-4">체험 설명</h2>
          <p className="mb-4">
            안녕하세요! 저희 스트릿 댄스 체험을 소개합니다. 저희는 신나고 재미있는 스트릿 댄스 스타일을 가르칩니다.
            크롭탑은 세계적으로 인기 있는 댄스 스타일로, 어디서든 출 춤을 선보일 수 있습니다. 저희 체험에서는 새로운
            스타일을 배우실 수 있고, 즐거운 시간을 보낼 수 있습니다. 저희는 초보자부터 전문가까지 어떤 수준의 춤을 추는
            사람들이든 가르칠 수 있도록 준비해놨습니다. 저희의 강사님들은 현재 수 있는 시간과 기술적인 수준을 고려하여,
            최적의 코칭을 제공합니다. 저희의 체험을 통해, 기존의 댄스 스타일 뿐만 아니라 새로운 스타일을 발견할 수
            있을 것입니다.
          </p>
          <hr className="my-4 border-gray-300" />
          <div className="mb-8">
            <img
              src="map.jpg"
              alt="Map"
              className="w-full h-auto"
            />
            <p className="text-sm text-gray-600 mt-2">
              서울 중구 청계천로 100 10F
            </p>
          </div>
          <hr className="my-4 border-gray-300" />
        </div>
        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">₩1,000 /인</h2>
          </div>
          <hr className="my-4 border-gray-300" />
          <div className="mb-4">
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
          <hr className="my-4 border-gray-300" />
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">총 합계</span>
            <span className="text-lg font-semibold">₩{(participantCount * 1000).toLocaleString()}</span>
          </div>
          <button className="mt-4 w-full py-2 bg-black text-white rounded hover:bg-gray-800">
            예약하기
          </button>
        </div>
      </div>
    </div>
  );
};

const MenuIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

export default ExperienceDetailPage;
