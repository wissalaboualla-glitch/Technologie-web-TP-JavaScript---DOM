let nouvelleDiv = document.createElement("div");
let paragraphe = document.createElement("p");
paragraphe.textContent = "Ceci est un paragraphe";
nouvelleDiv.appendChild(paragraphe);
document.getElementById("container").appendChild(nouvelleDiv);
paragraphe.textContent = "Le texte a été modifié";
paragraphe.style.backgroundColor = "lightgreen";
paragraphe.style.textAlign = "center";
paragraphe.style.padding = "10px";
nouvelleDiv.addEventListener("click", function () {
    paragraphe.textContent = "Un clic a été détecté";
});
