import {
  applyMiddleware,
  combineReducers,
  createStore as reduxCreateStore
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getContext } from './context';
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';
import { run } from 'redux-chill';
import createSagaMiddleware from 'redux-saga';

/**
 * Create Redux Store
 */
const createStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const applied = applyMiddleware(sagaMiddleware);
  const reducer = combineReducers(rootReducer);
  const store = reduxCreateStore(
    reducer,
    process.env.NODE_ENV === 'development'
      ? composeWithDevTools(applied)
      : applied
  );
  const context = getContext();

  run(sagaMiddleware, rootSaga, context);

  return store;
};

/**
 * Redux Store
 */
const store = createStore();

export { store };
