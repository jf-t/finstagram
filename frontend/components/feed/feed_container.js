import { connect } from 'react-redux';
import FeedIndex from './feed';
import { requestImages, addLike, addComment, removeLike } from '../../actions/image_actions';

const mapStateToProps = (state) => ({
  images: state.images,
  currentUser: state.user
});

const mapDispatchToProps = dispatch => ({
  requestImages: () => dispatch(requestImages()),
  addComment: (comment) => dispatch(addComment(comment)),
  addLike: (id) => dispatch(addLike(id)),
  removeLike: (id) => dispatch(removeLike(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedIndex);
