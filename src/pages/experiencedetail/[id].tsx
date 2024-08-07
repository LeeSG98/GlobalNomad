import React, { useEffect, useState } from 'react';
import Top from '@/components/experiencedetail/Top';
import { useRouter } from 'next/router';
import ExperienceDescription from '@/components/experiencedetail/ExperienceDescription';
import ReviewSection from '@/components/experiencedetail/ReviewSection';
import ReservationDetails from '@/components/experiencedetail/ReservationDetails';
import Gallery from '@/components/experiencedetail/Gallery';
import axios from 'axios';
import axiosInstance from '@/lib/axiosinstance';
import { skipToken, useQuery } from '@tanstack/react-query';
import { getActivity } from '@/api/activity';
import { getFirstSegment } from '@/utils/url-util';

const ExperienceDetailPage: React.FC = () => {
  
  const router = useRouter();
  const id = getFirstSegment(router.query?.id)



  const { data } = useQuery({
    queryKey: ['activity', { id }],
    queryFn: id ? () => getActivity(id) : skipToken,
    enabled: !!id
  })



  
 

  return (
    <div className="flex flex-col items-center p-8 space-y-8 bg-[#FAFAFA] min-h-screen">
      {data &&
      (<>
      <Top
      category={data.category}
      title={data.title}
      address={data.address}
      reviewCount={data.reviewCount}
      rating={data.rating}
      />
      <div className="w-full max-w-[1200px]">
        <Gallery
        subImages={data.subImages}
         />
      </div>
      <div className="w-full max-w-[1200px] flex pt-8 md:space-y-0 md:space-x-8">
        <ExperienceDescription
        description={data.description}
        address={data.address}
        updatedAt={data.updatedAt}
         />
        <ReservationDetails
        price={data.price}
        schedules={data.schedules}
         />
      </div>
      <ReviewSection />
      </>
    )
}
    </div>
  
  );
};



/* */
export default ExperienceDetailPage;  