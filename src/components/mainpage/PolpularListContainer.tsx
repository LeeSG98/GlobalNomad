// import { useState, useEffect } from "react";
// import ArrowButton from "@/components/mainpage/ArrowButton";
// import getPopularActivity from "@/api/getPopularActivity";
// import PolpularCardList from "./PolpularCardList";
// import { GetActivitiesResponse } from "@/types/mainPage";

// const PopularListContainer = ({
//   title,
//   onPreviousClick,
//   onNextClick,
// }: {
//   title: string;
//   onPreviousClick: () => void;
//   onNextClick: () => void;
// }) => {
//   const [links, setLinks] = useState<GetActivitiesResponse["activities"]>([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [totalCount, setTotalCount] = useState(0); // Total count를 상태로 관리할 수 있음
//   const itemsPerPage = 3;

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await getPopularActivity();
//       setLinks(response.activities);
//       setTotalCount(response.totalCount);
//     };

//     fetchData();
//   }, []);

//   const handlePreviousClick = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//       onPreviousClick();
//     }
//   };

//   const handleNextClick = () => {
//     if (currentIndex < totalCount - itemsPerPage) {
//       setCurrentIndex(currentIndex + 1);
//       onNextClick();
//     }
//   };

//   return (
//     <div className="relative">
//       <div className="flex items-center justify-between">
//         <h2 className="mb-4 text-2xl font-bold">{title}</h2>
//         <div>
//           <ArrowButton direction="left" onClick={handlePreviousClick} />
//           <ArrowButton direction="right" onClick={handleNextClick} />
//         </div>
//       </div>
//       <PolpularCardList
//         links={links}
//         currentIndex={currentIndex}
//         itemsPerPage={itemsPerPage}
//       />
//     </div>
//   );
// };

// export default PopularListContainer;

import { useState, useEffect } from "react";
import ArrowButton from "@/components/mainpage/ArrowButton";
import getPopularActivity from "@/api/getPopularActivity";
import PolpularCardList from "./PolpularCardList";
import { GetActivitiesResponse } from "@/types/mainPage";

const PopularListContainer = ({
  title,
  onPreviousClick,
  onNextClick,
}: {
  title: string;
  onPreviousClick: () => void;
  onNextClick: () => void;
}) => {
  const [links, setLinks] = useState<GetActivitiesResponse["activities"]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPopularActivity();
      setLinks(response.activities);
      setTotalCount(response.totalCount);
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Update `currentIndex` if it exceeds the range after data update
    setCurrentIndex((prevIndex) =>
      Math.max(0, Math.min(prevIndex, Math.max(totalCount - itemsPerPage, 0))),
    );
  }, [links, totalCount, itemsPerPage]);

  const handlePreviousClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
      onPreviousClick();
    }
  };

  const handleNextClick = () => {
    if (currentIndex < totalCount - itemsPerPage) {
      setCurrentIndex((prevIndex) =>
        Math.min(prevIndex + itemsPerPage, totalCount - itemsPerPage),
      );
      onNextClick();
    }
  };

  const isPreviousDisabled = currentIndex <= 0 || links.length === 0;
  const isNextDisabled =
    currentIndex >= totalCount - itemsPerPage || links.length === 0;

  return (
    <div className="relative">
      <div className="flex items-center justify-between">
        <h2 className="mb-4 text-2xl font-bold">{title}</h2>
        <div>
          <ArrowButton
            direction="left"
            onClick={handlePreviousClick}
            disabled={isPreviousDisabled}
          />
          <ArrowButton
            direction="right"
            onClick={handleNextClick}
            disabled={isNextDisabled}
          />
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
