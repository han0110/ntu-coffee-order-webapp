import { combineReducers } from 'redux';

import products from './products';
import prepares from './prepares';

const rootReducer = combineReducers({
  products,
  prepares,
});

export default rootReducer;
