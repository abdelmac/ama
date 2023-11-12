
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
