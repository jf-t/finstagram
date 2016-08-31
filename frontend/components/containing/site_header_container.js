import { connect } from 'react-redux';
import SiteHeader from './site_header.jsx';
import { logout } from '../../actions/user_actions';

const mapStateToProps = state => ({
  currentUser: state.user.user
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logout())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SiteHeader);
