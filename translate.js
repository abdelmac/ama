function changeLanguage(lang) {
    document.getElementById("welcome").textContent = data[lang]["welcome"];
    document.getElementById("description").textContent = data[lang]["description"];
}