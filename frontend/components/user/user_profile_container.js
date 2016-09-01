import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { logout, editUser } from '../../actions/user_actions';
import { requestImages } from '../../actions/image_actions';


const mapStateToProps = (state, ownProps) => {
  return ({
    images: state.images,
    currentUser: state.user,
    pageUserId: ownProps.params.id,
    pageUser: state.pageUser
  });
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  requestUser: (id) => dispatch(requestUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
