import { connect } from 'react-redux';
import FeedIndex from './feed';
import { requestImages } from '../../actions/image_actions';
import Map from './map';
const mapStateToProps = (state) => ({
  images: state.images,
  currentUser: state.user
});

const mapDispatchToProps = dispatch => ({
  requestImages: () => dispatch(requestImages())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
