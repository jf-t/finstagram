import { connect } from 'react-redux';
import UserSignup from './user_signup';
import { signup } from '../../actions/user_actions';


const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSignup);
