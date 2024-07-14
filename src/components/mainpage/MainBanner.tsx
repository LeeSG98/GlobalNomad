import React from "react";

const MainBanner = () => {
  return (
    <div
      className="relative h-[550px] w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/image/mainBanner.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-4 text-left sm:px-6 lg:px-8">
          <h1 className="text-7xl font-bold leading-[81.15px] text-white">
            함께 배우면 즐거운
          </h1>
          <h1 className="text-7xl font-bold text-white">스트릿 댄스</h1>
          <p className="mt-2 text-xl text-white">1월의 인기 체험 BEST 🔥</p>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
