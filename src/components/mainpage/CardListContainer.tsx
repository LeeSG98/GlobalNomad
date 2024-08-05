// CardListContainer.tsx
import { useEffect, useState } from "react";
import CardList from "./CardList";
import Pagination from "./Pagination";
import { useQuery } from "@tanstack/react-query";
import { getActivities } from "@/api/api";
import {
  Activity,
  GetActivitiesParams,
  GetActivitiesResponse,
} from "@/types/mainPage";

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
  searchValue: string;
  selectedCategory: string | null;
};

const CardListContainer = ({
  title,
  searchValue,
  selectedCategory,
}: CardListContainerProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, error } = useQuery<GetActivitiesResponse>({
    queryKey: ["activities", currentPage, searchValue, selectedCategory], // Add selectedCategory to queryKey
    queryFn: () => {
      const params: GetActivitiesParams = {
        method: "offset",
        page: currentPage,
        size: 8,
        category: selectedCategory || undefined, // Add category to params
      };

      if (searchValue) {
        params.keyword = searchValue;
      }

      return getActivities(params);
    },
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const mappedLinks =
    data?.activities.map((activity) => ({
      id: activity.id,
      imageUrl: activity.bannerImageUrl,
      title: activity.title,
      rating: activity.rating,
      reviewCount: activity.reviewCount,
      price: `$${activity.price}`,
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
          <CardList links={mappedLinks} />
          <div className="mb-[300px] mt-[72px]">
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(data.totalCount / 8)}
              onPageChange={handlePageChange}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default CardListContainer;
