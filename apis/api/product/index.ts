import { baseInstance } from 'apis/utils/instance';

const productAPI = {
  getProduct: (productId: number) => baseInstance.get(`/products/${productId}`),
};

export default productAPI;
