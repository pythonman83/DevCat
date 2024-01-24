/* ===== Animation des textes de la page d'accueil ====== */
var typed = new Typed(".typing",{ // Initialise l'animation de texte avec la classe 'typing'
    strings:["","Formateur en langages informatiques","Développeur Web","Concepteur d'applications mobiles","Programmeur en langage Python"], // Tableau des chaînes de texte à animer
    typeSpeed:100, // Vitesse de frappe
    BackSpeed:60, // Vitesse de retour arrière
    loop:true // Répète l'animation en boucle
})
/* ===== Fin de l'animation des textes de la page d'accueil ====== */



/* ===== Animation de la barre de navigation latérale ===== */
const nav = document.querySelector(".nav"), // Sélectionne l'élément de la barre de navigation
      navList = nav.querySelectorAll("li"), // Sélectionne tous les éléments 'li' dans la barre de navigation
      totalNavList = navList.length, // Compte le nombre total d'éléments dans la barre de navigation
      allSection = document.querySelectorAll(".section"), // Sélectionne toutes les sections
      totalSection = allSection.length; // Compte le nombre total de sections
for(let i=0; i<totalNavList; i++) // Boucle sur chaque élément de la barre de navigation
{
    const a = navList[i].querySelector("a"); // Sélectionne le lien dans l'élément de la liste
    a.addEventListener("click", function() // Ajoute un gestionnaire d'événement au clic sur le lien
    {
        removeBackSection(); // Appelle la fonction pour supprimer la section précédente
        for(let j=0; j<totalNavList; j++) // Boucle sur tous les éléments de navigation
        {
            if(navList[j].querySelector("a").classList.contains("active")) // Vérifie si le lien est actif
            {
                addBackSection(j); // Ajoute la classe 'back-section' si le lien est actif
            }
            navList[j].querySelector("a").classList.remove("active"); // Supprime la classe 'active' de tous les liens
        }
        this.classList.add("active") // Ajoute la classe 'active' au lien cliqué
        showSection(this); // Montre la section correspondante
        if(window.innerWidth < 1200) // Vérifie la largeur de la fenêtre
        {
            asideSectionTogglerBtn(); // Appelle la fonction pour gérer l'affichage de la barre de navigation latérale
        }
    })
}
function removeBackSection() // Fonction pour supprimer la classe 'back-section'
{
  for(let i=0; i<totalSection; i++)
  {
      allSection[i].classList.remove("back-section"); // Supprime la classe 'back-section' de toutes les sections
  }   
}
function addBackSection(num) // Fonction pour ajouter la classe 'back-section'
{
  allSection[num].classList.add("back-section"); // Ajoute la classe 'back-section' à la section spécifiée
}
function showSection(element) // Fonction pour afficher une section spécifique
{
    for(let i=0; i<totalSection; i++)
    {
        allSection[i].classList.remove("active"); // Supprime la classe 'active' de toutes les sections
    }
    const target = element.getAttribute("href").split("#")[1]; // Extrait l'identifiant de la section cible à partir du lien
    document.querySelector("#" + target).classList.add("active") // Ajoute la classe 'active' à la section cible
}
function updateNav(element) // Fonction pour mettre à jour la navigation
{
    for(let i=0; i<totalNavList; i++) // Boucle sur tous les éléments de navigation
    {
        navList[i].querySelector("a").classList.remove("active"); // Supprime la classe 'active' de tous les liens
        const target = element.getAttribute("href").split("#")[1]; // Extrait l'identifiant de la section cible à partir du lien
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) // Vérifie si le lien correspond à la cible
        {
          navList[i].querySelector("a").classList.add("active"); // Ajoute la classe 'active' au lien correspondant
        }
    }
}
/* ===== Fin de l'animation de la barre de navigation latérale ===== */



      /* === Animation au clic sur le bouton 'Embauchez-moi' === */
document.querySelector(".hire-me").addEventListener("click", function() // Ajoute un écouteur d'événement au clic sur le bouton 'Embauchez-moi'
{
    const sectionIndex = this.getAttribute("data-section-index"); // Récupère l'index de la section à partir de l'attribut 'data-section-index'
    showSection(this); // Affiche la section correspondante
    updateNav(this); // Met à jour la navigation pour refléter la section active
    removeBackSection(); // Supprime la classe 'back-section' de toutes les sections
    addBackSection(sectionIndex); // Ajoute la classe 'back-section' à la section spécifiée
})
const navTogglerBtn = document.querySelector(".nav-toggler"), // Sélectionne le bouton de basculement de la navigation
      aside = document.querySelector(".aside"); // Sélectionne le panneau latéral
navTogglerBtn.addEventListener("click", () => // Ajoute un écouteur d'événement au clic sur le bouton de basculement
{
    asideSectionTogglerBtn(); // Appelle la fonction pour basculer la section latérale
})
function asideSectionTogglerBtn() // Fonction pour basculer l'affichage de la section latérale
{
    aside.classList.toggle("open"); // Bascule la classe 'open' sur le panneau latéral
    navTogglerBtn.classList.toggle("open"); // Bascule la classe 'open' sur le bouton de basculement
    for(let i=0; i<totalSection; i++ ) // Boucle sur toutes les sections
    {
        allSection[i].classList.toggle("open"); // Bascule la classe 'open' sur chaque section
    }
}
/* === Fin de l'animation au clic sur le bouton 'Embauchez-moi' === */

        /*  Agrandir les images des projets au clic sur l'image  */
document.addEventListener('DOMContentLoaded', function () // Ajoute un écouteur d'événement lorsque le DOM est complètement chargé
{
    var modal = document.createElement("div"); // Crée un nouvel élément div pour le modal
    modal.className = "modal"; // Attribue la classe 'modal' à l'élément div

    var modalImg = document.createElement("img"); // Crée un nouvel élément img pour l'image dans le modal
    modalImg.className = "modal-content"; // Attribue la classe 'modal-content' à l'élément img
    modal.appendChild(modalImg); // Ajoute l'élément img au modal

    var span = document.createElement("span"); // Crée un nouvel élément span pour le bouton de fermeture
    span.className = "close"; // Attribue la classe 'close' à l'élément span
    span.innerHTML = "&times;"; // Ajoute le caractère 'x' comme contenu du span
    modal.appendChild(span); // Ajoute l'élément span au modal

    document.body.appendChild(modal); // Ajoute le modal au corps de la page

    var images = document.querySelectorAll('.portfolio-img img'); // Sélectionne toutes les images dans la section 'portfolio-img'
    images.forEach(function(img) // Boucle sur chaque image
    {
        img.style.cursor = 'pointer'; // Change le curseur en pointeur pour chaque image
        img.onclick = function(){ // Ajoute un écouteur d'événement au clic sur chaque image
            modal.style.display = "block"; // Affiche le modal
            modalImg.src = this.src; // Définit la source de l'image dans le modal à celle de l'image cliquée
        }
    });

    span.onclick = function() { // Ajoute un écouteur d'événement au clic sur le bouton de fermeture
        modal.style.display = "none"; // Cache le modal
    }
});
/*  Fin de l'agrandissement des images des projets au clic sur l'image  */
