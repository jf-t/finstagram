import { connect } from 'react-redux'
import UploadForm from './upload';
import { addImage } from '../../actions/image_actions';
const mapStateToProps = (state) => ({
  image: state.images,
  currentUser: state.user
});

const mapDispatchToProps = (dispatch) => ({
  addImage: (img) => dispatch(addImage(img))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadForm);
