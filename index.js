
  

function initMap() {
    var ubicacion = {lat: -34.945935, lng: -57.950612};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: ubicacion
    });
    var marker = new google.maps.Marker({
      position: ubicacion,
      map: map
    });
  }


  window.initMap = initMap;

