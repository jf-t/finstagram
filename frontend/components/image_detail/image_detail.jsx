import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import EditImage from './edit_image';

class ImageDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      image_id: this.props.imageId
    };
    this.sendComment = this.sendComment.bind(this);
    this.updateTextarea = this.updateTextarea.bind(this);
    this.likeImage = this.likeImage.bind(this);
    this.unlikeImage = this.unlikeImage.bind(this);
  }

  componentWillMount() {
    if (this.props.image) {
      console.log(this.props.image.id, this.props.imageId);
    }
    if ((!this.props.image) || (Object.keys(this.props.image).length === 0) || (this.props.image.id !== this.props.imageId)) {
      this.props.requestImage(this.props.imageId)
    }
  }
  componentDidUpdate() {
    if (Object.keys(this.props.image).length === 0) {
      this.props.requestImage(this.props.imageId);
    }
  }
  showEditForm() {
    let editForm = document.getElementById("edit-image");
    editForm.style.display = "block";
  }
  updateTextarea(e) {
    this.setState({body: e.target.value})
  }

  sendComment() {
    this.props.addComment(this.state);
  }

  likeImage() {
    let notification = `${this.props.currentUser.user.username} liked your photo!`;
    let url = `/images/${this.props.image.id}`;
    let image_url = this.props.image.image_url;
    this.props.addLike(this.props.image.id, this.props.image.user.id, notification, url, image_url);
    this.setState({some: "idk"})
  }
  unlikeImage() {
    this.props.removeLike(this.props.image.id);
  }

  render() {
    if ((Object.keys(this.props.image).length > 0) && (this.props.image.id.toString() === this.props.imageId)) {
      this.editForm = (
        <EditImage editImage={this.props.editImage} image={this.props.image}/>
      )
    }
    let image = this.props.image;
    let content;
    if ((!image) || (Object.keys(image).length < 2)) {
      content = (
        <div className="loading-icon">
          <h1>loading...</h1>
        </div>
      )
    } else {
      let editButton = "";
      if (image.user.id === this.props.currentUser.user.id) {
        editButton = (
          <div className="edit-img-button">
            <a onClick={this.showEditForm}>
              Edit Image
            </a>
          </div>
        )
      }
      let comments = image.comments.map(comment => {
        return <li key={comment.id} >
          <Link to={`/profile/${comment.author.id}`} className="author-name">{comment.author.username}</Link>
          {comment.body}</li>
      });
      let flag = false;
      let likeOrNo;
      image.likes.forEach(like => {
        if (like.author.id === this.props.currentUser.user.id) {
          flag = true;
        }
      });
      if (flag) {
        likeOrNo = (<a className="unlike-heart" onClick={this.unlikeImage}><i className="fa fa-heart"></i></a>)
      } else {
        likeOrNo = (<a className="like-heart" onClick={this.likeImage}><i className="fa fa-heart-o"></i></a>)
      };

      content = (
        <div className="image-detail image-central">
          <div className="feed-item-prof">
            <Link to={`/profile/${image.user.id}`}>
              <img src={image.user.image_url} />
              <h4>{image.user.username}</h4>
              <span className="moment-ago">{moment(image.created_at).fromNow()}</span>
            </Link>
          </div>
          <div className="image-detail-cont">
            <img src={image.image_url} />
          </div>
          <div className="image-content">
            {likeOrNo}
            <span className="num-likes">{image.likes.length} Likes</span>
            {editButton}
            {this.editForm}
            <p className="image-caption">{image.caption}</p>
            <div className="comments">
              <ul>
                {comments}
              </ul>
            </div>
            <div className="add-comment">
              <form onSubmit={this.sendComment} >
                <textarea className="add-comment" onChange={this.updateTextarea} placeholder="Add Comment..."></textarea>
                <input type="submit"></input>
              </form>
            </div>
          </div>
        </div>
      )
    }

    return content
  }
}


export default ImageDetail;
