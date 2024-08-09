import React, { useState } from "react";
import Layout from "@/components/mainpage/Layout";
import SearchBar from "@/components/mainpage/SearchBar";
import MainToolBar from "@/components/mainpage/MainToolBar";
import PolpularListContainer from "@/components/mainpage/PolpularListContainer";
import CardListContainer from "@/components/mainpage/CardListContainer";
import MainLayout from "@/components/mainpage/MainLayout";
import CategoryList from "@/components/mainpage/CategoryList";
import PriceFilter from "@/components/mainpage/PriceFilter";
import { useQuery } from "@tanstack/react-query";
import { getActivities } from "@/api/api";
import { GetActivitiesParams, GetActivitiesResponse } from "@/types/mainPage";

const MainPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedFolderId, setSelectedFolderId] = useState<string | null>(null);
  const [selectedPriceOption, setSelectedPriceOption] =
    useState<string>("가격");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

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

  const handleCategoryClick = (category: string | null) => {
    setSelectedCategory(category);
  };

  const handlePriceOptionChange = (option: string) => {
    setSelectedPriceOption(option);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const categories = [
    "문화 · 예술",
    "식음료",
    "스포츠",
    "투어",
    "관광",
    "웰빙",
  ];
  const priceOptions = ["최신순", "가격높은순", "가격낮은순"];

  const { data, isLoading, error } = useQuery({
    queryKey: [
      "activities",
      searchValue,
      selectedPriceOption,
      selectedCategory,
      currentPage,
    ],
    queryFn: () => {
      const params: GetActivitiesParams = {
        method: "offset",
        page: currentPage,
        size: 8,
        sort:
          selectedPriceOption === "가격높은순"
            ? "price_desc"
            : selectedPriceOption === "가격낮은순"
              ? "price_asc"
              : undefined,
        category: selectedCategory || undefined,
      };

      if (searchValue) {
        params.keyword = searchValue;
      }

      return getActivities(params);
    },
  });

  return (
    <Layout isSticky={false}>
      <MainLayout
        searchBar={<SearchBar />}
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
                {!searchValue && (
                  <PolpularListContainer
                    title="🔥 인기 체험"
                    onPreviousClick={handlePreviousClick}
                    onNextClick={handleNextClick}
                  />
                )}
                <div className="my-16 flex items-center justify-between">
                  <CategoryList
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onCategoryClick={handleCategoryClick}
                  />
                  <PriceFilter
                    options={priceOptions}
                    selectedOption={selectedPriceOption}
                    onChange={handlePriceOptionChange}
                  />
                </div>
                <CardListContainer
                  title="🛼 모든 체험"
                  searchValue={searchValue}
                  selectedCategory={selectedCategory}
                  selectedPriceOption={selectedPriceOption}
                />
              </>
            )}
          </>
        }
      />
    </Layout>
  );
};

export default MainPage;
