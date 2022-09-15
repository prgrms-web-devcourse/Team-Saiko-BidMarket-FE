import { useInfiniteQuery } from '@tanstack/react-query';

import getQueryApiByQueryKey from 'hooks/utils/getInfiniteQuery';
import { queryKeyType } from 'types/infiniteQueryKey';

const LIMIT = 10;

const useGetInfiniteQuery = ({ queryKey }: { queryKey: queryKeyType }) => {
  return useInfiniteQuery([queryKey], getQueryApiByQueryKey(queryKey), {
    getNextPageParam: (lastPage) => {
      if (lastPage.isLast) {
        return undefined;
      }

      return lastPage.currentPage + LIMIT;
    },
  });
};

export default useGetInfiniteQuery;
