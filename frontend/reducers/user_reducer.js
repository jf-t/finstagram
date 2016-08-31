import { userConstants } from '../actions/user_actions';
import merge from 'lodash/merge';


const noUser = {
  user: null,
  errors: []
};

const UserReducer = (state = noUser, action) => {
  switch(action.type) {
    case userConstants.LOGGED_OUT:
      return merge({}, noUser);
    case userConstants.RECEIVE_USER:
      return merge({}, noUser, {user: action.user});
    case userConstants.RECEIVE_ERRORS:
      return merge({}, noUser, {errors: action.errors});
    default:
      return state;
  };
};

export default UserReducer;
