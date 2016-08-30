import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { logout } from '../../actions/user_actions';
import { requestImages } from '../../actions/image_actions';

const mapStateToProps = (state) => ({
  images: state.images,
  currentUser: state.user
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  requestImages: () => dispatch(requestImages())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
