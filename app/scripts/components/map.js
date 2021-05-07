import mapStyle from './map-styles'

export default () => {
  function initMap() {
    const { google } = window;
    const mapOptions = {
      zoom: 15,
      scrollwheel: false,
      navigationControl: false,
      mapTypeControl: false,
      scaleControl: false,
      draggable: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: mapStyle
    };
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);
    const bounds = new google.maps.LatLngBounds();

    const markers = [];

    for (let i = 0; i < markersData.length; i += 1) {
      const latLng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
      const marker = new google.maps.Marker({
        position: latLng,
        map,
        icon: {
          url: `${MarkerImageSrc}`
        }
      });

      marker.index = i;
      markers.push(marker);
      bounds.extend(marker.position);
      
    }
    
    map.fitBounds(bounds);

    let initial = true 
    google.maps.event.addListener(map, "zoom_changed", () => {
      if (initial === true){
        if (map.getZoom() > 17) {
          map.setZoom(15);
          initial = false;
        }
      }
    });
    
  }
  initMap();
}