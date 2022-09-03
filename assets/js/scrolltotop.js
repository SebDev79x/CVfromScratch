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
    document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    ? btnToScrollToTop.style.display = 'block'
    : btnToScrollToTop.style.display = 'none';
}

// FUNCTION => changement de couleur du bouton
const changeColorMyScrollBtn = () => {
    btnToScrollToTop.style.backgroundColor = '#f5f0e1';
    btnToScrollToTop.style.color = '#ff6e40';

    setTimeout(()=>{
        btnToScrollToTop.style.backgroundColor = '#ff6e40';
    btnToScrollToTop.style.color = '#f5f0e1';
    },2000)
}
// Appel des fonctions lorsque se produisent des événements
btnToScrollToTop.addEventListener('click', scrollToTop)
window.addEventListener('scroll', hideOrDisplayMyScrollBtn)
btnToScrollToTop.addEventListener('mouseover',changeColorMyScrollBtn)

