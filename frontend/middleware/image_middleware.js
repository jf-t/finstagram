import { imageConstants, receiveImages, receiveImage } from '../actions/image_actions.js';
import { requestImages, addImage } from '../util/image_api_util';

const ImageMiddleware = store => next => action => {
  switch(action.type) {
    case imageConstants.REQUEST_IMAGES:
      const success = (data) => store.dispatch(receiveImages(data));
      requestImages(success);
    case imageConstants.ADD_IMAGE:
      const success2 = (image) => store.dispatch(receiveImage(image));
      addImage(action.image, success2);
    default:
      return next(action);
  }
}

export default ImageMiddleware;
