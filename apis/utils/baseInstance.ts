import axios, { AxiosInstance } from 'axios';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

const BACKEND_API_BASEURL = publicRuntimeConfig.customBaseUrl;

const createBaseInstance = (url: string, options: object): AxiosInstance => {
  const instance = axios.create({
    baseURL: BACKEND_API_BASEURL,
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });

  return instance;
};

export const baseInstance = createBaseInstance(BACKEND_API_BASEURL, {});
