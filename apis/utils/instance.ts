import axios, { AxiosInstance } from 'axios';

import { interceptors } from './interceptors';

const { REACT_APP_API_END_POINT } = process.env;

export const baseInstance = (url: string, options: object): AxiosInstance => {
  return axios.create({
    baseURL: REACT_APP_API_END_POINT,
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });
};

export const authInstance = (url: string, options: object): AxiosInstance => {
  const instance = axios.create({
    baseURL: REACT_APP_API_END_POINT,
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });

  interceptors(instance);
  return instance;
};
