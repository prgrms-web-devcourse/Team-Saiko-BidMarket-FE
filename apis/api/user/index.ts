import { authInstance } from 'apis/utils/authInstance';
import { baseInstance } from 'apis/utils/baseInstance';
import { ChatRoomResponseType } from 'types/chatRooms';
import { ProductsResponseType } from 'types/product';
import { User } from 'types/user';

interface GetSellProductsType {
  userId: number;
  offset: number;
  limit?: number;
  sort?: string;
}

interface GetBiddingProductsType {
  offset: number;
  limit: number;
  sort?: string;
}

const userAPI = {
  getAuthUser: () => authInstance.get<User>('users/auth'),
  getUser: (id: number) => baseInstance.get<User>(`/users/${id}`),
  getSellProducts: ({
    userId,
    offset,
    limit,
    sort = 'END_DATE_ASC',
  }: GetSellProductsType) =>
    baseInstance.get<ProductsResponseType>(
      `/users/${userId}/products?offset=${offset}&limit=10&sort=${sort}`
    ),
  getBiddingProducts: ({
    offset,
    limit,
    sort = 'END_DATE_ASC',
  }: GetBiddingProductsType) =>
    authInstance.get<ProductsResponseType>(
      `/users/biddings?offset=${offset}&limit=${limit}&sort=${sort}`
    ),
  getChatRooms: (offset: number, limit: number) =>
    authInstance.get<ChatRoomResponseType>(
      `/chatRooms?offset=${offset}&limit=${limit}`
    ),
  updateUser: (username: string, profileImage: string) =>
    authInstance.patch('/users', { username, profileImage }),
  deleteUser: () => authInstance.delete('/users'),
};

export default userAPI;
