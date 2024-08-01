import React from "react";

type CardListProps = {
  links: {
    id: number;
    imageUrl: string;
    title: string;
    rating: number;
    reviewCount: number;
    price: string;
  }[];
};

const CardList = ({ links }: CardListProps) => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {links.map((link) => (
          <div key={link.id} className="mb-4 overflow-hidden">
            <div
              className="h-72 w-full rounded-2xl bg-cover bg-center"
              style={{ backgroundImage: `url(${link.imageUrl})` }}
            ></div>
            <div className="p-4">
              <div className="mt-2 flex items-center">
                <img
                  src="/image/star.svg"
                  alt="Star"
                  className="mr-1 h-4 w-4"
                />
                <span className="mr-2">{link.rating}</span>
                <span className="text-gray-500">({link.reviewCount})</span>
              </div>
              <h2 className="text-lg font-semibold">{link.title}</h2>
              <p className="mt-2 text-2xl font-bold">{link.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
