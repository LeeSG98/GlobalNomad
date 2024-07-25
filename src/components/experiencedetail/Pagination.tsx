import React from 'react';

interface PaginationProps {
  reviewsPerPage: number;
  totalReviews: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ reviewsPerPage, totalReviews, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalReviews / reviewsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center mt-6">
      <ul className="flex items-center space-x-2">
        <li>
          <button
            onClick={() => paginate(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-full border ${currentPage === 1 ? 'bg-gray-300' : 'bg-white'} text-gray-700`}
            style={{ borderColor: '#0B3B2D', color: '#0B3B2D', borderRadius: '15px' }}
          >
            &lt;
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`px-4 py-2 rounded-full border ${currentPage === number ? 'bg-[#0B3B2D] text-white' : 'bg-white text-gray-700'}`}
              style={{ borderColor: '#0B3B2D', borderRadius: '15px' }}
            >
              {number}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => paginate(Math.min(pageNumbers.length, currentPage + 1))}
            disabled={currentPage === pageNumbers.length}
            className={`px-4 py-2 rounded-full border ${currentPage === pageNumbers.length ? 'bg-gray-300' : 'bg-white'} text-gray-700`}
            style={{ borderColor: '#0B3B2D', color: '#0B3B2D', borderRadius: '15px' }}
          >
            &gt;
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
