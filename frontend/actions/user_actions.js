export const userConstants = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  SIGNUP: "SIGNUP",
  RECEIVE_USER: "RECEIVE_USER",
  RECEIVE_ERRORS: "RECEIVE_ERRORS"
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

export const receiveUser = user => ({
  type: userConstants.RECEIVE_USER,
  user
});

export const receiveErrors = errors => ({
  type: userConstants.RECEIVE_ERRORS,
  errors
});
