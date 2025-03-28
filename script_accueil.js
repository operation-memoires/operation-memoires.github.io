function recupererValeur() {
    let valeur = document.getElementById("input").value;
    valeur = valeur.toUpperCase();

    if (valeur == "RUD-MM-06" || valeur == "RUD-MM-03") {
        window.location.href = "video.html";
    } else {
        window.location.href = "archive.html?num="+valeur;
    }
}

// Écoute l'événement "keydown" sur l'input
document.getElementById("input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        recupererValeur(); // Appelle la fonction quand Entrée est pressé
    }
});