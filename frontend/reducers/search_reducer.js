import { userConstants } from '../actions/user_actions';

const SearchReducer = (state = [], action) => {
  switch(action.type) {
    case userConstants.RECEIVE_USERS:
      return [...action.users];
    default:
      return state;
  }
}
export default SearchReducer;
