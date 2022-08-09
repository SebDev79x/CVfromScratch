import { addClass, removeClass } from './functions.js'

let sectionCards = document.getElementById('sectionCards')
let arrows = document.querySelectorAll('.arrowClick')
let arrows2 = document.querySelectorAll('.arrowClick2')

let containers = document.querySelectorAll('.card-container')
let boolState = false
let cards = document.querySelectorAll('.card')

console.log("cards", cards);
const toggle = (i) => {
    const start = () => {
        console.log("on entre dans START", i, cards[i]);

        addClass(sectionCards, 'sectionCardsChangeColor')
        addClass(cards[i], 'cardsRotation')

        boolState = true
    }
    const end = () => {

        removeClass(sectionCards, 'sectionCardsChangeColor')
        // ici element = arrow :D à revoir
        removeClass(cards[i], 'cardsRotation')
        console.log("FI8N END", i, cards[i]);

        boolState = false
    }

    return !boolState ? start() : end()

}
const changeColorOnHoverOrClick = () => {
    containers.forEach((el) => {
        el.addEventListener('mouseover', function () {
            addClass(sectionCards, 'sectionCardsChangeColor')
        })
        el.addEventListener('mouseout', function () {
            removeClass(sectionCards, 'sectionCardsChangeColor')
        })
    })

    /* arrows.forEach((e,i)=>{
        arrows[i].addEventListener('click',function(el){
            console.log("el.target",el.target);
            console.log("arrows[i]",arrows[i]);
            console.log("i",i);
            toggle(i)
        })
    }) */
    const arrowOnClick = (nodelist) => {
/*         let newArray2 = Array.from(nodelist2)
 */        let newArray = Array.from(nodelist)
        console.log(newArray, "newArray");
        newArray.map((e, i) => {
            console.log("eeeeeee", e);
            e.addEventListener('click', function() {
                toggle(i)
            })
        })
    }
    arrowOnClick(arrows)
    arrowOnClick(arrows2)

}
changeColorOnHoverOrClick()