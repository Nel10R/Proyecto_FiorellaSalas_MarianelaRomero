
  let coordenadas;

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 17,
      center: {lat: 10.078705240252233, lng: -84.31729976655222 },
      mapTypeId: "roadmap",
    });

    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
        
      };
      
      navigator.geolocation.getCurrentPosition( success, error, options );
      
      function success(position) {
         coordenadas = position.coords;
      
        console.log('Tu posición actual es:');
        console.log('Latitud : ' + coordenadas.latitude);
        console.log('Longitud: ' + coordenadas.longitude);
        console.log('Más o menos ' + coordenadas.accuracy + ' metros.');
     
      
    const flightPlanCoordinates = [
        
      { lat: coordenadas.latitude ,lng: coordenadas.longitude},
      { lat: 10.078705240252233, lng: -84.31729976655222 },
    ];
    const flightPath = new google.maps.Polyline({
      path: flightPlanCoordinates,
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 4,
    });
  
    flightPath.setMap(map);
  }
};
  function error(error) {
    console.warn('ERROR(' + error.code + '): ' + error.message);
  };
 

  window.initMap = initMap;
