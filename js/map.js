// Initialize and add the map
function initMap() {
  // The location of Uluru
  const Aberdeen = { lat: 30.091, lng: -81.585 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: Aberdeen,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: Aberdeen,
    map: map,
  });
}
