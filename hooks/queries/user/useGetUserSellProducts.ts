import { useInfiniteQuery } from '@tanstack/react-query';

import { userAPI } from 'apis';

const LIMIT = 10;

const getUserSellProductsAPI = async ({
  pageParam = 0,
  userId,
}: {
  pageParam: number;
  userId: number;
}) => {
  const { data } = await userAPI.getSellProducts({ userId, offset: pageParam });

  return {
    data,
    currentPage: pageParam,
    isLast: data.length ? false : true,
  };
};

const useGetUserSellProducts = ({ userId }: { userId: number }) => {
  return useInfiniteQuery(
    ['products'],
    ({ pageParam = 0 }) => getUserSellProductsAPI({ pageParam, userId }),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.isLast) {
          return undefined;
        }

        return lastPage.currentPage + LIMIT;
      },
    }
  );
};

export default useGetUserSellProducts;
