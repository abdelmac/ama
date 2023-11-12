// Initialisez la carte centrée sur l'Europe
const map = L.map('map').setView([51.505, 10], 5);

// Utilisez une couche de tuiles OpenStreetMap (ou d'autres fournisseurs de tuiles)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
