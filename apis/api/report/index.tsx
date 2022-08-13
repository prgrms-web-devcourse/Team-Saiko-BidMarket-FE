import { authInstance } from 'apis/utils/authInstance';

const reportAPI = {
  createReportByProduct: (productId: number, reason: string) =>
    authInstance.post(`/reports/products/${productId}`, { reason }),
  createReportByUser: (userId: number, reason: string) =>
    authInstance.post(`/reports/users/${userId}`, { reason }),
};

export default reportAPI;
