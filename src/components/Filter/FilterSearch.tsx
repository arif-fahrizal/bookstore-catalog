import { useState } from 'react';

interface SearchProps {
  onChange?: (value: string) => void;
}

export default function Search({ onChange }: SearchProps) {
  const [search, setSearch] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onChange?.(search);
  };

  return (
    <form method="get" onSubmit={handleSearch} className="max-w-7xl w-full mx-auto">
      <label htmlFor="search-input" className="relative">
        <input
          type="text"
          id="searchInput"
          placeholder="Search for books..."
          className="w-full px-6 py-4 pr-12 text-white rounded-full border-none outline-none bg-gray-900 placeholder-gray-400 shadow-sm"
          onChange={e => setSearch(e.target.value)}
        />
        <svg
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </label>
    </form>
  );
}
