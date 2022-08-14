import { authInstance } from 'apis/utils/authInstance';

const heartAPI = {
  getHeartAuthUser: (productId: number) =>
    authInstance.get(`/users/${productId}/hearts`),
  updateHeart: (productId: number) =>
    authInstance.put(`/users/${productId}/hearts`),
};

export default heartAPI;
