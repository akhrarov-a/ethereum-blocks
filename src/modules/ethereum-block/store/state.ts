import { EthereumBlock } from '@api';

/**
 * Ethereum Block State
 */
class EthereumBlockState {
  /**
   * Loading
   */
  loading = false;

  /**
   * Selected Block
   */
  selectedBlock: EthereumBlock | null = null;

  /**
   * Latest Block Number
   */
  latestBlockNumber: string = '';
}

export { EthereumBlockState };
