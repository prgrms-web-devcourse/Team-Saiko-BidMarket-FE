import { baseInstance } from 'apis/utils/baseInstance';
import { ProductResponse, ProductsResponseType } from 'types/product';

const productAPI = {
  getProducts: ({ offset }: { offset: number }) =>
    baseInstance.get<ProductsResponseType>(
      `/products?offset=${offset}&limit=10`
    ),
  getProduct: (productId: number) =>
    baseInstance.get<ProductResponse>(`/products/${productId}`),
};

export default productAPI;
