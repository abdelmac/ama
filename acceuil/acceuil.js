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
    { name: 'Folschviller', coordinates: [49.07081058368201, 6.689774695035996] },
    { name: 'Bordeaux', coordinates: [44.8378, -0.5792] },
    { name: 'Sarrebruck', coordinates: [49.2383, 6.9813] },
    { name: 'Strasbourg', coordinates: [48.5734, 7.7521] },
    { name: 'Liège', coordinates: [50.8503, 5.6897] },
    { name: 'Namur', coordinates: [50.4632, 4.8633] },
    { name: 'Aachen', coordinates: [50.7753, 6.0839] },
    { name: 'Anvers', coordinates: [51.2194, 4.4025] },
    { name: 'Amsterdam', coordinates: [52.3792, 4.8994] }
];

// Ajoutez un marqueur rouge pour Folschviller
L.marker(cities[0].coordinates, { icon: L.divIcon({ className: 'red-marker' }) })
    .addTo(map)
    .bindPopup(cities[0].name);

// Ajoutez des marqueurs pour les autres villes
for (let i = 1; i < cities.length; i++) {
    L.marker(cities[i].coordinates)
        .addTo(map)
        .bindPopup(cities[i].name);
}

// Créez des polylignes reliant Folschviller aux autres villes
for (let i = 1; i < cities.length; i++) {
    const polylineCoords = [cities[0].coordinates, cities[i].coordinates];
    L.polyline(polylineCoords, { color: '#05063e' }).addTo(map);
}
