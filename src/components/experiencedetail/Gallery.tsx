import React from "react";
import { ActivityResponse, ImageResponse } from "@/api/models/activity";

interface GalleryProps {
  subImages: ImageResponse[];
}

const Gallery: React.FC<GalleryProps> = ({ subImages }: GalleryProps) => {
  const [activity, setActivity] = React.useState<ActivityResponse | null>(null);

  return (
    <div className="flex justify-center">
      {subImages && subImages.length > 0 ? (
        <div className="grid grid-cols-4 gap-2">
          <div className="col-span-2 row-span-2">
            <img
              src={subImages[0].imageUrl} // 올바른 속성 사용
              alt="gallery-1"
              className="h-[534px] w-[595px] rounded object-cover"
            />
          </div>
          {subImages.slice(1).map((subImage, index) => (
            <div key={index} className="col-span-1 row-span-1">
              <img
                src={subImage.imageUrl} // 올바른 속성 사용
                alt={`gallery-${index + 2}`}
                className="h-[263px] w-[293px] rounded object-cover"
              />
            </div>
          ))}
        </div>
      ) : (
        <p>
          {activity?.bannerImageUrl}
          No images available for this activity.
        </p>
      )}
    </div>
  );
};

export default Gallery;
