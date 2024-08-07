<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, { useEffect, useState } from 'react';
import { getActivity } from '@/api/activity';
import { ActivityResponse } from '@/api/models/activity';
import { useParams } from 'react-router-dom';
>>>>>>> 07d9f5a0aff042cea8e92f355bc728ed73b4c6a4

interface TopProps {
  category: string;
  title: string;
  address: string;
  reviewCount: number;
  rating: number;

}


const Top: React.FC<TopProps> = ({category, title, address, reviewCount, rating}: TopProps) => {
  // const { id } = useParams<{id: string}>();
  // const [activity, setActivity] = useState<ActivityResponse | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  
  // useEffect(() => {
  //   if (id) {
  //     const fetchActivity = async () => {
  //       try {
  //         const res = await getActivity(id);
  //         setActivity(res);
  //       } catch (e) {
  //         console.error("Error fetching activity:", e);
  //       }
  //     }
  //     fetchActivity();
  //   }
  // }, [id]);


  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
<<<<<<< HEAD
    <div className="mx-auto mb-0 mt-16 w-full max-w-[1200px]">
      <div className="text-sm text-gray-600">문화·예술</div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">함께 배우면 즐거운 스트릿 댄스</h1>
=======
    <div className="w-full max-w-[1200px] mx-auto mt-16 mb-0">
      <div className="text-sm text-gray-600">{category || '카테고리 없음'}</div>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">{title || '제목 없음'}</h1>
>>>>>>> 07d9f5a0aff042cea8e92f355bc728ed73b4c6a4
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
<<<<<<< HEAD
        <span className="text-yellow-500 ml-1 text-lg">4.9</span>
        <span className="ml-2 text-gray-600">(293)</span>
        <img src="/ping.svg" alt="ping" className="ping" />
        <span className="ml-1 text-gray-600"> 서울 중구 청계천로 100 10F</span>
=======
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
>>>>>>> 07d9f5a0aff042cea8e92f355bc728ed73b4c6a4
      </div>
    </div>
  );
};

export default Top;
