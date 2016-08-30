import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer';
import MasterMiddleware from '../middleware/master_middleware';

const configureStore = (preloadedState = {}) => {
  const store = createStore(RootReducer, preloadedState, MasterMiddleware);
  return store;
};

export default configureStore;
