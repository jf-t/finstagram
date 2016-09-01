import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';


class FeedIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    if (this.props.currentUser.user) {
      this.props.requestImages();
    }
  }

  render() {
    if (this.props.images) {
      this.feedItems = this.props.images.map((img) => {
        return (
          <div key={img.image.id} className="news-feed-item">
            <div className="feed-item-prof">
              <Link to={`/profile/${img.user.id}`}>
                <img src={img.user.image_url} />
                <h4>{img.user.username}</h4>
                <span className="moment-ago">{moment(img.image.created_at).fromNow()}</span>
              </Link>
            </div>
            <div className="feed-img-cont">
              <img src={img.image.image_url} />
            </div>
            <p className="caption">{img.image.caption}</p>
          </div>
        )
      })
    } else {
      this.feedItems = <div></div>
    }
    return(
      <div className="feed">
        {this.feedItems}
      </div>
    )
  }
}
export default FeedIndex;
