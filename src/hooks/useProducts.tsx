import axios from 'axios';
import useSWR from 'swr';

export default function useProducts(search = '', sort = 'asc', limit = 8, page = 10) {
  const { data, isLoading, error } = useSWR(
    `https://dummyjson.com/products/search?q=${search}&sortBy=id&order=${sort}&limit=${limit}&skip=${page}`,
    url => {
      const response = axios.get(url);

      return response;
    }
  );

  return { books: data?.data, isLoading, error };
}
