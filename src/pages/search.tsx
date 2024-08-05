import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { GetActivitiesResponse } from "@/types/mainPage";
import getSearchResult from "@/api/getSearchResult";
import MainBanner from "@/components/mainpage/MainBanner";
import SearchBar from "@/components/mainpage/SearchBar";
import CardList from "@/components/mainpage/CardList";
import Pagination from "@/components/mainpage/Pagination";

const SearchResults = () => {
  const router = useRouter();
  const { keyword } = router.query;
  const [results, setResults] = useState<GetActivitiesResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const fetchResults = async (pageNum: number) => {
    if (typeof keyword === "string") {
      try {
        setLoading(true);
        const data = await getSearchResult(keyword, pageNum - 1, 8);
        setResults(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setError("검색 결과를 가져오는 중 오류가 발생했습니다.");
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchResults(currentPage);
  }, [keyword, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <MainBanner />
      <div className="w-full max-w-6xl px-4 py-8">
        <div className="mb-6 flex flex-col items-start">
          <div className="w-full max-w-3xl">
            <SearchBar />
          </div>
        </div>
        <h1 className="mb-6 text-2xl font-bold">
          "{keyword}"에 대한 검색 결과입니다.
        </h1>
        {loading && <div className="text-center">로딩 중...</div>}
        {error && <div className="text-center">{error}</div>}
        {results && results.activities.length > 0 ? (
          <div className="flex flex-col items-center">
            <CardList
              links={results.activities.map((activity) => ({
                id: activity.id,
                imageUrl: activity.imageUrl,
                title: activity.title,
                rating: activity.rating,
                reviewCount: activity.reviewCount,
                price: activity.price,
              }))}
            />
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(results.totalCount / 8)}
              onPageChange={handlePageChange}
            />
          </div>
        ) : (
          !loading &&
          !error && <div className="text-center">검색 결과가 없습니다.</div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
