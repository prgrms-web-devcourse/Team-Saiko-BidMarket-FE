import { AxiosInstance } from 'axios';

import { getItem } from './storage';

export const interceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    (config) => {
      const token = getItem('token');

      config.headers = {
        authorization: token ? `Bearer ${token}` : '',
      };
      return config;
    },
    (error) => Promise.reject(error.response)
  );
  return instance;
};
