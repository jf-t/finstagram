import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { logout } from '../../actions/user_actions';
import { requestImages } from '../../actions/image_actions';

const mapStateToProps = (state, ownProps) => ({
  images: state.images,
  currentUser: state.user,
  pageUserId: ownProps.params.id,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  requestImages: () => dispatch(requestImages()),
  requestUser: (id) => dispatch(requestUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
