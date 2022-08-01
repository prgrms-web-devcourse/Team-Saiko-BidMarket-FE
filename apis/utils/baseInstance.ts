import axios, { AxiosInstance } from 'axios';

const REACT_APP_API_URL = `${process.env.REACT_APP_API_END_POINT}/api/v1`;

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

export const baseInstance = createBaseInstance(REACT_APP_API_URL, {});
