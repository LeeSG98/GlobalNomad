import priceToWon from "@/utils/priceToWon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type CardListProps = {
  links: {
    id: number;
    imageUrl: string;
    title: string;
    rating: number;
    reviewCount: number;
    price: number;
  }[];
};

const CardList = ({ links }: CardListProps) => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-4 gap-4 sm:grid-cols-2">
        {links.map((link) => (
          <Link key={link.id} href={`/experiencedetail/${link.id}`} passHref>
            <div className="mb-4 cursor-pointer overflow-hidden">
              <div className="relative h-72 w-full overflow-hidden rounded-2xl">
                <Image
                  className="hover:scale-130 absolute left-0 top-0 transform rounded-2xl transition-transform duration-300 ease-in-out"
                  alt={link.title}
                  src={link.imageUrl}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
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
                <p className="mt-2 text-2xl font-bold">
                  {priceToWon(link.price)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardList;
