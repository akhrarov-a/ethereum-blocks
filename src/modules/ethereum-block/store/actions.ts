import { make } from 'redux-chill';

/**
 * Get Ethereum Block
 */
const getEthereumBlock = make('[ethereum-block] get')
  .stage((blockNumber: string) => ({ blockNumber }))
  .stage('success', (ethereumBlock) => ethereumBlock)
  .stage('fail');

/**
 * Set Latest Ethereum Block Number
 */
const setLatestEthereumBlockNumber = make(
  '[ethereum-block] set latest number'
).stage((blockNumber: string) => blockNumber);

/**
 * Set Loading
 */
const setLoading = make('[ethereum-block] set loading').stage(
  (isLoading: boolean) => isLoading
);

export { getEthereumBlock, setLatestEthereumBlockNumber, setLoading };
