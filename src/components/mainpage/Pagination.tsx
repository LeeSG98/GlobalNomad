type PaginationProps = {
  currentPage: number;
};

const Pagination = ({ currentPage }: PaginationProps) => {
  const pages = [];
  for (let i = 1; i <= 5; i++) {
    pages.push(i);
  }

  return (
    <div className="mt-4 flex justify-center space-x-2">
      <button className="w-[55px] rounded-2xl border border-gray_DD px-4 py-3">
        <img
          className="mx-auto"
          src="image/arrow_pagination_left.svg"
          alt="pagination_right"
        />
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`w-[55px] rounded-2xl border border-green_0B px-4 py-3 text-green_0B ${page === currentPage ? "bg-green_0B text-white" : ""}`}
        >
          {page}
        </button>
      ))}
      <button className="w-[55px] rounded-2xl border border-green_0B px-4 py-3">
        <img
          className="mx-auto"
          src="image/arrow_pagination_right.svg"
          alt="pagination_right"
        />
      </button>
    </div>
  );
};

export default Pagination;
