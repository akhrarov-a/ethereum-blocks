import { ethereumBlockReducer } from '@ethereum-block/store';

/**
 * Root Reducer
 */
const rootReducer = {
  ethereumBlock: ethereumBlockReducer
};

export { rootReducer };
