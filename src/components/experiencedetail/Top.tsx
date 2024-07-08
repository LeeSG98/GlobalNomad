import React from 'react';

const Top: React.FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm text-gray-500">문화·예술</span>
      <h1 className="text-2xl font-bold">함께 배우면 즐거운 스트릿 댄스</h1>
      <div className="flex items-center text-gray-700 gap-2">
        <span className="text-yellow-500">⭐ 4.9</span>
        <span>(293)</span>
        <span className="text-gray-500">·</span>
        <span className="text-gray-500">서울 중구 청계천로 100 10F</span>
      </div>
    </div>
  );
};

export default Top;