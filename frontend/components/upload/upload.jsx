import React from 'react';
import _mapOptions from '../../util/map_options';
import { hashHistory } from 'react-router';

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
    this.getLocation = this.getLocation.bind(this);
  }
  componentDidMount () {
    const addUrl =(error, result) => {
      this.setState({image_url: result[0].url});
    }
    const setPos = (e) => {
      this.setState({lat: e.latLng.lat(), lng: e.latLng.lng()})
    }
    const mapDOMNode = this.refs.map;
    this.map = new google.maps.Map(mapDOMNode, _mapOptions);
    this.map.addListener('click', setPos.bind(this));
    let widget = cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, addUrl.bind(this));
  }
  componentDidUpdate() {
    if (this.state.done) {
      hashHistory.push(`profile/${this.props.currentUser.user.id}`)
    }
  }
  update(e, prop) {
    this.setState({[prop]: e.target.value})
  }

  submitForm(e) {
    e.preventDefault();
    let state = this.state;
    this.state = {done: "yes"};
    this.props.addImage(state);
  }

  getLocation(e) {
    e.target.text = "Loading Current Location...";
    e.target.className="current-location disabled"
    e.persist();
    const setLocationData = (coordObj) => {
      let lat = coordObj.coords.latitude;
      let lng = coordObj.coords.longitude;
      this.setState({lat, lng});
      e.target.text = 'Using Current Location';
    }
    navigator.geolocation.getCurrentPosition(setLocationData.bind(this));
  }

  render() {
    if (this.state.lat !== "") {
      let lat = document.getElementById("lat-detail");
      let roundedLat = (Math.floor(this.state.lat * 10000) / 10000);
      lat.innerHTML = roundedLat;
      let lng = document.getElementById("lng-detail");
      let roundedLng = (Math.floor(this.state.lng * 10000) / 10000);
      lng.innerHTML = roundedLng;
    } else {
      this.state.lat = "37.4993";
      this.state.lng = "-122.2909";
    }
    return(
      <div className="upload-form modal-form">
        <div id="upload-holder">

        </div>
        <form onSubmit={e => this.submitForm(e)}>
          <textarea onChange={(e) => this.update(e, "caption")} placeholder="caption"></textarea>
            <div id="map-sm" className="map" ref="map">
              Map
            </div>
            <div className="latNLng">
              <h3>Latitude: <span id="lat-detail"></span></h3>
              <h3>Longitude: <span id="lng-detail"></span></h3>
            </div>
            <a className="current-location" onClick={this.getLocation}>Use Current Location</a>
          <input type="submit" name="Add Image"/>
          <p className="floatLeft">Note: If you are using Google Chrome version 50 or newer, 'Use Current Location' will not work. This is because Google removed the funtionality of location on insecure web pages, such as Heroku. If you would like to use the Use Current Location functionality, switch to a different browser or older version of Chrome.</p>
        </form>
      </div>
    )
  }
};

export default UploadForm;
