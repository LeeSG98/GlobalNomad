import React, { useState } from 'react';
import ReviewCard from './ReviewCard';
import Pagination from './Pagination';

const reviews = [
  {
    name: '김태현',
    date: '2023. 2. 4',
    review: '저는 저희 스트릿 댄서 체험에 참가하게 된 지 얼마 안됐지만, 정말 즐거운 시간을 보냈습니다. 새로운 스타일과 춤추기를 좋아하는 나에게 정말 적합한 체험이었고, 전문가가 직접 강사로 참여하기 때문에 어떤 수준의 춤추는 사람도 쉽게 이해할 수 있었습니다. 강사님께서 정말 친절하게 설명해주셔서 정말 좋았고, 이번 체험을 거쳐 새로운 스타일과 춤추기에 대한 열정이 더욱 생겼습니다. 저는 이 체험을 적극 추천합니다!',
    image: '/face1.png',
  },
  {
    name: '조민선',
    date: '2023. 2. 4',
    review: '저는 저희 스트릿 댄서 체험에 참가하게 된 지 얼마 안됐지만, 정말 즐거운 시간을 보냈습니다. 전문가가 직접 강사로 참여하기 때문에 어떤 수준의 춤추는 사람도 쉽게 이해할 수 있었고, 강사님의 친절한 설명 덕분에 저는 새로운 스타일과 춤추기에 대한 열정이 더욱 생겼습니다.',
    image: '/face2.png',
  },
  {
    name: '강지현',
    date: '2023. 2. 4',
    review: '전문가가 직접 강사로 참여하기 때문에 어떤 수준의 춤추는 사람도 쉽게 이해할 수 있었습니다. 이번 체험을 거쳐 저의 춤추기 실력을 더욱 향상되었어요.',
    image: '/face3.png',
  },
  {
    name: '이소라',
    date: '2023. 3. 10',
    review: '정말 유익한 시간이었어요. 강사님의 설명이 너무 자세하고 이해하기 쉬웠습니다.',
    image: '/face4.png',
  },
  {
    name: '박지성',
    date: '2023. 4. 15',
    review: '다시 참여하고 싶은 체험이었어요. 새로운 친구들도 사귀고 즐거운 시간을 보냈습니다.',
    image: '/face5.png',
  },
  {
    name: '최수진',
    date: '2023. 5. 20',
    review: '강사님 덕분에 춤에 대한 자신감이 생겼습니다. 정말 감사드려요!',
    image: '/face6.png',
  },
];

const ReviewSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 3;

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="w-full max-w-[1200px] mt-8">
      <h2 className="text-xl font-semibold mb-4">후기</h2>
      <div className="flex items-center mb-4">
        <span className="text-4xl font-bold" style={{ fontSize: '50px' }}>4.2</span>
        <div className="ml-4">
          <span className="text-lg font-semibold">매우 만족</span>
          <div className="flex items-center text-sm text-gray-600">
            <img src="/star.svg" alt="star" className="w-4 h-4 mr-1" />
            1,300개 후기
          </div>
        </div>
      </div>
      <hr className="my-4 border-gray-300" />
      <div className="space-y-4">
        {currentReviews.length > 0 ? (
          currentReviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))
        ) : (
          <div className="text-center text-gray-500">리뷰가 없습니다.</div>
        )}
      </div>
      <Pagination
        reviewsPerPage={reviewsPerPage}
        totalReviews={15}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default ReviewSection;
