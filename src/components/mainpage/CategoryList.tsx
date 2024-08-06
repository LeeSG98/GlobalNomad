import { useState } from "react";
import CategoryBox from "./CategoryBox";

type CategoryListProps = {
  categories: string[];
  onCategoryClick: (category: string) => void;
};

const CategoryList = ({ categories, onCategoryClick }: CategoryListProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < categories.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="relative flex items-center">
      <div className="relative flex w-full space-x-4 overflow-x-auto md:hidden lg:hidden">
        {categories.map((category, index) => (
          <CategoryBox
            key={index}
            category={category}
            onClick={() => onCategoryClick(category)}
          />
        ))}
      </div>
      <div className="hidden md:flex md:space-x-4">
        {currentIndex > 0 && (
          <button
            className="absolute left-0 z-10 h-full rounded-full bg-gray-200 px-2 text-green_0B"
            onClick={handlePrevClick}
          >
            &lt;
          </button>
        )}
        <div className="flex space-x-4 overflow-x-auto">
          {categories
            .slice(currentIndex, currentIndex + 4)
            .map((category, index) => (
              <CategoryBox
                key={index}
                category={category}
                onClick={() => onCategoryClick(category)}
              />
            ))}
        </div>
        {currentIndex < categories.length - 4 && (
          <button
            className="border-grey-500 absolute right-0 top-1/4 z-10 h-3/6 rounded-full border px-2 text-green_0B"
            onClick={handleNextClick}
          >
            <img
              src="/image/category_arrow_next.svg"
              alt="Star"
              className="mr-1 h-4 w-4"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default CategoryList;
