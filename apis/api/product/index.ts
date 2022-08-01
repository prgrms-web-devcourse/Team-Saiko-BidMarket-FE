import { baseInstance } from 'apis/utils/baseInstance';

const productAPI = {
  getProduct: (productId: number) => baseInstance.get(`/products/${productId}`),
};

export default productAPI;
