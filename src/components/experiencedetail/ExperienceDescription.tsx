import React from 'react';

const ExperienceDescription: React.FC = () => {
  return (
    <div className="flex flex-col w-full md:w-2/3">
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
  );
};

export default ExperienceDescription;
