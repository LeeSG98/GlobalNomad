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
    <div className="mx-auto mb-0 mt-16 w-full max-w-[1200px]">
      <div className="text-sm text-gray-600">{category || "카테고리 없음"}</div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{title || "제목 없음"}</h1>
        <div className="relative">
          <button onClick={handleMenuToggle} className="focus:outline-none">
            <svg
              className="h-6 w-6"
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
            <div className="absolute right-0 z-10 mt-2 w-32 rounded-lg border border-gray-200 bg-white shadow-lg">
              <button
                onClick={handleMenuClose}
                className="w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                수정하기
              </button>
              <button
                onClick={handleMenuClose}
                className="w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                삭제하기
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="mt-2 flex items-center">
        <img src="/star.svg" alt="star" className="star" />
        <span className="text-yellow-500 ml-1 text-lg">
          {rating.toFixed(1) || "0.0"}
        </span>
        <span className="ml-2 text-gray-600">({reviewCount || 0})</span>
        <div className="mx-4" /> {/* 간격을 주기 위해 추가 */}
        <img src="/ping.svg" alt="ping" className="ping" />
        <span className="ml-1 text-gray-600">
          {address || "등록된 주소가 없습니다"}
        </span>
      </div>
    </div>
  );
};

export default Top;