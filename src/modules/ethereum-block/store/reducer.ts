import { EthereumBlockState } from './state';
import { getEthereumBlock } from './actions';
import { reducer } from 'redux-chill';

/**
 * Ethereum Block Reducer
 */
const ethereumBlockReducer = reducer(new EthereumBlockState())
  .on(getEthereumBlock, (state) => {
    state.loading = true;
  })
  .on(getEthereumBlock.success, (state, payload) => {
    state.loading = false;
    state.selectedBlock = payload;
  })
  .on(getEthereumBlock, (state) => {
    state.loading = false;
  });

export { ethereumBlockReducer };
