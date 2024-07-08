import Gallery from '@/components/experiencedetail/Gallery';
import Menu from '@/components/experiencedetail/Menu';
import Top from '@/components/experiencedetail/Top';
import React from 'react';


const ExperienceDetailPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-8 space-y-8">
      <div className="flex justify-between items-center w-full max-w-screen-lg">
        <Top />
        <Menu />
      </div>
      <div className="w-full max-w-screen-lg">
        <Gallery />
      </div>
    </div>
  );
};


export default ExperienceDetailPage;