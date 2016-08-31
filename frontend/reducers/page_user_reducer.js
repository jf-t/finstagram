import { userConstants } from '../actions/user_actions';
import merge from 'lodash/merge';


const PageUserReducer = (state = {}, action) => {
  switch(action.type) {
    case userConstants.EDIT_USER:
      return merge({}, action.user);
    default:
      return state;
  }
}

export default PageUserReducer;
