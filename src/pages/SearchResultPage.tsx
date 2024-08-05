import getSearchResult from "@/api/getSearchResult";
import CardList from "@/components/mainpage/CardList";
import MainBanner from "@/components/mainpage/MainBanner";
import Pagination from "@/components/mainpage/Pagination";
import SearchBar from "@/components/mainpage/SearchBar";
import { ActivityInfo } from "@/types/mainPage";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const OFFSET_LIMIT = 16;

const SearchResultPage = () => {
  const [currenData, setCurrentData] = useState<ActivityInfo[]>([]);
  const [count, setCount] = useState(1);
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  const handlePageActivity = async (pageNum: number, size: number) => {
    const { activities } = await getSearchResult(
      keyword as string,
      pageNum,
      size,
    );
    setCurrentData(activities);
  };

  useEffect(() => {
    const fetchPageData = async () => {
      const data = await getSearchResult(keyword as string, 0, OFFSET_LIMIT);
      setCurrentData(data.activities);
      setCount(data.totalCount);
    };
    fetchPageData();
  }, [searchParams]);

  return (
    <div>
      <MainBanner />
      <div className="flex flex-col items-center">
        <div className="w-pc mb-32">
          <SearchBar />
          <div className="mb-[60px] mt-10 flex flex-col gap-3 text-nomad_black">
            <div className="text-[2rem]">
              <span className="font-bold">{keyword}</span>
              으로 검색한 결과입니다.
            </div>
            <div>총 {count}개의 결과</div>
          </div>
          {count ? (
            <>
              <div className="grid-cols-4grid mb-[72px] grid grid-cols-4 gap-6">
                {currenData.map((activity) => (
                  <CardList key={activity.id} links={activity} />
                ))}
              </div>
              <Pagination
                currentPage={count}
                totalPages={OFFSET_LIMIT}
                onPageChange={handlePageActivity}
              />
            </>
          ) : (
            <div>데이터가 없습니다.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResultPage;
