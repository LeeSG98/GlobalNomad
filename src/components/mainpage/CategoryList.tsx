import React from "react";
import CategoryBox from "./CategoryBox";

type CategoryListProps = {
  categories: string[];
  onCategoryClick: (category: string) => void;
};

const CategoryList = ({ categories, onCategoryClick }: CategoryListProps) => {
  return (
    <div className="flex space-x-4 overflow-x-auto">
      {categories.map((category, index) => (
        <CategoryBox
          key={index}
          category={category}
          onClick={() => onCategoryClick(category)}
        />
      ))}
    </div>
  );
};

export default CategoryList;
