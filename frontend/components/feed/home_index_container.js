import { connect } from 'react-redux';
import HomeIndex from './home_index';

const mapStateToProps = (state) => ({
  currentUser: state.user.user
});

export default connect(
  mapStateToProps
)(HomeIndex);
