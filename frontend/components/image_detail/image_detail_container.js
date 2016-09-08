import { connect } from 'react-redux';
import { requestImage, editImage, addLike, addComment, removeLike } from '../../actions/image_actions';
import ImageDetail from './image_detail';
const mapStateToProps = (state, ownProps) => {
  let updProps;
  if (ownProps.image) {
    if (Object.keys(ownProps.image).length > 0) {
      updProps = {
        image: ownProps.image
      }
    } else {
      updProps = {
        image: state.image
      }
    }
  } else {
    updProps = {image: state.image}
  }
  return ({
    image: updProps.image,
    currentUser: state.user,
    imageId: ownProps.params.id
  });
};

const mapDispatchToProps = (dispatch) => ({
  requestImage: (id) => dispatch(requestImage(id)),
  editImage: (img) => dispatch(editImage(img)),
  addComment: (comment) => dispatch(addComment(comment)),
  addLike: (id, user_id, notif, url, image_url) => dispatch(addLike(id, user_id, notif, url, image_url)),
  removeLike: (id) => dispatch(removeLike(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageDetail);
