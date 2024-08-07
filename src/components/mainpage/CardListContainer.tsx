import { useEffect, useState } from "react";
import CardList from "./CardList";
import Pagination from "./Pagination";
import { useQuery } from "@tanstack/react-query";
import { getActivities } from "@/api/api";
import { GetActivitiesParams, GetActivitiesResponse } from "@/types/mainPage";
import PriceFilter from "./PriceFilter";

type CardListContainerProps = {
  title: string;
  searchValue: string;
  selectedCategory: string | null;
  selectedPriceOption: string; // 추가된 props
};

const CardListContainer = ({
  title,
  searchValue,
  selectedCategory,
  selectedPriceOption, // 추가된 props
}: CardListContainerProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, error } = useQuery<GetActivitiesResponse>({
    queryKey: [
      "activities",
      currentPage,
      searchValue,
      selectedCategory,
      selectedPriceOption,
    ],
    queryFn: () => {
      const params: GetActivitiesParams = {
        method: "offset",
        page: currentPage,
        size: 8,
        category: selectedCategory || undefined,
        sort:
          selectedPriceOption === "가격높은순"
            ? "price_desc"
            : selectedPriceOption === "가격낮은순"
              ? "price_asc"
              : undefined,
      };

      if (searchValue) {
        params.keyword = searchValue;
      }

      return getActivities(params);
    },
  });

  useEffect(() => {}, [data]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const sortedLinks =
    data?.activities.map((activity) => ({
      id: activity.id,
      imageUrl: activity.bannerImageUrl,
      title: activity.title,
      rating: activity.rating,
      reviewCount: activity.reviewCount,
      price: activity.price,
    })) || [];

  return (
    <div className="relative">
      <div className="flex items-center justify-between">
        <h2 className="mb-4 text-2xl font-bold">{title}</h2>
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error fetching data</div>
      ) : (
        <>
          <CardList links={sortedLinks} />
          <div className="mb-[300px] mt-[72px]">
            <Pagination
              currentPage={currentPage}
              totalPages={data ? Math.ceil(data.totalCount / 8) : 1}
              onPageChange={handlePageChange}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default CardListContainer;
