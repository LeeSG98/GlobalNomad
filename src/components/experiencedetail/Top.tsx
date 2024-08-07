import React, { useEffect, useState } from 'react';

interface TopProps {
  category: string;
  title: string;
  address: string;
  reviewCount: number;
  rating: number;

}


const Top: React.FC<TopProps> = ({category, title, address, reviewCount, rating}: TopProps) => {

  const [menuOpen, setMenuOpen] = useState(false); 
 

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto mt-16 mb-0">
      <div className="text-sm text-gray-600">{category || '카테고리 없음'}</div>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">{title || '제목 없음'}</h1>
        <div className="relative">
          <button onClick={handleMenuToggle} className="focus:outline-none">
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
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              <button onClick={handleMenuClose} className="w-full text-left px-4 py-2 hover:bg-gray-100">수정하기</button>
              <button onClick={handleMenuClose} className="w-full text-left px-4 py-2 hover:bg-gray-100">삭제하기</button>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center mt-2">
        <img src="/star.svg" alt="star" className="star" />
        <span className="text-lg text-yellow-500 ml-1">
          {rating.toFixed(1) || '0.0'}
        </span>
        <span className="text-gray-600 ml-2">
          ({reviewCount || 0})
        </span>
        <div className="mx-4" /> {/* 간격을 주기 위해 추가 */}
        <img src="/ping.svg" alt="ping" className="ping" />
        <span className="text-gray-600 ml-1">
          {address || '등록된 주소가 없습니다'}
        </span>
      </div>
    </div>
  );
};

export default Top;
