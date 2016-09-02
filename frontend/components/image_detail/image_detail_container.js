import { connect } from 'react-redux';
import { requestImage } from '../../actions/image_actions';
import ImageDetail from './image_detail';

const mapStateToProps = (state, ownProps) => ({
  image: state.images,
  imageOwner: state.user,
  imageId: ownProps.params.id
});

const mapDispatchToProps = (dispatch) => ({
  requestImage: (id) => dispatch(requestImage(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageDetail);
