'use client';

import CardProduct from '@/src/components/Cards/CardProduct';
import CardSkeletonLoader from '@/src/components/Cards/CardSkeletonLoader';
import FilterPagination from '@/src/components/Filter/FilterPagination';
import Search from '@/src/components/Filter/FilterSearch';
import FilterSort from '@/src/components/Filter/FilterSort';
import useProducts from '@/src/hooks/useProducts';
import { ProductType } from '@/src/types/products.type';
import { useState } from 'react';

export default function CatalogPage() {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('asc');
  const [limit, setLimit] = useState(12);
  const [page, setPage] = useState(10);
  const { books, isLoading } = useProducts(search, sort, limit, page);

  return (
    <div className="max-w-360 min-h-screen h-full mx-auto p-3.5 md:p-5 lg:p-10">
      <Search onChange={setSearch} />
      <div className="flex flex-wrap justify-center items-center gap-5 mt-5 md:gap-10">
        <FilterSort onChange={setSort} />
        <FilterPagination onChangeLimit={setLimit} onChangePage={setPage} />
      </div>
      <div
        id="catalog"
        className="grid grid-cols-1 gap-5 max-w-7xl w-full my-20 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {isLoading
          ? [1, 2, 3, 4, 5, 6, 7, 8].map(index => <CardSkeletonLoader key={index} />)
          : books?.products.map((book: ProductType) => (
              <CardProduct key={book.id} image={book.images[0]} title={book.title} description={book.description} />
            ))}
      </div>
    </div>
  );
}
