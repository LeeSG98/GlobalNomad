import React from "react";

type PolpularCardListProps = {
  links: {
    id: number;
    imageUrl: string; // 현재 사용하지 않음
    title: string;
    rating: number;
    reviewCount: number;
    price: string;
    bannerImageUrl: string; // 사용되는 프로퍼티
  }[];
  currentIndex: number;
  itemsPerPage: number;
};

const PolpularCardList = ({
  links,
  currentIndex,
  itemsPerPage,
}: PolpularCardListProps) => {
  const translateX = -currentIndex * (100 / itemsPerPage);

  return (
    <div className="overflow-x-auto scroll-snap-x-mandatory">
      <div
        className="flex transition-transform duration-300"
        style={{ transform: `translateX(${translateX}%)` }}
      >
        {links.map((link, index) => (
          <div
            key={link.id}
            className={`relative box-border h-[384px] w-[384px] flex-shrink-0 overflow-hidden rounded-2xl scroll-snap-align-start ${
              index === 0 ? "ml-0" : "mx-3"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: link.bannerImageUrl
                  ? `url(${link.bannerImageUrl})`
                  : "none", // URL이 없으면 none으로 설정
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="relative z-10 flex h-full flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent p-4">
              <div className="mt-2 flex items-center text-white">
                <img
                  src="/image/star.svg"
                  alt="Star"
                  className="mr-1 h-4 w-4"
                />
                <span className="mr-2">{link.rating}</span>
                <span className="text-gray-300">({link.reviewCount})</span>
              </div>
              <h2 className="my-5 w-[230px] text-3xl font-bold text-white">
                {link.title}
              </h2>
              <p className="mt-2 text-lg font-bold text-white">{link.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PolpularCardList;
