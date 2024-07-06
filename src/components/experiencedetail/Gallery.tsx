// src/components/experiencedetail/Gallery.tsx
import React from 'react';

const images = [
  '/dance.jpg',
  '/dance1.jpg',
  '/dance2.jpg',
  '/dance3.jpg',
  '/dance4.jpg',
];

const Gallery: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-4 gap-2">
        <div className="col-span-2 row-span-2">
          <img
            src={images[0]}
            alt="gallery-1"
            className="w-[595px] h-[534px] object-cover rounded"
          />
        </div>
        {images.slice(1).map((image, index) => (
          <div key={index} className="col-span-1 row-span-1">
            <img
              src={image}
              alt={`gallery-${index + 2}`}
              className="w-[293px] h-[263px] object-cover rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
