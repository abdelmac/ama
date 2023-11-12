// Initialisez la carte centrée sur l'Europe
const map = L.map('map').setView([51.505, 10], 5);




// Ajoutez une couche de tuiles OpenStreetMap
L.tileLayer('http://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x} ', {
    attribution: 'While Tiles '
}).addTo(map);

// Coordonnées des villes
const cities = [
    { name: 'Paris', coordinates: [48.8566, 2.3522] },
    { name: 'Londres', coordinates: [51.5074, -0.1278] },
    { name: 'Bordeaux', coordinates: [44.8378, -0.5792] }
];

// Ajoutez des marqueurs pour les villes
cities.forEach(city => {
    L.marker(city.coordinates)
        .addTo(map)
        .bindPopup(city.name);
});

// Créez une polyligne reliant les villes
const polylineCoords = cities.map(city => city.coordinates);
L.polyline(polylineCoords, { color: 'red' }).addTo(map);
