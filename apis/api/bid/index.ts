import { authInstance } from 'apis/utils/authInstance';

const bidAPI = {
  createBid: (productId: number, biddingPrice: number) =>
    authInstance.post(`/biddings`, { productId, biddingPrice }),
};

export default bidAPI;
