'use client';

import Badge from '@/src/components/Badge';
import CardProduct from '@/src/components/Cards/CardProduct';
import CardSkeletonLoader from '@/src/components/Cards/CardSkeletonLoader';
import useProducts from '@/src/hooks/useProducts';
import { ProductType } from '@/src/types/products.type';
import Link from 'next/link';

export default function HomePage() {
  const { books, isLoading } = useProducts();

  return (
    <div className="flex flex-col justify-center items-center max-w-360 min-h-screen h-full mx-auto p-2.5 md:p-5 lg:p-10">
      <Badge />
      <h1 className="max-w-5xl mb-6 text-5xl text-center text-gray-900 font-bold md:text-6xl lg:text-7xl">
        Curated collection of literary treasures
      </h1>

      <p className="max-w-3xl mb-12 text-lg text-center text-gray-600 md:text-xl">
        Discover timeless classics and contemporary bestsellers. Each book carefully selected for readers who appreciate
        quality literature and exceptional storytelling.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/catalog"
          className="py-3 px-6 text-white font-medium rounded-lg transition-colors bg-gray-900 shadow-lg hover:bg-gray-800"
        >
          Browse catalog →
        </Link>
        <Link
          href="#"
          className="py-3 px-6 text-gray-900 font-medium rounded-lg border border-gray-200 transition-colors bg-white hover:border-gray-300"
        >
          View categories
        </Link>
      </div>

      <div id="catalog" className="grid grid-cols-1 gap-6 w-full my-20 sm:grid-cols-2 lg:grid-cols-4">
        {isLoading
          ? [1, 2, 3, 4, 5, 6, 7, 8].map(index => <CardSkeletonLoader key={index} />)
          : books?.products.map((book: ProductType) => (
              <CardProduct key={book.id} image={book.images[0]} title={book.title} description={book.description} />
            ))}
      </div>
    </div>
  );
}
