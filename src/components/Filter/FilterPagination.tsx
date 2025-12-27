import { useState } from 'react';

interface FilterPaginationProps {
  onChangeLimit: (value: number) => void;
  onChangePage?: (value: number) => void;
}

export default function FilterPagination({ onChangeLimit, onChangePage }: FilterPaginationProps) {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
    onChangePage?.(Number(currentPage - 1));
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
    onChangePage?.(Number(currentPage + 1));
  };
  return (
    <div className="flex gap-5 md:gap-10">
      <div>
        <select
          id="limitItems"
          className="w-full px-4 py-2.5 text-white rounded-lg border-none outline-none bg-gray-900"
          onChange={e => onChangeLimit?.(Number(e.target.value))}
        >
          <option value="4">4 items</option>
          <option value="8" selected>
            8 items
          </option>
          <option value="12">12 items</option>
          <option value="16">16 items</option>
          <option value="0">Show all</option>
        </select>
      </div>

      <div>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePreviousPage}
            id="prevBtn"
            className="px-4 py-2.5 border border-gray-200 rounded-lg bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentPage === 0}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <span id="pageInfo" className="text-sm font-medium text-gray-700 min-w-14 text-center md:min-w-20">
            Page {currentPage + 1}
          </span>
          <button
            onClick={handleNextPage}
            id="nextBtn"
            className="px-4 py-2.5 border border-gray-200 rounded-lg bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
