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
    this.feed = document.getElementById("feed")
    this.map.style.display = "block";
  }

  switchFeeds() {
    if (this.map.style.display === "block") {
      this.map.style.display = "none";
      this.feed.style.display = "flex"
    } else {
      this.map.style.display = "flex";
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
        console.log(image.id, params.id);
        return <ImageDetailContainer key={image.id} image={image} params={params} />
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
