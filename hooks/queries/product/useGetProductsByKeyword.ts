import { useInfiniteQuery } from '@tanstack/react-query';

import { productAPI } from 'apis';
import { categoryOptionsENType } from 'types/categoryOption';
import { sortOptionsENType } from 'types/sortOption';

const LIMIT = 10;

const getProductsAPI = async ({
  pageParam = 0,
  title,
  progressed,
  category,
  sort,
}: {
  pageParam: number;
  title: string;
  progressed: boolean;
  category: categoryOptionsENType;
  sort: sortOptionsENType;
}) => {
  const { data } = await productAPI.getProductsByKeyword({
    offset: pageParam,
    title,
    progressed,
    category,
    sort,
  });

  return {
    data,
    currentPage: pageParam,
    isLast: data.length ? false : true,
  };
};

const useGetProductsByKeyword = (searchContent: {
  title: string;
  progressed: boolean;
  category: categoryOptionsENType;
  sort: sortOptionsENType;
}) => {
  return useInfiniteQuery(
    ['productsByKeyword'],
    ({ pageParam = 0 }) => getProductsAPI({ ...searchContent, pageParam }),
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

export default useGetProductsByKeyword;
