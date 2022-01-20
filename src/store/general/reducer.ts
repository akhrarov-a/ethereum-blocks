import { GeneralState } from './state';
import { reducer } from 'redux-chill';

/**
 * General state
 */
const general = reducer(new GeneralState());

export { general };
