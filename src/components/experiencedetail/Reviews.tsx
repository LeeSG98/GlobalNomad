import React from 'react';

const reviews = [
  { id: 1, name: '강태성', date: '2023.2.4', text: '' },
  { id: 2, name: '포민진', date: '2023.2.4', text: '' },
  { id: 3, name: '강재영', date: '2023.2.4', text: '' },
];

const Reviews: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold">후기</h2>
      <div className="space-y-4">
        {reviews.map(review => (
          <div key={review.id} className="border p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <span className="font-bold">{review.name}</span>
              <span className="ml-4 text-gray-500">{review.date}</span>
            </div>
            <p className="text-gray-700">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
