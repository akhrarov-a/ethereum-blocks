import { EthereumBlockState } from './state';
import {
  getEthereumBlock,
  setLatestEthereumBlockNumber,
  setLoading
} from './actions';
import { reducer } from 'redux-chill';

/**
 * Ethereum Block Reducer
 */
const ethereumBlockReducer = reducer(new EthereumBlockState())
  .on(setLoading, (state, payload) => {
    state.loading = payload;
  })
  .on(getEthereumBlock, (state) => {
    state.selectedBlock = null;
  })
  .on(getEthereumBlock.success, (state, payload) => {
    state.selectedBlock = payload;
  })
  .on(setLatestEthereumBlockNumber, (state, payload) => {
    state.latestBlockNumber = payload;
  });

export { ethereumBlockReducer };
