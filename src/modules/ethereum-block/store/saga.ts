import { Payload, Saga } from 'redux-chill';
import { ResponseGenerator } from '@api';
import { StoreContext } from '@store/context';
import { call, put } from 'redux-saga/effects';
import { getEthereumBlock } from './actions';

/**
 * Ethereum Block Saga
 */
class EthereumBlockSaga {
  /**
   * Get Ethereum Block
   */
  @Saga(getEthereumBlock)
  public *getEthereumBlock(
    { blockNumber }: Payload<typeof getEthereumBlock>,
    { ethereumBlock }: StoreContext
  ) {
    try {
      const { data }: ResponseGenerator = yield call(
        ethereumBlock.getEthereumBlock,
        {
          number: blockNumber
        }
      );

      yield put(getEthereumBlock.success(data.result));
    } catch (error) {
      console.log(error);
    }
  }
}

export { EthereumBlockSaga };
