import axios, { AxiosInstance } from 'axios';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

const createBaseInstance = (url: string, options: object): AxiosInstance => {
  const instance = axios.create({
    baseURL: publicRuntimeConfig.customBaseUrl,
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });

  return instance;
};

export const baseInstance = createBaseInstance(
  publicRuntimeConfig.customBaseUrl,
  {}
);
