import { useInfiniteQuery } from '@tanstack/react-query';

import { productAPI } from 'apis';

const LIMIT = 10;

const getProductsAPI = async ({ pageParam = 0 }) => {
  const { data } = await productAPI.getProducts({ offset: pageParam });

  return {
    data,
    currentPage: pageParam,
    isLast: data.length ? false : true,
  };
};

const useGetProducts = () => {
  return useInfiniteQuery(['products'], getProductsAPI, {
    getNextPageParam: (lastPage) => {
      if (lastPage.isLast) {
        return undefined;
      }

      return lastPage.currentPage + LIMIT;
    },
  });
};

export default useGetProducts;
