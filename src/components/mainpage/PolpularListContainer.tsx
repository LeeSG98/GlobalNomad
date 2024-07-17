import { useState } from "react";
import PolpularCardList from "./PolpularCardList";
import ArrowButton from "@/components/mainpage/ArrowButton";

type PolpularContainerProps = {
  title: string;
  links: {
    id: number;
    imageUrl: string;
    title: string;
    rating: number;
    reviewCount: number;
    price: string;
  }[];
  onPreviousClick: () => void;
  onNextClick: () => void;
};

const PolpularListContainer = ({
  title,
  links,
  onPreviousClick,
  onNextClick,
}: PolpularContainerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const handlePreviousClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      onPreviousClick();
    }
  };

  const handleNextClick = () => {
    if (currentIndex < links.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
    onNextClick();
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between">
        <h2 className="mb-4 text-2xl font-bold">{title}</h2>
        <div>
          <ArrowButton direction="left" onClick={handlePreviousClick} />
          <ArrowButton direction="right" onClick={handleNextClick} />
        </div>
      </div>
      <PolpularCardList
        links={links}
        currentIndex={currentIndex}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
};

export default PolpularListContainer;
