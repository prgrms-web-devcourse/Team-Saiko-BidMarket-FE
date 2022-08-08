import { baseInstance } from 'apis/utils/baseInstance';
import { ProductResponse, ProductsResponseType } from 'types/product';

interface ProductsAPITypes {
  offset: number;
  limit: number;
}

const productAPI = {
  getProducts: ({ offset, limit }: ProductsAPITypes) =>
    baseInstance.get<ProductsResponseType>(
      `/products?offset=${offset}&limit=${limit}`
    ),
  getProduct: (productId: number) =>
    baseInstance.get<ProductResponse>(`/products/${productId}`),
};

export default productAPI;
