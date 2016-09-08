import { hashHistory } from 'react-router';

class MarkerManager {
  constructor(map) {
    this.markers = [];
    this.map = map;
    this._createMarker = this._createMarker.bind(this);
    this._removeMarker = this._removeMarker.bind(this);

    this.pin = "http://res.cloudinary.com/finstagram/image/upload/c_scale,e_grayscale,w_30/v1473184794/pin_kwj5vh.png"
  }


  updateMarkers(images) {
    this.images = images;
    this._toAdd().forEach(this._createMarker);
  }

  fitBounds() {
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0; i < this.markers.length; i++) {
      bounds.extend(this.markers[i].getPosition());
    }
    return bounds;
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
    const pos = new google.maps.LatLng(img.lat, img.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      image_id: img.id,
      icon: this.pin
    });
    let caption = "";
    if (img.caption) {
      caption = img.caption;
    }
    const content = (
      '<div class="img-tooltip">' +
        '<div class="tooltip-content">' +
          '<div class="img-cont">' +
            `<img src="${img.image_url}" />` +
          '</div>' +
          '<div class="tooltip-text">' +
            `<span class="tooltip-prof-name">${img.user.username}</span>` +
            `<span class="tooltip-caption">${caption}</span>` +
          '</div>' +
        '</div>' +
      '</div>'
    )


    const infowindow = new google.maps.InfoWindow({
      content: content
    })
    marker.addListener('click',() => {
      hashHistory.push(`/images/${img.id}`);
    });
    marker.addListener('mouseover', () => {
      infowindow.open(this.map, marker);
    });
    marker.addListener('mouseout', () => {
      infowindow.close();
    })
    this.markers.push(marker);
  }

  _removeMarker(marker) {
    const idx = this.markers.indexOf( marker );
    this.markers[idx].setMap(null);
    this.markers.splice(idx, 1);
  }
}

export default MarkerManager;
