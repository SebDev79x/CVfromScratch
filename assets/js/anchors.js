// Eléments cliquables 
let links = document.querySelectorAll('.scrollTo')
/// Eléments pointés
let anchor1 = document.querySelector('#home');
let anchor2 = document.querySelector('#about');
let anchor3 = document.querySelector('#xp');
let anchor4 = document.querySelector('#contact');
let anchor5 = document.querySelector('#languages');
let allAnchors = [anchor1, anchor2, anchor3, anchor4, anchor5]

// Fonction anchors : liens d'ancrage redirigeant vers une zone spécifique de la page
const anchors = () => {
    links.forEach((link, i) => {
        links[i].addEventListener("click", function () {
            allAnchors[i].scrollIntoView(true)
        })
    })
}
anchors();