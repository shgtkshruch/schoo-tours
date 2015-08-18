map = ''

init = ->
  mapCanvas = document.getElementById 'google-map'

  mapOptions =
    center: new google.maps.LatLng 17, -5
    disableDoubleClickZoom: false
    mapTypeControl: false
    mapTypeId: google.maps.MapTypeId.ROADMAP
    panControl: true
    panControlOptions:
      position: google.maps.ControlPosition.LEFT_CENTER
    scaleControl: false
    scrollwheel: false
    streetViewControl: false
    zoom: 3
    minZoom: 3
    zoomControl: true
    zoomControlOptions:
      style: google.maps.ZoomControlStyle.LARGE
      position: google.maps.ControlPosition.LEFT_CENTER

  styles = [
      { stylers: [ visibility: "off" ] }
      {
        featureType: "water"
        stylers: [
          { visibility: "on" }
          { color: "#78cbfa" }
        ]
      }
      {
        featureType: "water"
        elementType: "labels.text"
        stylers: [
          { visibility: "on" }
          { color: "#fafafa" }
          { weight: 0.1 }
        ]
      }
      {
        featureType: "landscape"
        elementType: "geometry"
        stylers: [
          { visibility: "on" }
          { color: "#0f97d6" }
        ]
      }
      {
        featureType: "administrative.country"
        elementType: "geometry.stroke"
        stylers: [
          { visibility: "on" }
          { color: "#45c4ff" }
          { weight: 0.4 }
        ]
      }
      {
        featureType: "administrative.locality"
        elementType: "labels.text"
        stylers: [
          { visibility: "on" }
          { color: "#fafafa" }
          { weight: 0.1 }
        ]
      }
    ]

  locations = [
    [19, -155]
    [37, -119]
    [36, -111]
    [43, -74 ]
    [-20, -67]
    [-7, -39]
    [51, 0]
    [22, 5]
    [46, 7]
    [51, 13]
    [-13, 14]
    [41, 28]
    [26, 30]
    [-3, 37]
    [25, 55]
    [1, 73]
    [21, 94]
    [28, 120]
    [35, 139]
    [-33, 151]
  ]

  map = new google.maps.Map mapCanvas, mapOptions
  map.setOptions styles: styles

  addMarker location for location in locations

addMarker = (location) ->
  myLating = new google.maps.LatLng location[0], location[1]
  marker = new google.maps.Marker
    position: myLating
    map: map
    draggable: false
    icon: "images/map-marker.png"

google.maps.event.addDomListener window, "load", init
