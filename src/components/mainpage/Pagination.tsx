type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="mt-4 flex justify-center space-x-2">
      <button
        onClick={handlePrevPage}
        className="w-[55px] rounded-2xl border border-gray_DD px-4 py-3"
        disabled={currentPage === 1}
      >
        <img
          className="mx-auto"
          src="image/arrow_pagination_left.svg"
          alt="pagination_left"
        />
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-[55px] rounded-2xl border border-green_0B px-4 py-3 text-green_0B ${page === currentPage ? "bg-green_0B text-white" : ""}`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={handleNextPage}
        className="w-[55px] rounded-2xl border border-green_0B px-4 py-3"
        disabled={currentPage === totalPages}
      >
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
