import { User } from 'types/user';

export interface Image {
  order: number;
  url: string;
}

export interface ProductResponse {
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
  images: Image[];
}
