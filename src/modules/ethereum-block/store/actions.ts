import { make } from 'redux-chill';

/**
 * Get Ethereum Block
 */
const getEthereumBlock = make('[ethereum-block] get')
  .stage((blockNumber: string) => ({ blockNumber }))
  .stage('success', (ethereumBlock) => ethereumBlock)
  .stage('fail');

export { getEthereumBlock };
