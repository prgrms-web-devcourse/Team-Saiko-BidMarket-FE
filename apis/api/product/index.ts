import { baseInstance } from 'apis/utils/baseInstance';
import { ProductsResponseType } from 'types/product';

interface productsAPITypes {
  offset: number;
  limit: number;
}

const productAPI = {
  getProducts: ({ offset, limit }: productsAPITypes) =>
    baseInstance.get<ProductsResponseType>(
      `/products?offset=${offset}&limit=${limit}`
    ),
  getProduct: (productId: number) => baseInstance.get(`/products/${productId}`),
};

export default productAPI;
