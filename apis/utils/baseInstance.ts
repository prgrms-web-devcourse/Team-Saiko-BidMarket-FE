import axios, { AxiosInstance } from 'axios';

const NEXT_APP_API_END_POINT = `${process.env.NEXT_APP_API_END_POINT}/api/v1`;

const createBaseInstance = (url: string, options: object): AxiosInstance => {
  const instance = axios.create({
    baseURL: url,
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });

  return instance;
};

export const baseInstance = createBaseInstance(NEXT_APP_API_END_POINT, {});
