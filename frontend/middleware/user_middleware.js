import { userConstants, receiveUser, receivePageUser, receiveErrors, loggedOutRender, receiveUsers } from '../actions/user_actions';
import { login, signup, logout, editUser, userfromId, requestUsers} from '../util/user_api_util';


const UserMiddleware = ({getState, dispatch}) => next => action => {

  const errors = xhr => {
    const errorItems = xhr.responseJSON;
    dispatch(receiveErrors(errorItems));
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
    case userConstants.REQUEST_USERS:
      const success3 = (users) => dispatch(receiveUsers(users));
      requestUsers(action.data, success3);
    break;
    default:
      return next(action);
  }
}
export default UserMiddleware;
