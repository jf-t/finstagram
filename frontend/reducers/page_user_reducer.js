import { userConstants } from '../actions/user_actions';
import merge from 'lodash/merge';


const PageUserReducer = (state = {loading: false}, action) => {
  switch(action.type) {
    case userConstants.EDIT_USER:
      return merge({}, state, {loading: true}, action.user);
    case userConstants.RECEIVE_PAGE_USER:
      return merge({}, {loading: false}, action.user);
    case userConstants.REQUEST_PAGE_USER:
      return merge(state, {loading: true})
    default:
      return state;
  }
}

export default PageUserReducer;
