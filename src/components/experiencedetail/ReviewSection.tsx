import React, { useState, useEffect } from 'react';
import ReviewCard from './ReviewCard';
import Pagination from './Pagination';
import { useParams } from 'react-router-dom';
import { getActivity } from '@/api/activity';
import { ActivityResponse, ReviewResponse } from '@/api/models/activity';

const ReviewSection: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [currentPage, setCurrentPage] = useState(1);
  const [reviews, setReviews] = useState<ReviewResponse[]>([]);
  const [averageRating, setAverageRating] = useState<number>(0);
  const [totalReviewCount, setTotalReviewCount] = useState<number>(0);
  const reviewsPerPage = 3;

  useEffect(() => {
    if (id) {
      const fetchReviews = async () => {
        try {
          const activity: ActivityResponse = await getActivity(id);
          setReviews(activity.reviews); // API로부터 받은 리뷰 데이터 설정
          setAverageRating(activity.rating); // API로부터 받은 평균 평점 설정
          setTotalReviewCount(activity.reviewCount); // API로부터 받은 총 리뷰 개수 설정
        } catch (error) {
          console.error('Error fetching reviews:', error);
        }
      };

      fetchReviews();
    }
  }, [id]);

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="w-full max-w-[1200px] mt-8">
      <h2 className="text-xl font-semibold mb-4">후기</h2>
      <div className="flex items-center mb-4">
        <span className="text-4xl font-bold" style={{ fontSize: '50px' }}>
          {averageRating.toFixed(1)}
        </span>
        <div className="ml-4">
          <span className="text-lg font-semibold">매우 만족</span>
          <div className="flex items-center text-sm text-gray-600">
            <img src="/star.svg" alt="star" className="w-4 h-4 mr-1" />
            {totalReviewCount}개 후기
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
        totalReviews={totalReviewCount}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default ReviewSection;
