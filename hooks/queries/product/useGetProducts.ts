import { useInfiniteQuery } from '@tanstack/react-query';

import { productAPI } from 'apis';

const LIMIT = 10;

const getProductsAPI = async ({ pageParam = 0 }) => {
  const { data } = await productAPI.getProducts({ offset: pageParam });

  return {
    data,
    current_page: pageParam,
    isLast: data.length === 0 ? true : false,
  };
};

const useGetProducts = () => {
  return useInfiniteQuery(['products'], getProductsAPI, {
    getNextPageParam: (lastPage) => {
      if (!lastPage.isLast) {
        return lastPage.current_page + LIMIT;
      }

      return undefined;
    },
  });
};

export default useGetProducts;
