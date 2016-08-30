import { combineReducers } from 'redux';
import ImageReducer from './image_reducer';
import UserReducer from './user_reducer';


const RootReducer = combineReducers({
  user: UserReducer
})

export default RootReducer;
