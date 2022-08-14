import { useInfiniteQuery } from '@tanstack/react-query';

import { userAPI } from 'apis';

const LIMIT = 10;

const getUserBidProductsAPI = async ({ pageParam = 0 }) => {
  const { data } = await userAPI.getBiddingProducts({ offset: pageParam });

  return {
    data,
    currentPage: pageParam,
    isLast: data.length ? false : true,
  };
};

const useGetUserBidProducts = () => {
  return useInfiniteQuery(['products'], getUserBidProductsAPI, {
    getNextPageParam: (lastPage) => {
      if (lastPage.isLast) {
        return undefined;
      }

      return lastPage.currentPage + LIMIT;
    },
  });
};

export default useGetUserBidProducts;
