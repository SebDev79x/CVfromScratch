window.onload = () => {
    // Tous les éléments .accordion-element
    const elements = document.querySelectorAll('.accordion-element')
    // Élément actif via 'class' active
    const firstActive = document.querySelector('.accordion .active')
    // Élément p => 2ème enfant de firstActive puis p via query...
    let paragraph = firstActive.children[1].querySelector('p')
    // Hauteur de .sectionAccordion
    let paragraphHeight = paragraph.offsetHeight + 20;
    // Déf de hauteur de .accordion-content
    firstActive.children[1].style.height = paragraphHeight + "px"

    for (let el of elements) {
        el.addEventListener('click', function () {
            // Élément actif
            const active = document.querySelector('.accordion .active')
            // Retrait de la 'class' active
            active.classList.remove('active');
            // Réduction hauteur
            active.children[1].style.height = 0;
            // On ajoute la 'class' active à l'élément cliqué
            this.classList.add('active')
            console.log(this);

            // Hauteur balise p
            let paragraph = this.children[1].querySelector('p')
            console.log(this,  this.children[1].querySelector('p'));

            // Hauteur de .sectionAccordion
            let paragraphHeight = paragraph.offsetHeight + 20;
            console.log(paragraph.offsetHeight + 20,paragraphHeight);
            // Déf de hauteur de .accordion-content
            this.children[1].style.height = paragraphHeight + "px"
        })
    }
}