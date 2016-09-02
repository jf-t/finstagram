import { imageConstants } from '../actions/image_actions';


const ImageReducer = (state = [], action) => {
  switch(action.type) {
    case imageConstants.RECEIVE_IMAGES:
      return [...action.images];
    default:
      return state;
  }
};

export default ImageReducer;
