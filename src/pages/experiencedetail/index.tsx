import React from 'react';
import Top from '@/components/experiencedetail/Top';
import ExperienceDescription from '@/components/experiencedetail/ExperienceDescription';
import ReviewSection from '@/components/experiencedetail/ReviewSection';
import ReservationDetails from '@/components/experiencedetail/ReservationDetails';
import Gallery from '@/components/experiencedetail/Gallery';

const ExperienceDetailPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-8 space-y-8 bg-[#FAFAFA] min-h-screen">
      <Top />
      <div className="w-full max-w-[1200px]">
        <Gallery />
      </div>
      <div className="w-full max-w-[1200px] flex pt-8 md:space-y-0 md:space-x-8">
        <ExperienceDescription />
        <ReservationDetails />
      </div>
      <ReviewSection />
    </div>
  );
};

/* */
export default ExperienceDetailPage;
