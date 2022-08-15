import { authInstance } from 'apis/utils/authInstance';

const reportAPI = {
  createReport: (type: string, typeId: number, reason: string) =>
    authInstance.post(`/reports`, { type, typeId, reason }),
};

export default reportAPI;
