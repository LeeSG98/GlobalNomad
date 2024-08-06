import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getActivities } from "@/api/api";
import ArrowButton from "@/components/mainpage/ArrowButton";
import getPopularActivity from "@/api/getPopularActivity";
import PolpularCardList from "./PolpularCardList";
import { GetActivitiesParams, GetActivitiesResponse } from "@/types/mainPage";

const PopularListContainer = ({
  title,
  onPreviousClick,
  onNextClick,
}: {
  title: string;
  onPreviousClick: () => void;
  onNextClick: () => void;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalCount, setTotalCount] = useState(0); // Total count를 상태로 관리할 수 있음
  const itemsPerPage = 3;
  const { data, isLoading, error } = useQuery<GetActivitiesResponse>({
    queryKey: ["activities"],
    queryFn: () => {
      const params: GetActivitiesParams = {
        method: "offset",
        size: 8,
      };
      return getActivities(params);
    },
  });

  const mappedLinks =
    data?.activities.map((activity) => ({
      id: activity.id,
      imageUrl: activity.bannerImageUrl,
      title: activity.title,
      rating: activity.rating,
      reviewCount: activity.reviewCount,
      price: activity.price,
    })) || [];

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPopularActivity();
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
        links={mappedLinks}
        currentIndex={currentIndex}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
};

export default PopularListContainer;
