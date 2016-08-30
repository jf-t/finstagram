export const login = (user, success, error) => {
  $.ajax({
    method: "POST",
    url: "api/session",
    data: {
      user: user
    },
    success,
    error: () => console.log("not good")
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
    error: () => console.log("not good")
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
