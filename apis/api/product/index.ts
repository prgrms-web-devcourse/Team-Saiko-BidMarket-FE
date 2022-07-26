import { authInstance } from 'apis/utils/authInstance';
import { baseInstance } from 'apis/utils/baseInstance';
import { categoryOptionsENType } from 'types/categoryOption';
import { ProductResponse, ProductsResponseType } from 'types/product';
import { sortOptionsENType } from 'types/sortOption';

interface ProductData {
  images: string[];
  title: string;
  minimumPrice: number;
  category: categoryOptionsENType;
  location: string;
  description: string;
}

const productAPI = {
  getProducts: ({ offset }: { offset: number }) =>
    baseInstance.get<ProductsResponseType>(
      `/products?offset=${offset}&limit=10`
    ),
  getProduct: (productId: number) =>
    baseInstance.get<ProductResponse>(`/products/${productId}`),

  getProductsByKeyword: ({
    offset,
    title,
    progressed,
    category,
    sort,
  }: {
    offset: number;
    title: string;
    progressed: boolean;
    category: categoryOptionsENType;
    sort: sortOptionsENType;
  }) =>
    // @TODO 쿼리스트링, limit을 상수로 분리하기
    baseInstance.get<ProductsResponseType>(
      `/products?title=${title}&progressed=${progressed}&category=${category}&sort=${sort}&offset=${offset}&limit=10`
    ),
  createProduct: async (data: ProductData) => {
    return await authInstance.post(`/products`, data);
  },
};

export default productAPI;
