import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';

class ImageDetail extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.requestImage(this.props.imageId)
  }

  render() {
    let image = this.props.image[0];
    let content;
    if (!image) {
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
      content = (
        <div className="image-detail">
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
            <span className="num-likes">{image.num_likes}</span>
            {editButton}
            <p className="image-caption">{image.caption}</p>
            <div className="comments">
              <ul>
                <li>comment1</li>
                <li>comment2</li>
                <li>comment3</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }

    return content
  }
}


export default ImageDetail;
