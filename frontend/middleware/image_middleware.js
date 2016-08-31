import { imageConstants, receiveImages } from '../actions/image_actions.js';
import { requestImages } from '../util/image_api_util';

const ImageMiddleware = store => next => action => {
  switch(action.type) {
    case imageConstants.REQUEST_IMAGES:
      const success = (data) => store.dispatch(receiveImages(data));
      requestImages(success);
    default:
      return next(action);
  }
}

export default ImageMiddleware
