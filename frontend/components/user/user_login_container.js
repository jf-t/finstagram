import { connect } from 'react-redux';
import UserLogin from './user_login';
import { login } from '../../actions/user_actions';


const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserLogin);
