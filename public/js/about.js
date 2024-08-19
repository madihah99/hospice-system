document.addEventListener("DOMContentLoaded", function () {
  var map = L.map("map").setView([51.505, -0.09], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  var stores = [
    { coords: [51.505, -0.09], name: "Shop 1" },
    { coords: [51.515, -0.1], name: "Shop 2" },
    { coords: [51.525, -0.11], name: "Shop 3" },
    { coords: [51.535, -0.12], name: "Shop 4" },
  ];

  stores.forEach(function (store) {
    L.marker(store.coords).addTo(map).bindPopup(store.name).openPopup();
  });
});
