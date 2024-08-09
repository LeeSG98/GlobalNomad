import React from 'react';

interface Review {
  name: string;
  date: string;
  review: string;
  image: string;
}

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="flex items-start space-x-4">
      <img
        src={review.image}
        alt={`${review.name} 프로필`}
        className="w-12 h-12 rounded-full"
      />
      <div>
        <div className="flex items-center space-x-2">
          <span className="font-semibold">{review.name}</span>
          <span className="text-sm text-gray-600">{review.date}</span>
        </div>
        <p className="mt-2">{review.review}</p>
        <hr className="my-4 border-gray-300" />
      </div>
    </div>
  );
};

export default ReviewCard;
