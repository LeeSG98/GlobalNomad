import React, { useState } from "react";
import Layout from "@/components/mainpage/Layout";
import SearchBar from "@/components/mainpage/SearchBar";
import MainToolBar from "@/components/mainpage/MainToolBar";
import PolpularListContainer from "@/components/mainpage/PolpularListContainer";
import CardListContainer from "@/components/mainpage/CardListContainer";
import MainLayout from "@/components/mainpage/MainLayout";
import CategoryList from "@/components/mainpage/CategoryList";
import PriceFilter from "@/components/mainpage/PriceFilter";

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

  const links = [
    {
      id: 1,
      imageUrl: "/image/cardListImg01.jpg",
      title: "함께 배우면 즐거운 스트릿 댄스",
      rating: 4.9,
      reviewCount: 793,
      price: "₩ 38,000/인",
    },
    {
      id: 2,
      imageUrl: "/image/cardListImg02.jpg",
      title: "연인과 사랑의 징검다리 건너기",
      rating: 4.9,
      reviewCount: 592,
      price: "₩ 5,600/인",
    },
    {
      id: 3,
      imageUrl: "/image/cardListImg03.jpg",
      title: "VR 게임 마스터",
      rating: 4.9,
      reviewCount: 283,
      price: "₩ 38,000/인",
    },
    {
      id: 4,
      imageUrl: "/image/cardListImg03.jpg",
      title: "VR 게임 마스터",
      rating: 4.9,
      reviewCount: 283,
      price: "₩ 38,000/인",
    },
    {
      id: 5,
      imageUrl: "/image/cardListImg03.jpg",
      title: "VR 게임 마스터",
      rating: 4.9,
      reviewCount: 283,
      price: "₩ 38,000/인",
    },
    {
      id: 6,
      imageUrl: "/image/cardListImg02.jpg",
      title: "연인과 사랑의 징검다리 건너기",
      rating: 4.9,
      reviewCount: 592,
      price: "₩ 5,600/인",
    },
    {
      id: 7,
      imageUrl: "/image/cardListImg01.jpg",
      title: "함께 배우면 즐거운 스트릿 댄스77",
      rating: 4.9,
      reviewCount: 793,
      price: "₩ 38,000/인",
    },
    {
      id: 8,
      imageUrl: "/image/cardListImg02.jpg",
      title: "연인과 사랑의 징검다리 건너기666",
      rating: 4.9,
      reviewCount: 592,
      price: "₩ 5,600/인",
    },
    {
      id: 9,
      imageUrl: "/image/cardListImg01.jpg",
      title: "함께 배우면 즐거운 스트릿 댄스555",
      rating: 4.9,
      reviewCount: 793,
      price: "₩ 38,000/인",
    },
    {
      id: 10,
      imageUrl: "/image/cardListImg02.jpg",
      title: "연인과 사랑의 징검다리 건너기",
      rating: 4.9,
      reviewCount: 592,
      price: "₩ 5,600/인",
    },
    {
      id: 11,
      imageUrl: "/image/cardListImg03.jpg",
      title: "VR 게임 마스터",
      rating: 4.9,
      reviewCount: 283,
      price: "₩ 38,000/인",
    },
    {
      id: 4,
      imageUrl: "/image/cardListImg03.jpg",
      title: "VR 게임 마스터",
      rating: 4.9,
      reviewCount: 283,
      price: "₩ 38,000/인",
    },
    {
      id: 12,
      imageUrl: "/image/cardListImg03.jpg",
      title: "VR 게임 마스터",
      rating: 4.9,
      reviewCount: 283,
      price: "₩ 38,000/인",
    },
    {
      id: 13,
      imageUrl: "/image/cardListImg02.jpg",
      title: "연인과 사랑의 징검다리 건너기444",
      rating: 4.9,
      reviewCount: 592,
      price: "₩ 5,600/인",
    },
    {
      id: 14,
      imageUrl: "/image/cardListImg01.jpg",
      title: "함께 배우면 즐거운 스트릿 댄스333",
      rating: 4.9,
      reviewCount: 793,
      price: "₩ 38,000/인",
    },
    {
      id: 15,
      imageUrl: "/image/cardListImg02.jpg",
      title: "연인과 사랑의 징검다리 건너기222",
      rating: 4.9,
      reviewCount: 592,
      price: "₩ 5,600/인",
    },
    {
      id: 15,
      imageUrl: "/image/cardListImg02.jpg",
      title: "연인과 사랑의 ㅇㅇㅇ징검다리 건너기222",
      rating: 4.9,
      reviewCount: 592,
      price: "₩ 5,600/인",
    },
  ];

  const filteredLinks = links.filter((link) =>
    link.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

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
            <PolpularListContainer
              title="🔥 인기 체험"
              links={links}
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
        }
      />
    </Layout>
  );
};

export default MainPage;
