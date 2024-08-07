import React from 'react';
import { ImageResponse } from '@/api/models/activity';

interface GalleryProps {
  subImages: ImageResponse[]
}

const Gallery: React.FC<GalleryProps> = ({ subImages }: GalleryProps) => {
  console.log('subImages:', subImages);

  return (
    <div className="flex justify-center">
      {subImages && subImages.length > 0 ? (
        <div className="grid grid-cols-4 gap-2">
          <div className="col-span-2 row-span-2">
            <img
              src={subImages[0].imageUrl}
              alt="gallery-1"
              className="w-[595px] h-[534px] object-cover rounded"
            />
          </div>
          {subImages.slice(1).map((subImage, index) => (
            <div key={index} className="col-span-1 row-span-1">
              <img
                src={subImage.imageUrl}
                alt={`gallery-${index + 2}`}
                className="w-[293px] h-[263px] object-cover rounded"
              />
            </div>
          ))}
        </div>
      ) : (
        <p>No images.</p>
      )}
    </div>
  );
};

export default Gallery;
