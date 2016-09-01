class MarkerManager {
  constructor(map) {
    this.markers = [];
    this.map = map;
    this._createMarker = this._createMarker.bind(this)
    this._removeMarker = this._removeMarker.bind(this)
  }


  updateMarkers(images) {
    this.images = images;
    this._toAdd().forEach(this._createMarker);y
  }

  _toAdd(){
    const imgIds = this.markers.map( marker => marker.image_id );
    const newImgs = this.images;
    const newImgIds = Object.keys(newImgs);

    return newImgIds.reduce( (collection, image_id) => {
      if (!imgIds.includes(image_id)) {
        return ( collection.concat( [newImgs[image_id]] ));
      }
    }, [] );
  }

  _markersToRemove(){
    return this.markers.filter( marker => {
      return !this.images.hasOwnProperty(marker.image_id);
    });
  }

  _createMarker(img) {
    const pos = new google.maps.LatLng(img.image.lat, img.image.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      image_id: img.id
    });
    marker.addListener('click', () => this.handleClick(img));
    this.markers.push(marker);
  }

  _removeMarker(marker) {
    const idx = this.markers.indexOf( marker );
    this.markers[idx].setMap(null);
    this.markers.splice(idx, 1);
  }
}

export default MarkerManager;
