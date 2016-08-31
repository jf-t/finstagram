import React from 'react';

class FeedIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.requestImages();
  }

  render() {
    if (Object.keys(this.props.images).length > 0) {
      this.feedItems = Object.keys(this.props.images).map((img) => {
        return (
          <div key={this.props.images[img].id} className="news-feed-item">
            <div className="feed-img-cont">
              <img src={this.props.images[img].image_url} />
            </div>
            <p className="caption">{this.props.images[img].caption}</p>
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
