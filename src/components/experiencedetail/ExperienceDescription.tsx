import React, { useEffect, useState } from 'react';
import { getActivity } from '@/api/activity';
import { ActivityResponse } from '@/api/models/activity';
import { useParams } from 'react-router-dom';

const ExperienceDescription: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activity, setActivity] = useState<ActivityResponse | null>(null);

  useEffect(() => {
    if (id) {
      const fetchActivity = async () => {
        try {
          const res = await getActivity(id);
          setActivity(res);
        } catch (error) {
          console.error('Error fetching activity:', error);
        }
      };

      fetchActivity();
    }
  }, [id]);

  return (
    <div className="flex flex-col w-full md:w-2/3">
      <hr className="my-4 border-gray-300" />
      <h2 className="text-xl font-semibold mb-4">체험 설명</h2>
      <p className="mb-4">
        {activity?.description || '체험 설명을 불러오지 못했습니다.'}
      </p>
      <hr className="my-4 border-gray-300" />
      <div className="mb-8">
        <img
          src="map.jpg" // API에서 지도 이미지 URL을 받을 경우, 여기에 activity.mapUrl 같은 속성을 사용
          alt="Map"
          className="w-full h-auto"
        />
        <p className="text-sm text-gray-600 mt-2">
          {activity?.imageUrl || '위치 정보를 불러오지 못했습니다.'}
        </p>
      </div>
      <hr className="my-4 border-gray-300" />
    </div>
  );
};

export default ExperienceDescription;
