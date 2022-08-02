export interface CardProductData {
  id: number;
  title: string;
  thumbnailImage: string;
  minimumPrice: number;
  expireAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

export type ProductsResponseType = Array<CardProductData>;
