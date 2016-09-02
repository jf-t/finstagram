import { imageConstants, receiveImages, receiveImage } from '../actions/image_actions.js';
import { requestImages, addImage, requestImage } from '../util/image_api_util';

const ImageMiddleware = store => next => action => {
  const success2 = (image) => store.dispatch(receiveImage(image));
  switch(action.type) {
    case imageConstants.REQUEST_IMAGES:
      const success = (data) => store.dispatch(receiveImages(data));
      requestImages(success);
    case imageConstants.ADD_IMAGE:
      addImage(action.image, success2);
    case imageConstants.REQUEST_IMAGE:
      requestImage(action.image_id, success2);
    default:
      return next(action);
  }
}

export default ImageMiddleware;
