import { imageConstants, receiveImages, receiveImage } from '../actions/image_actions.js';
import { requestImages, addImage, requestImage, editImage, addLike, addComment, removeLike, addNotif } from '../util/image_api_util';
import { userConstants, receiveUser } from '../actions/user_actions';

const ImageMiddleware = store => next => action => {
  const success2 = (image) => {
    store.dispatch(receiveImage(image))
  };
  switch(action.type) {
    case imageConstants.REQUEST_IMAGES:
      const success = (data) => store.dispatch(receiveImages(data));
      requestImages(success);
      return next(action);
    case imageConstants.ADD_IMAGE:
      const success3 = (user) => store.dispatch(receiveUser(user));
      addImage(action.image, success3);
      return next(action);
    case imageConstants.EDIT_IMAGE:
      editImage(action.image, success2);
      return next(action);
    case imageConstants.REQUEST_IMAGE:
      requestImage(action.image_id, success2);
      return next(action);
    case imageConstants.ADD_LIKE:
      addNotif(action.user_id, action.notification, action.url, action.image_url)
      addLike(action.id, success2);
      return next(action);
    case imageConstants.ADD_COMMENT:
      addComment(action.comment, success2);
      return next(action);
    case imageConstants.REMOVE_LIKE:
      removeLike(action.id, success2);
    default:
      return next(action);
  }
}

export default ImageMiddleware;
