import React from 'react';

class FeedIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    debugger;
    if (this.props.currentUser.user) {
      this.images = this.props.currentUser.user.images;
    } else {
      this.images = []
    }
  }

  render() {
    if (this.images.length > 0) {
      this.feedItems = this.images.map((img) => {
        return (
          <div key={img.id} className="news-feed-item">
            <div className="feed-img-cont">
              <img src={img.image_url} />
            </div>
            <p className="caption">{img.caption}</p>
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
