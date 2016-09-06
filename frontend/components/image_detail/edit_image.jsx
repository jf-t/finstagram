import React from 'react';

class EditImage extends React.Component {
  constructor(props) {
    super(props);
    let image = this.props.image
    this.state = {
      caption: image.caption,
      lat: image.lat,
      lng: image.lng,
      id: image.id,
      image_url: image.image_url
    };
    this.update = this.update.bind(this);
    this.updateImage = this.updateImage.bind(this);
  }

  update(prop) {
    return (e) => this.setState({[prop]: e.target.value})
  };

  updateImage () {
    this.props.editImage(this.state);
  }


  render() {
    return(
      <div id="edit-image" className="edit-image">
        <div className="modal-form edit-form">
          <h4>Edit Image</h4>
          <form onSubmit={this.updateImage}>
            <textarea onChange={this.update("caption")} placeholder="Bio" defaultValue={this.state.caption}></textarea>
            <input type="text" onChange={this.update("lat")} defaultValue={this.state.lat} />
            <input type="text" onChange={this.update("lng")} defaultValue={this.state.lng} />
            <input type="submit" value="Submit Changes"></input>
          </form>
        </div>
      </div>
    )
  }

}
export default EditImage;
