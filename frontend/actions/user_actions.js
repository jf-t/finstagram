export const userConstants = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  SIGNUP: "SIGNUP",
  RECEIVE_USER: "RECEIVE_USER",
  RECEIVE_ERRORS: "RECEIVE_ERRORS",
  RECEIVE_PAGE_USER: "RECEIVE_PAGE_USER",
  REQUEST_USER: "REQUEST_USER",
  EDIT_USER: "EDIT_USER",
  LOGGED_OUT: "LOGGED_OUT"
}

export const login = user => {
  return ({
    type: userConstants.LOGIN,
    user
  })
};

export const logout = () => ({
  type: userConstants.LOGOUT
});

export const signup = user => ({
  type: userConstants.SIGNUP,
  user
});

export const requestUser = (id) => ({
  type: userConstants.REQUEST_USER,
  userId: id
});

export const receiveUser = user => ({
  type: userConstants.RECEIVE_USER,
  user
});
export const receivePageUser = user => ({
  type: userConstants.RECEIVE_PAGE_USER,
  user
});

export const receiveErrors = errors => ({
  type: userConstants.RECEIVE_ERRORS,
  errors
});

export const editUser = user => ({
  type: userConstants.EDIT_USER,
  user
});

export const loggedOutRender = () => ({
  type: userConstants.LOGGED_OUT
});
