import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise';
import thunkMiddleWare from 'redux-thunk';
import rootReducer from './reducers';

const inProduction = process.env.NODE_ENV === 'production';

const configureStore = () => {
  const middlewares = [promise, thunkMiddleWare];
  if (!inProduction) {
    middlewares.push(createLogger());
  }
  return createStore(
    rootReducer,
    applyMiddleware(...middlewares),
  );
};

export default configureStore;
