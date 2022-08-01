import axios, { AxiosInstance } from 'axios';

import { interceptors } from './interceptors';

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

const createAuthInstance = (url: string, options: object): AxiosInstance => {
  const instance = axios.create({
    baseURL: url,
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });
  interceptors(instance);
  return instance;
};

export const baseInstance = createBaseInstance(REACT_APP_API_URL, {});
export const authInstance = createAuthInstance(REACT_APP_API_URL, {});
