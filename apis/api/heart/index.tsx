import { authInstance } from 'apis/utils/authInstance';

const heartAPI = {
  putHeart: (userId: number, productId: number) =>
    authInstance.put(`/users/${productId}/hearts`, { userId, productId }),
  deleteHeart: (productId: number) =>
    authInstance.delete(`/users/${productId}/hearts`),
};

export default heartAPI;
