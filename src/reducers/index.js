import { combineReducers } from 'redux';

import product from './product';
import prepare from './prepare';

const rootReducer = combineReducers({
  product,
  prepare,
});

export default rootReducer;
