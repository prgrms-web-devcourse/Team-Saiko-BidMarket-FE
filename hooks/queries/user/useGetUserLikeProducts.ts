import { useInfiniteQuery } from '@tanstack/react-query';

import { userAPI } from 'apis';

const LIMIT = 10;

const getUserLikeProductsAPI = async ({ pageParam = 0 }) => {
  const { data } = await userAPI.getLikeProducts({ offset: pageParam });

  return {
    data,
    currentPage: pageParam,
    isLast: data.length ? false : true,
  };
};

const useGetUserLikeProducts = () => {
  return useInfiniteQuery(['products'], getUserLikeProductsAPI, {
    getNextPageParam: (lastPage) => {
      if (lastPage.isLast) {
        return undefined;
      }

      return lastPage.currentPage + LIMIT;
    },
  });
};

export default useGetUserLikeProducts;
