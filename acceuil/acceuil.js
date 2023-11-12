// Initialisez la carte centrée sur l'Europe
const map = L.map('map').setView([51.505, 10], 5);

// Utilisez une couche de tuiles OpenStreetMap (ou d'autres fournisseurs de tuiles)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



// Récupérez la barre de navigation
const navbar = document.getElementById('logobar');

// Récupérez la position initiale de la barre de navigation
const navbarOffset = navbar.offsetTop;

// Fonction pour mettre à jour la position de la barre de navigation lors du défilement
function updateNavbar() {
    if (window.pageYOffset >= navbarOffset) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
}

// Écoutez l'événement de défilement de la page
window.addEventListener('scroll', updateNavbar);
