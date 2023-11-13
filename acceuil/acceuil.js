// Récupérez la barre de navigation
const navbar = document.getElementById('navbar');

// Récupérez la position initiale de la barre de navigation
const navbarOffset = navbar.offsetTop;

// Récupérez la hauteur de la barre de navigation
const navbarHeight = navbar.clientHeight;

// Fonction pour mettre à jour la position de la barre de navigation lors du défilement
function updateNavbar() {
    if (window.pageYOffset >= navbarOffset) {
        navbar.classList.add('fixed');
        document.body.style.marginTop = navbarHeight + 'px'; // Ajoutez une marge équivalente à la hauteur de la barre
    } else {
        navbar.classList.remove('fixed');
        document.body.style.marginTop = '0'; // Réinitialise la marge
    }
}

// Écoutez l'événement de défilement de la page
window.addEventListener('scroll', updateNavbar);



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
