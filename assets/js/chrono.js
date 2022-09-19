import { addClass } from './functions.js'
import { removeClass } from './functions.js'
import { addClassToElements } from './functions.js'
import { removeClassFromElements } from './functions.js'


let lineChrono = document.getElementById('lineChrono')
let btnChrono = document.getElementById('btnChrono')
let boolState = false
let arrayElements = document.querySelectorAll('.date')
let arrayElements2 = document.querySelectorAll('.date ul')
let datesAndLineContainer = document.getElementById('datesAndLineContainer')
const start = () => {
    addClassToElements(arrayElements, 'transformDates')
    addClassToElements(arrayElements2, 'transformDates')
    boolState = true
}

const end = () => {
    console.log("end anim");
    removeClassFromElements(arrayElements, 'transformDates')
    removeClassFromElements(arrayElements2, 'transformDates')

    boolState = false
}

datesAndLineContainer.addEventListener('mouseenter', function () {
   /*  btnChrono.disabled = true;
    setTimeout(function(){
        btnChrono.disabled = false
      }, 3500); */
    return !boolState ? start() : end()
})

/* firstDate.style.left = lineChrono.width/6
 */
/* let secondDate = document.getElementById('secondDate')
secondDate.style.width = lineChrono.width/6+firstDate.width

let thirdDate = document.getElementById('thirdDate')
let fourthDate = document.getElementById('fourthDate')
let fifthDate = document.getElementById('fifthDate')
let sixthDate = document.getElementById('sixthDate')

let firstDateCoordinates = firstDate.getBoundingClientRect()
console.log(firstDateCoordinates,"coordonnées firstdate"); */