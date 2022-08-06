import { authInstance } from 'apis/utils/authInstance';
import { baseInstance } from 'apis/utils/baseInstance';
import { ProductResponse, ProductsResponseType } from 'types/product';

interface productsAPITypes {
  offset: number;
  limit: number;
}

interface PostData {
  images: string[];
  title: string;
  minimumPrice: number;
  category: EnglishCategory;
  location: string;
  description: string;
}

type EnglishCategory =
  | 'DIGITAL_DEVICE'
  | 'HOUSEHOLD_APPLIANCE'
  | 'FURNITURE'
  | 'CHILDREN_BOOK'
  | 'FOOD'
  | 'SPORTS_LEISURE'
  | 'WOMAN_GOODS'
  | 'WOMAN_CLOTHES'
  | 'MAN_FASHION_GOODS'
  | 'HOBBY'
  | 'BEAUTY'
  | 'PET_SUPPLY'
  | 'BOOK_TICKET_RECORD'
  | 'PLANT'
  | 'ETC'
  | 'ALL';

const productAPI = {
  getProducts: ({ offset, limit }: productsAPITypes) =>
    baseInstance.get<ProductsResponseType>(
      `/products?offset=${offset}&limit=${limit}`
    ),
  getProduct: (productId: number) =>
    baseInstance.get<ProductResponse>(`/products/${productId}`),

  createProduct: async (data: PostData) => {
    console.log(data);
    return await authInstance.post(`/products`, data);
  },
};

export default productAPI;
