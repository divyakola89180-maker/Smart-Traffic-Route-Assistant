let map, directionsService, directionsRenderer;

function initMap(){
  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 16.755, lng: 81.681}, // Tanuku center
    zoom: 13,
    disableDefaultUI: false
  });
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer({ 
    map: map,
    suppressMarkers: false
  });
  document.getElementById("info").innerText = "Map Ready ra! From, To kotti button nokku.";
}