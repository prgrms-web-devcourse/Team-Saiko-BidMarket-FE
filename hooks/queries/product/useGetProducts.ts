import { useInfiniteQuery } from '@tanstack/react-query';

import { productAPI } from 'apis';

const getProductsAPI = async ({ pageParam = 0 }) => {
  const { data } = await productAPI.getProducts({ offset: pageParam });
  console.log(data);

  if (data.length === 0) {
    return {
      data,
      current_page: pageParam,
      isLast: true,
    };
  }

  return {
    data,
    current_page: pageParam,
    isLast: false,
  };
};

const useGetProducts = () => {
  return useInfiniteQuery(['products'], getProductsAPI, {
    getNextPageParam: (lastPage) => {
      if (!lastPage.isLast) {
        return lastPage.current_page + 10;
      }

      return undefined;
    },
  });
};

export default useGetProducts;
