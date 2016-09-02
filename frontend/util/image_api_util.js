export const requestImages = (success) => {
  $.ajax({
    method: "GET",
    url: `api/images`,
    success: success
  })
}

export const addImage = (img, success, error) => {
  $.ajax({
    method: "POST",
    url: "api/images",
    data: {
      image: img
    },
    success,
    error
  });
}

export const requestImage = (id, success) => {
  $.ajax({
    method: "GET",
    url: `api/images/${id}`,
    success
  });
};
