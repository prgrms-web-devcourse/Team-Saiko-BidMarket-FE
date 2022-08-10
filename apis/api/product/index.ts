import { baseInstance } from 'apis/utils/baseInstance';
import { categoryOptionsENType } from 'types/categoryOption';
import { ProductResponse, ProductsResponseType } from 'types/product';
import { sortOptionsENType } from 'types/sortOption';

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
    baseInstance.get<ProductsResponseType>(
      `/products?title=${title}&progressed=${progressed}&category=${category}&sort=${sort}&offset=${offset}&limit=10`
    ),
};

export default productAPI;
