import { productAPI, userAPI } from 'apis';
import { queryKeyType } from 'types/infiniteQueryKey';
import { ProductsResponseType } from 'types/product';

interface getQueryApiByQueryKeyReturnType {
  ({ pageParam }: { pageParam?: number }): Promise<{
    data: ProductsResponseType;
    currentPage: number;
    isLast: boolean;
  }>;
}

// @TODO 중복 코드 제거 고민 필요
const getProductsAPI = async ({ pageParam = 0 }) => {
  const { data } = await productAPI.getProducts({ offset: pageParam });

  return {
    data,
    currentPage: pageParam,
    isLast: data.length ? false : true,
  };
};

const getUserBiddingProductsAPI = async ({ pageParam = 0 }) => {
  const { data } = await userAPI.getBiddingProducts({ offset: pageParam });

  return {
    data,
    currentPage: pageParam,
    isLast: data.length ? false : true,
  };
};

const getUserLikeProductsAPI = async ({ pageParam = 0 }) => {
  const { data } = await userAPI.getLikeProducts({ offset: pageParam });

  return {
    data,
    currentPage: pageParam,
    isLast: data.length ? false : true,
  };
};

const queryApiByQueryKey = {
  products: getProductsAPI,
  userBidProducts: getUserBiddingProductsAPI,
  userLikeProducts: getUserLikeProductsAPI,
};

const getQueryApiByQueryKey = (
  queryKey: queryKeyType
): getQueryApiByQueryKeyReturnType => {
  return queryApiByQueryKey[queryKey];
};

export default getQueryApiByQueryKey;
