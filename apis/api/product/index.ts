import { baseInstance } from 'apis/utils/baseInstance';
import { ProductResponse, ProductsResponseType } from 'types/product';

interface productsAPITypes {
  offset: number;
  limit: number;
}

const productAPI = {
  getProducts: ({ offset, limit }: productsAPITypes) =>
    baseInstance.get<ProductsResponseType>(
      `/products?offset=${offset}&limit=${limit}`
    ),
  getProduct: (productId: number) =>
    baseInstance.get<ProductResponse>(`/products/${productId}`),
};

export default productAPI;
