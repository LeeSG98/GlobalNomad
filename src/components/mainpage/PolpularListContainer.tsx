import { useState, useEffect } from "react";
import ArrowButton from "@/components/mainpage/ArrowButton";
import { ActivityResponse } from "@/types/mainPage";
import getPopularActivity from "@/api/getPopularActivity";
import PolpularCardList from "./PolpularCardList";

const PopularListContainer = ({
  title,
  onPreviousClick,
  onNextClick,
}: {
  title: string;
  onPreviousClick: () => void;
  onNextClick: () => void;
}) => {
  const [links, setLinks] = useState<ActivityResponse["activities"]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalCount, setTotalCount] = useState(0); // Total count를 상태로 관리할 수 있음
  const itemsPerPage = 3;

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPopularActivity();
      setLinks(response.activities);
      setTotalCount(response.totalCount);
    };

    fetchData();
  }, []);

  const handlePreviousClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      onPreviousClick();
    }
  };

  const handleNextClick = () => {
    if (currentIndex < totalCount - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
      onNextClick();
    }
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

export default PopularListContainer;
