function calculateRoute(){
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  if(!from || !to){ alert("From, To rendu kottu ra"); return; }

  document.getElementById("info").innerText = "Best traffic route search chestunna...";

  directionsService.route({
    origin: from,
    destination: to,
    travelMode: 'DRIVING',
    drivingOptions: {
      departureTime: new Date(),
      trafficModel: 'bestguess'
    },
    provideRouteAlternatives: true
  }, (result, status) => {
    if(status === 'OK'){
      directionsRenderer.setDirections(result);
      const route = result.routes[0].legs[0];
      document.getElementById("info").innerHTML = `<b>Distance:</b> ${route.distance.text} <br> <b>With Traffic:</b> ${route.duration_in_traffic.text}`;
    } else {
      alert("Route Error: " + status);
    }
  });
}