import { combineReducers } from 'redux';
import ImageReducer from './image_reducer';
import UserReducer from './user_reducer';
import PageUserReducer from './page_user_reducer';
import SearchReducer from './search_reducer';


const RootReducer = combineReducers({
  user: UserReducer,
  images: ImageReducer,
  pageUser: PageUserReducer,
  search: SearchReducer,
});

export default RootReducer;
