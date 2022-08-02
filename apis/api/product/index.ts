import { baseInstance } from 'apis/utils/baseInstance';
import { ProductResponseType } from 'types/product';

const productAPI = {
  getProduct: (productId: number) =>
    baseInstance.get<ProductResponseType>(`/products/${productId}`),
};

export default productAPI;
