// Création variable btnToScrollToTop à partir de l'ID buttonToScrollToTop
let btnToScrollToTop = document.getElementById('buttonToScrollToTop');

// 
/* btnToScrollToTop.style.display = 'block'
 */

// FUNCTION => scroll vers le top
const scrollToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
// FUNCTION => masque/affiche bouton en fonction de son emplacement
const hideOrDisplayMyScrollBtn = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnToScrollToTop.style.display = 'block';
    } else {
        btnToScrollToTop.style.display = 'none';
    }
}

// FUNCTION => changement de couleur du bouton
const changeColorMyScrollBtn = () => {
    btnToScrollToTop.style.backgroundColor = 'red';
    btnToScrollToTop.style.color = 'yellow';

    setTimeout(()=>{
        btnToScrollToTop.style.backgroundColor = 'orange';
    btnToScrollToTop.style.color = '#0f0b2d';
    },2000)
}
// Appel des fonctions lorsque se produisent des événements
btnToScrollToTop.addEventListener('click', scrollToTop)
window.addEventListener('scroll', hideOrDisplayMyScrollBtn)
btnToScrollToTop.addEventListener('mouseover',changeColorMyScrollBtn)

