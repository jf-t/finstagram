import { userConstants, receiveUser, receivePageUser, receiveErrors } from '../actions/user_actions';
import { login, signup, logout } from '../util/user_api_util';

const UserMiddleware = ({getState, dispatch}) => next => action => {

  const errors = xhr => {
    const errorItems = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };

  const success = (user) => {
    dispatch(receiveUser(user));
  };

  switch(action.type) {
    case userConstants.LOGIN:
      login(action.user, success, errors);
      return next(action)
    case userConstants.LOGOUT:
      logout(() => next(action));
      break;
    case userConstants.SIGNUP:
      signup(action.user, success, errors);
      return next(action)
    default:
      return next(action);
  }
}
export default UserMiddleware;
