import { AxiosRequestConfig } from 'axios';

/**
 * Ethereum Block Service
 */
class EthereumBlockService {
  /**
   * Get axios
   */
  public constructor(
    private create: (
      config: AxiosRequestConfig
    ) => (config: AxiosRequestConfig, enabled?: boolean) => any
  ) {}

  /**
   * Api
   */
  public api = this.create({
    withCredentials: true,
    baseURL: 'https://cloudflare-eth.com',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  /**
   * Get ethereum block
   */
  public getEthereumBlock = ({ number }: { number: string }) =>
    this.api({
      url: '/',
      method: 'POST',
      data: {
        jsonrpc: '2.0',
        method: 'eth_getBlockByNumber',
        params: [number, true],
        id: 1
      }
    });
}

export { EthereumBlockService };
