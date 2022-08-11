import { authInstance } from 'apis/utils/authInstance';

const bidAPI = {
  createBid: (productId: number, biddingPrice: number) =>
    authInstance.post(`/biddings`, { productId, biddingPrice }),
  getBiddingPrice: (productId: number) =>
    authInstance.get(`/biddings/products/${productId}`),
  getBiddingResult: (productId: number) =>
    authInstance.get(`/products/${productId}/result`),
};

export default bidAPI;
