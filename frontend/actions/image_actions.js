export const imageConstants = {
  REQUEST_IMAGES: "REQUEST_IMAGES",
  RECEIVE_IMAGES: "RECEIVE_IMAGES",
  REQUEST_IMAGE: "REQUEST_IMAGE",
  RECEIVE_IMAGE: "RECEIVE_IMAGE"
};

export const requestImages = () => ({
  type: imageConstants.REQUEST_IMAGES
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
