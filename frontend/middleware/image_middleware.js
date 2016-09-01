import { imageConstants, receiveImages, receiveFollowedImages } from '../actions/image_actions.js';
import { requestImages, requestFollowedImages } from '../util/image_api_util';

const ImageMiddleware = store => next => action => {
  switch(action.type) {
    case imageConstants.REQUEST_IMAGES:
      const success = (data) => store.dispatch(receiveImages(data));
      requestImages(success);
    case imageConstants.REQUEST_FOLLOWED_IMAGES:
      const success2 = (data) => store.dispatch(receiveFollowedImages(data));
      requestFollowedImages(action.userId, success2)
    default:
      return next(action);
  }
}

export default ImageMiddleware
