import React, { useEffect, useState } from 'react';
import { getActivity } from '@/api/activity';
import { ActivityResponse } from '@/api/models/activity';
import { useParams } from 'react-router-dom';

const Gallery: React.FC = () => {
  const { id } = useParams<{id: string}>();
  const [activity, setActivity] = useState<ActivityResponse | null>(null);

  useEffect(() => {
    if (id) {
      const fetchActivity = async () => {
        try {
          const res = await getActivity(id);
          setActivity(res);
        } catch (error) {
          console.error('', e);
        }
      };

      fetchActivity();
    }
  }, [id]);

  return (
    <div className="flex justify-center">
      {activity?.subImages && activity.subImages.length > 0 ? (
        <div className="grid grid-cols-4 gap-2">
          <div className="col-span-2 row-span-2">
            <img
              src={activity.subImages[0]}
              alt="gallery-1"
              className="w-[595px] h-[534px] object-cover rounded"
            />
          </div>
          {activity.subImages.slice(1).map((subImages, index) => (
            <div key={index} className="col-span-1 row-span-1">
              <img
                src={subImages}
                alt={`gallery-${index + 2}`}
                className="w-[293px] h-[263px] object-cover rounded"
              />
            </div>
          ))}
        </div>
      ) : (
        <p>No images available for this activity.</p>
      )}
    </div>
  );
};

export default Gallery;
