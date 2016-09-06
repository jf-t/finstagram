import React from 'react';
import MarkerManager from '../../util/marker_manager';
import _mapOptions from '../../util/map_options';

class Map extends React.Component {

  componentDidMount() {
    const mapDOMNode = this.refs.map;
    this.map = new google.maps.Map(mapDOMNode, _mapOptions);
    this.markermanager = new MarkerManager(this.map);
  }

  componentDidUpdate() {
    this.markermanager.updateMarkers(this.props.images);
  }

  render() {
    return (
      <div className="home-container">
        <div id="map" className="map" ref="map">
          Map
        </div>
      </div>
    );
  }
}

export default Map;
