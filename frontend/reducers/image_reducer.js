import { imageConstants } from '../actions/image_actions';
import merge from 'lodash/merge'


const ImageReducer = (state = {}, action) => {
  switch(action.type) {
    case imageConstants.RECEIVE_IMAGES:
      return merge({}, action.images);
    default:
      return state;
  }
};

export default ImageReducer;
