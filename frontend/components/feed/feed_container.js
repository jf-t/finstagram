import { connect } from 'react-redux';
import FeedIndex from './feed';
import { requestFollowedImages } from '../../actions/image_actions';

const mapStateToProps = (state) => ({
  images: state.images,
  currentUser: state.user
});

const mapDispatchToProps = dispatch => ({
  requestFollowedImages: (userId) => dispatch(requestFollowedImages(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedIndex);
