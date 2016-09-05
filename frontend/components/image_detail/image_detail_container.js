import { connect } from 'react-redux';
import { requestImage, editImage, addLike, addComment, removeLike } from '../../actions/image_actions';
import ImageDetail from './image_detail';
const mapStateToProps = (state, ownProps) => ({
  image: state.image,
  currentUser: state.user,
  imageId: ownProps.params.id
});

const mapDispatchToProps = (dispatch) => ({
  requestImage: (id) => dispatch(requestImage(id)),
  editImage: (img) => dispatch(editImage(img)),
  addComment: (comment) => dispatch(addComment(comment)),
  addLike: (id) => dispatch(addLike(id)),
  removeLike: (id) => dispatch(removeLike(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageDetail);
