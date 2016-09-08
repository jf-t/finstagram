export const imageConstants = {
  REQUEST_IMAGES: "REQUEST_IMAGES",
  RECEIVE_IMAGES: "RECEIVE_IMAGES",
  REQUEST_IMAGE: "REQUEST_IMAGE",
  RECEIVE_IMAGE: "RECEIVE_IMAGE",
  ADD_IMAGE: "ADD_IMAGE",
  EDIT_IMAGE: "EDIT_IMAGE",
  ADD_COMMENT: "ADD_COMMENT",
  ADD_LIKE: "ADD_LIKE",
  REMOVE_LIKE: "REMOVE_LIKE"
};

export const requestImages = (userId) => ({
  type: imageConstants.REQUEST_IMAGES,
  userId
});

export const receiveImages = (data) => ({
  type: imageConstants.RECEIVE_IMAGES,
  images: data
});

export const requestImage = (image_id) => ({
  type: imageConstants.REQUEST_IMAGE,
  image_id
});

export const receiveImage = (image) => ({
  type: imageConstants.RECEIVE_IMAGE,
  image
});

export const addImage = (image) => ({
  type: imageConstants.ADD_IMAGE,
  image
});

export const editImage = (image) => ({
  type: imageConstants.EDIT_IMAGE,
  image
});

export const addLike = (id, user_id, notification, url, image_url) => ({
  type: imageConstants.ADD_LIKE,
  id,
  user_id,
  notification,
  image_url,
  url
});

export const removeLike = (id) => ({
  type: imageConstants.REMOVE_LIKE,
  id
});

export const addComment = (comment) => ({
  type: imageConstants.ADD_COMMENT,
  comment
});
