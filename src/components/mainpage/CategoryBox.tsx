type CategoryBoxProps = {
  category: string;
  isSelected: boolean;
  onClick: () => void;
};

const CategoryBox = ({ category, isSelected, onClick }: CategoryBoxProps) => {
  return (
    <div
      className={`w-[127px] cursor-pointer rounded-2xl border border-green_0B px-4 py-4 text-center text-green_0B ${isSelected ? "bg-green_0B text-white" : ""}`}
      onClick={onClick}
    >
      {category}
    </div>
  );
};

export default CategoryBox;
