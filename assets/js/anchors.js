// Eléments cliquables 
let links = document.querySelectorAll('.scrollTo')
/// Eléments pointés
let anchors = document.querySelectorAll('.anchor')
// Fonction anchors : liens d'ancrage redirigeant vers une zone spécifique de la page
const goTo = () => {
    links.forEach((link, i) => {
        links[i].addEventListener("click", function () {
            anchors[i].scrollIntoView(true)
        })
    })
}
goTo();