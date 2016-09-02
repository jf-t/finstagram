import React from 'react';


class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image_url: "",
      caption: "",
      lat: "",
      lng: ""
    }
    this.update = this.update.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  update(e, prop) {
    this.setState({[prop]: e.target.value})
  }

  submitForm(e) {
    e.preventDefault();
    this.props.addImage(this.state);
  }

  render() {
    return(
      <div className="upload-form modal-form">
        <form onSubmit={e => this.submitForm(e)}>
          <input onChange={(e) => this.update(e, "image_url")} placeholder="image url"/>
          <input onChange={(e) => this.update(e, "caption")} placeholder="caption"/>
          <input onChange={(e) => this.update(e, "lat")} placeholder="lat"/>
          <input onChange={(e) => this.update(e, "lng")} placeholder="lng"/>
          <input type="submit" name="Add Image"/>
        </form>
      </div>
    )
  }
};

export default UploadForm;
