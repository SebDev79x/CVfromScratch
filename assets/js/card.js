import { addClass, removeClass } from './functions.js'

let sectionCards = document.getElementById('sectionCards')
let arrows = document.querySelectorAll('.arrowClick')
let arrows2 = document.querySelectorAll('.arrowClick2')
let containers = document.querySelectorAll('.card-container')
let cards = document.querySelectorAll('.card')
let boolState = false

// Changement de couleur HOVER
const changeColorBackGroundOnHover = () => {
    containers.forEach((el) => {
        el.addEventListener('mouseover', function () {
            addClass(sectionCards, 'sectionCardsChangeColor')
        })
        el.addEventListener('mouseout', function () {
            removeClass(sectionCards, 'sectionCardsChangeColor')
        })
    })
}
// Changement de flexdirection
const flexDirection = () => {
    window.matchMedia("(max-width: 770px)").matches ? 
    addClass(sectionCards, 'sectionCardsChangeFlexDirection') : 
    removeClass(sectionCards, 'sectionCardsChangeFlexDirection')

}
// Toggle functions between 2 states
const toggle = (i) => {
    const start = () => {
        // Ajout/changement couleur du background
        addClass(sectionCards, 'sectionCardsChangeColor')
        // Rotation d'une carte, Ternaire => Si la classe n'existe pas, add, sinon remove
        !cards[i].classList.contains('cardsRotation') ? addClass(cards[i], 'cardsRotation') : removeClass(cards[i], 'cardsRotation')
        boolState = true
    }
    const end = () => {
        // Retour à couleur initiale du background
        removeClass(sectionCards, 'sectionCardsChangeColor')
        // Rotation d'une carte, Ternaire => Si la classe existe, remove, sinon add
        cards[i].classList.contains('cardsRotation') ? removeClass(cards[i], 'cardsRotation') : addClass(cards[i], 'cardsRotation')
        boolState = false
    }
    return !boolState ? start() : end()
}
// Click on arrow
const clickOnArrow = (nodelist) => {
    let nodelistIsAnArray = Array.from(nodelist)
    nodelistIsAnArray.map((e, i) => {
        e.addEventListener('click', function () {
            toggle(i)
        })
    })
}

// Capture Browser Window Resize Event
const windowSize = () => {
    console.log('HAUTEUR', window.innerHeight)
    console.log('LARGEUR', window.innerWidth)
}

window.addEventListener('resize', windowSize)
window.addEventListener('resize', flexDirection)

screen.innerWidth > 500 ?
    changeColorBackGroundOnHover() :
    clickOnArrow(arrows)
clickOnArrow(arrows2)










// GOOOOOD
/* import { addClass, removeClass } from './functions.js'

let sectionCards = document.getElementById('sectionCards')
let arrows = document.querySelectorAll('.arrowClick')
let arrows2 = document.querySelectorAll('.arrowClick2')
let containers = document.querySelectorAll('.card-container')
let boolState = false
let cards = document.querySelectorAll('.card')

console.log("cards", cards);
const toggle = (i) => {
    const start = () => {
        addClass(sectionCards, 'sectionCardsChangeColor')
        addClass(cards[i], 'cardsRotation')
        boolState = true
    }
    const end = () => {
        removeClass(sectionCards, 'sectionCardsChangeColor')
        removeClass(cards[i], 'cardsRotation')
        console.log("FI8N END", i, cards[i]);
        boolState = false
    }
    return !boolState ? start() : end()
}
const changeColorOnHoverOrClick = () => {
    let windowWidth = window.innerWidth
    let windowHeight = window.innerWidth

    console.log("windowSize",windowWidth);
    console.log("windowHeight",windowHeight);
    if(windowWidth > 500){
        console.log("windowSize > 500");
        containers.forEach((el) => {
            el.addEventListener('mouseover', function () {
                addClass(sectionCards, 'sectionCardsChangeColor')
            })
            el.addEventListener('mouseout', function () {
                removeClass(sectionCards, 'sectionCardsChangeColor')
            })
        })
    }
    if(windowWidth < 499){
    const arrowOnClick = (nodelist) => {
        let newArray = Array.from(nodelist)
        console.log("newarray",newArray);
        console.log(newArray, "newArray");
        newArray.map((e, i) => {
            console.log("eeeeeee", e);
            e.addEventListener('click', function () {
                toggle(i)
            })
        })
    }
    arrowOnClick(arrows)
    arrowOnClick(arrows2)
    }
}
changeColorOnHoverOrClick() */
