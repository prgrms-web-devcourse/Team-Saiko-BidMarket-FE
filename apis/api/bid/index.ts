import { authInstance } from 'apis/utils/authInstance';

const bidAPI = {
  createBid: (productId: number, biddingPrice: number) =>
    authInstance.post(`/biddings`, { productId, biddingPrice }),
  getBiddingPrice: (productId: number) =>
    authInstance.get(`/biddngs/products/${productId}`),
};

export default bidAPI;
