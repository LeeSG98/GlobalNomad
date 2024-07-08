import React from 'react';

const Map: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold">위치</h2>
      <iframe
        className="w-full h-64 rounded-lg"
        src="https://maps.google.com/maps?q=서울%20중구%20장충단로%20100%2010F&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameBorder="0"
        allowFullScreen={false}
        aria-hidden="false"
        tabIndex={0}
        title="location"
      />
    </div>
  );
};

export default Map;
