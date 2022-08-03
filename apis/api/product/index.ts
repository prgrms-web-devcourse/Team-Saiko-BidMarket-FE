import { baseInstance } from 'apis/utils/baseInstance';
import { ProductResponse } from 'types/product';

const productAPI = {
  getProduct: (productId: number) =>
    baseInstance.get<ProductResponse>(`/products/${productId}`),
};

export default productAPI;
