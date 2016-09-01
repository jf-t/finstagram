import { connect } from 'react-redux';
import Search from './search';
import { requestUsers } from '../../actions/user_actions';


const mapStateToProps = (state) => ({
  search: state.search
});

const mapDispatchToProps = (dispatch) => ({
  requestUsers: (str) => dispatch(requestUsers(str))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
