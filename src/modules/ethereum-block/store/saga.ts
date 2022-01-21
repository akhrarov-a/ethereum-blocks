import { Payload, Saga } from 'redux-chill';
import { ResponseGenerator, Transaction } from '@api';
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

      yield put(
        getEthereumBlock.success({
          number: data.result.number,
          transactions: data.result.transactions.map(
            ({ blockHash, from, to }: Transaction) => ({ blockHash, from, to })
          )
        })
      );
    } catch (error) {
      console.log(error);
    }
  }
}

export { EthereumBlockSaga };
