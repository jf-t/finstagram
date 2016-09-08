export const login = (user, success, error) => {
  $.ajax({
    method: "POST",
    url: "api/session",
    data: {
      user: user
    },
    success,
    error
  });
};

export const signup = (creds, success, error) => {
  $.ajax({
    method: "POST",
    url: "api/users",
    data: {
      user: creds
    },
    success,
    error
  });
};

export const logout = (success) => {
  $.ajax({
    method: "DELETE",
    url: "api/session",
    success
  });
};

export const userfromId = (userId, success) => {
  $.ajax({
    method: "GET",
    url: `api/users/${userId}`,
    success
  })
};

export const editUser = (user, success, error) => {
  $.ajax({
    method: "PATCH",
    url: `api/users/${user.id}`,
    data: {
      user: user
    },
    success
  });
};

export const requestUsers = (str, success, error) => {
  $.ajax({
    method: "GET",
    url: 'api/users',
    data: {
      str
    },
    success,
    error: () => console.log("ugh")
  });
}

export const addFollow = (id, currentId, success) => {
  $.ajax({
    method: "POST",
    url: "api/follow",
    data: {
      following_id: id,
      followee_id: currentId
    },
    success
  });
}

export const removeFollow = (id, success) => {
  $.ajax({
    method: "DELETE",
    url: `api/follow`,
    data: {
      following_id: id
    },
    success
  });
}
