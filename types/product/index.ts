import { User } from 'types/user';

export interface Image {
  order: number;
  url: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  minimumPrice: number;
  category: string;
  location: string;
  expireAt: Date;
  createdAt: Date;
  updatedAt: Date;
  writer: User;
  imageUrls: Image[];
}
