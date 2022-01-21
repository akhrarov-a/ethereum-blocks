import { EthereumBlockSaga } from '@ethereum-block/store';

/**
 * Root Saga
 */
const rootSaga = [new EthereumBlockSaga()];

export { rootSaga };
