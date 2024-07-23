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
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLinks = links.filter((link) =>
    link.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const cardsPerPage = 8;
  const totalPages = Math.ceil(filteredLinks.length / cardsPerPage);

  const currentLinks = filteredLinks.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage,
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between">
        <h2 className="mb-4 text-2xl font-bold">{title}</h2>
      </div>
      <CardList links={currentLinks} />
      <div className="mb-[300px] mt-[72px]">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default CardListContainer;
