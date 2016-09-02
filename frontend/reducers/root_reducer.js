import { combineReducers } from 'redux';
import ImagesReducer from './images_reducer';
import UserReducer from './user_reducer';
import PageUserReducer from './page_user_reducer';
import SearchReducer from './search_reducer';
import ImageReducer from './image_reducer'


const RootReducer = combineReducers({
  user: UserReducer,
  images: ImagesReducer,
  pageUser: PageUserReducer,
  search: SearchReducer,
  image: ImageReducer
});

export default RootReducer;
