import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import Map from './map'

class FeedIndex extends React.Component {
  constructor(props) {
    super(props)
    this.switchFeeds = this.switchFeeds.bind(this)
  }

  componentWillMount() {
    if (this.props.currentUser.user) {
      this.props.requestImages();
    }
  }
  componentDidMount() {
    this.map = document.getElementById("map");
    this.feed = document.getElementById("feed")
    this.map.style.display = "block";
  }

  switchFeeds() {
    if (this.map.style.display === "block") {
      this.map.style.display = "none";
      this.feed.style.display = "block"
    } else {
      this.map.style.display = "block";
      this.feed.style.display = "none";
    }
  }

  render() {
    if (this.props.images) {
      let compare = (a, b) => {
        if (a.image.created_at > b.image.created_at) {
          return -1;
        } else if (a.image.created_at < b.image.created_at) {
          return 1;
        } else {
          return 0;
        }
      }
      this.props.images.sort(compare)

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
        <span onClick={this.switchFeeds} onClick={this.switchFeeds} className="change-feeds">switch feed</span>
        <Map currentUser={this.props.currentUser} images={this.props.images} requestImages={this.props.requestImages}/>
        <div id="feed" className="news-feed">
          {this.feedItems}
        </div>
      </div>
    )
  }
}
export default FeedIndex;
