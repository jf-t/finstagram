import { connect } from 'react-redux';
import AppRouter from './router';

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(AppRouter);
