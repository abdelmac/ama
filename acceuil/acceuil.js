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
const map = L.map('map').setView([49.07081058368201, 6.689774695035996], 6 );




// Ajoutez une couche de tuiles ArcGIS
L.tileLayer('http://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    attribution: '© ArcGIS',
    minZoom: 5,  // Niveau de zoom maximum des tuiles (peut être différent
}).addTo(map);


// Coordonnées des villes
const cities = [
    { name: 'Folschviller', address: '4 Rue du Stade, 57730', coordinates: [49.07081058368201, 6.689774695035996] },
    { name: 'Sarrebruck', coordinates: [49.2383, 6.9813] },
    { name: 'Strasbourg', coordinates: [48.5734, 7.7521] },
    { name: 'Liège', coordinates: [50.8503, 5.6897] },
    { name: 'Namur', coordinates: [50.4632, 4.8633] },
    { name: 'Aachen', coordinates: [50.7753, 6.0839] },
    { name: 'Anvers', coordinates: [51.2194, 4.4025] },
    { name: 'Stuttgart', coordinates: [48.7758, 9.1829] },
    { name: 'Francfort', coordinates: [50.1109, 8.6821] },
    { name: 'Suisse', coordinates: [46.8182, 8.2275] }, // Coordonnées approximatives de la Suisse
    { name: 'Paris', coordinates: [48.8566, 2.3522] },
    { name: 'Lille', coordinates: [50.6292, 3.0573] },
    { name: 'Metz', coordinates: [49.1193, 6.1757] }
];

// Créez une couche de marqueurs pour les villes
const cityMarkers = L.layerGroup(cities.map(city => {
    const marker = L.marker(city.coordinates);
    marker.bindPopup(city.name); // Associez un popup au marqueur avec le nom de la ville
    return marker;
}));

// Ajoutez la couche de marqueurs à la carte
cityMarkers.addTo(map);
// Ajoutez un marqueur rouge pour Folschviller
L.marker(cities[0].coordinates, { icon: L.divIcon({ className: 'red-marker' }) })
    .addTo(map)
    .bindPopup(cities[0].name);


// Créez des polylignes reliant Folschviller aux autres villes
for (let i = 1; i < cities.length; i++) {
    const polylineCoords = [cities[0].coordinates, cities[i].coordinates];
    L.polyline(polylineCoords, { color: '#05063e' }).addTo(map);
}

// Créez une couche de contrôle pour activer/désactiver les noms des villes
const baseLayers = {
    'ArcGIS': arcGISLayer, // Utilisez la couche ArcGIS comme fond de carte
    'Villes': cityMarkers
};

L.control.layers(baseLayers).addTo(map);




function ouvrirPage() {
    var a = document.getElementById("search").value;

    if (a === "pain syrien") {
        window.open("../search/painsyro.html");
    }

    if (a === "viennoiserie") {
        window.open("../search/viennoiserie.html");
    }

    if (a === "youtube") {
        window.open("https://www.youtube.com/");
    }

    if (a === "brun") {
        window.open("../search/painsyrobrun.html");
    }

}
