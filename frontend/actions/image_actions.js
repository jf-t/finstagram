export const imageConstants = {
  REQUEST_IMAGES: "REQUEST_IMAGES",
  RECEIVE_IMAGES: "RECEIVE_IMAGES",
  REQUEST_IMAGE: "REQUEST_IMAGE",
  RECEIVE_IMAGE: "RECEIVE_IMAGE",
  REQUEST_FOLLOWED_IMAGES: "REQUEST_FOLLOWED_IMAGES",
  RECEIVE_FOLLOWED_IMAGES: "RECEIVE_FOLLOWED_IMAGES"
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

export const requestFollowedImages = (userId) => ({
  type: imageConstants.REQUEST_FOLLOWED_IMAGES,
  userId
})
export const receiveFollowedImages = (images) => ({
  type: imageConstants.RECEIVE_FOLLOWED_IMAGES,
  images
})
