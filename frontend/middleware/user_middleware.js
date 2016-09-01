import { userConstants, receiveUser, receivePageUser, receiveErrors, loggedOutRender } from '../actions/user_actions';
import { login, signup, logout, editUser, userfromId } from '../util/user_api_util';

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
      logout(() => {
        dispatch(loggedOutRender())
      });
      break;
    case userConstants.SIGNUP:
      signup(action.user, success, errors);
      return next(action)
    case userConstants.EDIT_USER:
      editUser(action.user, success, errors);
      return next(action)
    case userConstants.REQUEST_USER:
      const success2 = (user) => dispatch(receivePageUser(user));
      userfromId(action.userId, success2);
    default:
      return next(action);
  }
}
export default UserMiddleware;
