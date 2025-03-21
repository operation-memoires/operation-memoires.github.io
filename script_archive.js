let num_archive = window.location.href.split("?num=")[1]

console.log(num_archive)

fetch("data/"+num_archive+".json")
    .then(response => response.json())
    .then(data => {
        let img_link = data["img_link"];
        let description = data["description"];

        // On met le bon numero dans le titre
        document.getElementById("titre").innerText = "Archive n°"+num_archive;
        document.title = "Archive n°"+num_archive;

        // On met la bonne image
        document.getElementById("img").innerHTML = "<img src='"+img_link+"' alt='"+description+"'>";

        // On met la description
        document.getElementById("description").innerText = description;
    })  // Affiche le JSON dans la console
    .catch(error => {
        // Titre erreur
        document.getElementById("titre").innerText = "Archive non trouvée";
        document.title = "Archive non trouvée";

        // On enlève l'image
        document.getElementById("img").innerHTML = "";

        // On met la description
        document.getElementById("description").innerText = "L'archive n'a pas été trouvée.";
    });