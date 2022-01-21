import { EthereumBlockService } from '@api';
import axios, { AxiosRequestConfig } from 'axios';

/**
 * Get Context
 */
const getContext = () => {
  const request = (defaults: AxiosRequestConfig) => {
    const instance = axios.create(defaults);

    return async ({ headers = {}, ...config }: AxiosRequestConfig) => {
      try {
        headers.channel = 'admin';
        headers['Cache-Control'] = 'no-cache';

        return await instance({
          ...config,
          headers
        });
      } catch (error) {
        throw error;
      }
    };
  };

  return {
    ethereumBlock: new EthereumBlockService(request)
  };
};

/**
 * Store Context
 */
type StoreContext = ReturnType<typeof getContext>;

export type { StoreContext };
export { getContext };
