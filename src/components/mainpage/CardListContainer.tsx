import { useState } from "react";
import CardList from "./CardList";
import Pagination from "./Pagination";

type CardListContainerProps = {
  title: string;
  links: {
    id: number;
    imageUrl: string;
    title: string;
    rating: number;
    reviewCount: number;
    price: string;
  }[];
};

const CardListContainer = ({ title, links }: CardListContainerProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="relative">
      <div className="flex items-center justify-between">
        <h2 className="mb-4 text-2xl font-bold">{title}</h2>
      </div>
      <CardList links={links} />
      <div className="mb-[300px] mt-[72px]">
        <Pagination currentPage={currentPage} />
      </div>
    </div>
  );
};

export default CardListContainer;
