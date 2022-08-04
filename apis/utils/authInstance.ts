import axios, { AxiosInstance } from 'axios';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

import { interceptors } from './interceptors';

const NEXT_APP_API_END_POINT = `${process.env.NEXT_APP_API_END_POINT}/api/v1`;

const createAuthInstance = (url: string, options: object): AxiosInstance => {
  const instance = axios.create({
    baseURL: publicRuntimeConfig.customBaseUrl,
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 5000,
    ...options,
  });
  interceptors(instance);
  return instance;
};

export const authInstance = createAuthInstance(
  publicRuntimeConfig.customBaseUrl,
  {}
);
