import { Payload, Saga } from 'redux-chill';
import { ResponseGenerator, Transaction } from '@api';
import { StoreContext } from '@store/context';
import { call, put } from 'redux-saga/effects';
import {
  getEthereumBlock,
  setLatestEthereumBlockNumber,
  setLoading
} from './actions';

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
      yield put(setLoading(true));

      const { data }: ResponseGenerator = yield call(
        ethereumBlock.getEthereumBlock,
        {
          number: blockNumber
        }
      );

      yield put(
        getEthereumBlock.success({
          number: data.result.number,
          hash: data.result.hash,
          transactions: data.result.transactions.map(
            ({ blockHash, from, to }: Transaction) => ({ blockHash, from, to })
          )
        })
      );

      if (blockNumber === 'latest') return;

      const {
        data: { result }
      }: ResponseGenerator = yield call(ethereumBlock.getEthereumBlock, {
        number: 'latest'
      });

      yield put(setLatestEthereumBlockNumber(result.number));
    } catch (error: any) {
      console.log(error);
      alert(`Oopsie, there is error in request! '${error.message}'`);

      yield put(getEthereumBlock.fail());
    } finally {
      yield put(setLoading(false));
    }
  }
}

export { EthereumBlockSaga };
