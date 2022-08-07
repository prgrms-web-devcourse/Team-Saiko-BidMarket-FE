import { authInstance } from 'apis/utils/authInstance';

const productAPI = {
  postBid: (productId: number, biddingPrice: number) =>
    authInstance.post(`/biddings`, { productId, biddingPrice }),
};

export default productAPI;
