// API Key ikkada vastundi. Ippudu khali vadileyyi
const API_KEY = "YOUR_API_KEY_HERE";

// Google Maps script ni auto load chestundi
if (API_KEY !== "YOUR_API_KEY_HERE") {
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBYetwe2QAkjum4pfERhIbGGTPxCalIAmY&libraries=places&callback=initMap`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
} else {
  document.getElementById("info").innerHTML = "API Key kosam wait chestunnam... Key vachaka ikkada pedtam ra.";
}