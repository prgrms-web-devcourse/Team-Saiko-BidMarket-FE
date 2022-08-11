import { authInstance } from 'apis/utils/authInstance';
import { baseInstance } from 'apis/utils/baseInstance';
import { categoryOptionsENType } from 'types/categoryOption';
import { ProductResponse, ProductsResponseType } from 'types/product';

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

  createProduct: async (data: ProductData) => {
    return await authInstance.post(`/products`, data);
  },
};

export default productAPI;
