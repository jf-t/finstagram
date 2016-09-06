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
  componentDidMount () {
    const addUrl =(error, result) => {
      this.setState({image_url: result[0].url});
    }
    let widget = cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, addUrl.bind(this));
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
        <div id="upload-holder">

        </div>
        <form onSubmit={e => this.submitForm(e)}>
          <textarea onChange={(e) => this.update(e, "caption")} placeholder="caption"></textarea>
          <input onChange={(e) => this.update(e, "lat")} placeholder="lat"/>
          <input onChange={(e) => this.update(e, "lng")} placeholder="lng"/>
          <input type="submit" name="Add Image"/>
        </form>
      </div>
    )
  }
};

export default UploadForm;
