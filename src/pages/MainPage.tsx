import React, { useState } from "react";
import Layout from "@/components/mainpage/Layout";
import SearchBar from "@/components/mainpage/SearchBar";
import MainToolBar from "@/components/mainpage/MainToolBar";
import PolpularListContainer from "@/components/mainpage/PolpularListContainer";
import CardListContainer from "@/components/mainpage/CardListContainer";
import MainLayout from "@/components/mainpage/MainLayout";
import CategoryList from "@/components/mainpage/CategoryList";
import PriceFilter from "@/components/mainpage/PriceFilter";
import axiosInstance from "@/lib/axiosinstance";
import { useQuery } from "@tanstack/react-query";

const MainPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedFolderId, setSelectedFolderId] = useState<string | null>(null);
  const [selectedPriceOption, setSelectedPriceOption] =
    useState<string>("가격");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchCloseClick = () => {
    setSearchValue("");
  };

  const handleFolderClick = (folderId: string) => {
    setSelectedFolderId(folderId);
  };

  const handlePreviousClick = () => {};

  const handleNextClick = () => {};

  const handleCategoryClick = (category: string) => {};

  const handlePriceOptionChange = (option: string) => {
    setSelectedPriceOption(option);
  };

  const categories = ["문화/예술", "식음료", "스포츠", "투어", "관광", "웰빙"];
  const priceOptions = ["가격", "가격높은순", "가격낮은순"];

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
    queryKey: ["activities", searchValue, selectedPriceOption],
    queryFn: () => {
      const params: GetActivitiesParams = {
        method: "offset",
        page: 1,
        size: 8,
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

  const filteredLinks = data?.activities || [];

  return (
    <Layout isSticky={false}>
      <MainLayout
        searchBar={
          <SearchBar
            value={searchValue}
            onChange={handleSearchChange}
            onCloseClick={handleSearchCloseClick}
          />
        }
        mainToolBar={
          <MainToolBar
            folders={[]}
            selectedFolderId={selectedFolderId}
            onFolderClick={handleFolderClick}
          />
        }
        cardList={
          <>
            {isLoading ? (
              <div>Loading...</div>
            ) : error ? (
              <div>Error fetching data</div>
            ) : (
              <>
                <PolpularListContainer
                  title="🔥 인기 체험"
                  links={filteredLinks}
                  onPreviousClick={handlePreviousClick}
                  onNextClick={handleNextClick}
                />
                <div className="my-16 flex items-center justify-between">
                  <CategoryList
                    categories={categories}
                    onCategoryClick={handleCategoryClick}
                  />
                  <div className="">
                    <PriceFilter
                      options={priceOptions}
                      selectedOption={selectedPriceOption}
                      onChange={handlePriceOptionChange}
                    />
                  </div>
                </div>
                <CardListContainer title="🛼 모든 체험" links={filteredLinks} />
              </>
            )}
          </>
        }
      />
    </Layout>
  );
};

export default MainPage;
