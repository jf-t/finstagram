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

export const editImage = (img, success, error) => {
  $.ajax({
    method: "PATCH",
    url: `api/images/${img.id}`,
    data: {
      image: img
    },
    success
  });
}

export const addLike = (id, success) => {
  $.ajax({
    method: "POST",
    url: "api/likes",
    data: {
      image_id: id
    },
    success,
    error: () => console.log("add like error")
  });
}

export const removeLike = (id, success) => {
  $.ajax({
    method: "DELETE",
    url: "api/likes",
    data: {
      image_id: id
    },
    success,
    error: () => console.log("remove like error")
  });
}

export const addComment = (comment, success) => {
  $.ajax({
    method: "POST",
    url: "api/comments/",
    data: {
      comment
    },
    success,
    error: () => (console.log("add comment error"))
  })
}
