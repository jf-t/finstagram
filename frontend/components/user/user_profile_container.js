import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { logout, editUser, requestUser, addFollow, removeFollow } from '../../actions/user_actions';
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
  requestUser: (id) => dispatch(requestUser(id)),
  editUser: (user) => dispatch(editUser(user)),
  addFollow: (id, notification, url) => dispatch(addFollow(id, notification, url)),
  removeFollow: (id) => dispatch(removeFollow(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
