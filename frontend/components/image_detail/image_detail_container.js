import { connect } from 'react-redux';
import { requestImage, editImage } from '../../actions/image_actions';
import ImageDetail from './image_detail';

const mapStateToProps = (state, ownProps) => ({
  image: state.image,
  currentUser: state.user,
  imageId: ownProps.params.id
});

const mapDispatchToProps = (dispatch) => ({
  requestImage: (id) => dispatch(requestImage(id)),
  editImage: (img) => dispatch(editImage(img))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageDetail);
