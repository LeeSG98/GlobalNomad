import { useEffect, useState } from "react";
import CardList from "./CardList";
import Pagination from "./Pagination";
import axiosInstance from "@/lib/axiosinstance";
import { useQuery } from "@tanstack/react-query";

type CardListContainerProps = {
  title: string;
};

const CardListContainer = ({ title }: CardListContainerProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  type GetActivitiesResponse = {
    cursorId?: number;
    totalCount: number;
    activities: Activity[];
  };

  interface Activity {
    id: number;
    userId: number;
    title: string;
    description: string;
    category: string;
    price: number;
    address: string;
    bannerImageUrl: string;
    rating: number;
    reviewCount: number;
    createdAt: string;
    updatedAt: string;
  }

  type GetActivitiesParams = {
    method: "offset" | "cursor";
    cursorId?: number;
    category?: string;
    keyword?: string;
    sort?: "most_reviewed" | "price_asc" | "price_desc" | "latest";
    page?: number;
    size?: number;
  };

  const getActivities = async (
    params: GetActivitiesParams,
  ): Promise<GetActivitiesResponse> => {
    const response = await axiosInstance.get("/activities", { params });
    return response.data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["activities", currentPage],
    queryFn: () => {
      return getActivities({
        method: "offset",
        page: currentPage,
        size: 8,
      });
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
