archive_video = "RUD-MM-42"

function recupererValeur() {
    let valeur = document.getElementById("input").value;

    if (valeur == archive_video) {
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