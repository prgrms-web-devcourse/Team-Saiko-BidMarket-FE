import axios, { AxiosInstance } from 'axios';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

import { interceptors } from './interceptors';

const BACKEND_API_BASEURL = publicRuntimeConfig.customBaseUrl;

const createAuthInstance = (url: string, options: object): AxiosInstance => {
  const instance = axios.create({
    baseURL: BACKEND_API_BASEURL,
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 5000,
    ...options,
  });
  interceptors(instance);
  return instance;
};

export const authInstance = createAuthInstance(BACKEND_API_BASEURL, {});
