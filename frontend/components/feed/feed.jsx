import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import Map from './map'
import ImageDetailContainer from '../image_detail/image_detail_container';

class FeedIndex extends React.Component {
  constructor(props) {
    super(props);
    this.switchFeeds = this.switchFeeds.bind(this)
  }

  componentWillMount() {
    if (this.props.currentUser.user) {
      this.props.requestImages();
    }
  }
  componentDidMount() {
    this.map = document.getElementById("map");
    this.feed = document.getElementById("feed");
    this.map.style.display = "block";
  }

  componentDidUpdate() {
    let feedItemHeight = window.innerHeight - 78;
    let feedChilds = this.feed.children;
    feedChilds = Array.from(feedChilds);
    feedChilds.forEach(feedItem => {
      feedItem.style.height = feedItemHeight + "px";
      feedItem.style.width = feedItemHeight + "px"
    });
    this.feed = document.getElementById("feed");
    let feedWidth = ((feedItemHeight + 40) * this.props.images.length);
    this.feed.style.width = feedWidth + "px";
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
        if (a.created_at > b.created_at) {
          return -1;
        } else if (a.created_at < b.created_at) {
          return 1;
        } else {
          return 0;
        }
      }
      this.props.images.sort(compare);
      this.feedItems = this.props.images.map((image) => {
        let params = {
          id: image.id
        }
        return <li className="feed-item-cont" key={image.id}>
                  <img src={image.image_url} />
                  <Link to={`/images/${image.id}`} className="hovercover">
                    <div className="hovercover-content">
                      <div className="prof-info">
                        <span className="hover-username">{image.user.username}</span>
                        <span className="hover-image"><img src={image.user.image_url} /></span>
                      </div>
                      <p className="hover-caption">{image.caption}</p>
                      <span className="big-num-likes">
                        <i className="fa fa-heart-o"></i><span className="inner-heart">{image.likes.length}</span>
                        <i className="fa fa-comment-o"></i><span className="inner-heart">{image.comments.length}</span>
                      </span>
                    </div>
                  </Link>
               </li>
      });

    } else {
      this.feedItems = [<div><h1>loading...</h1></div>]
    }
    return(
      <div className="feed">
        <span onClick={this.switchFeeds} onClick={this.switchFeeds} className="change-feeds">switch feed</span>
        <Map currentUser={this.props.currentUser} images={this.props.images}/>
        <div id="feed" className="news-feed">
          {this.feedItems}
        </div>
      </div>
    )
  }
}
export default FeedIndex;
