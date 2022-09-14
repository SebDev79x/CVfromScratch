import { addClass } from './functions.js'
import { removeClass } from './functions.js'
import { addClassToElements } from './functions.js'
import { removeClassFromElements } from './functions.js'

/*
import { applyNewHeight } from './functions.js' 
import { removeNewHeight } from './functions.js'
 */
/* let lineChrono = document.getElementById('lineChrono')
let btnChrono = document.getElementById('btnChrono')
let boolState = false
let arrayElements = document.querySelectorAll('.date')

const start = () => {
    console.log("start anim et firstDate", firstDate);
    addClass(lineChrono, 'transformLineChrono')
    addClassToElements(arrayElements, 'transformDates')
    addClassToElements(arrayElements, 'opacityDates')

    boolState = true
}

const end = () => {
    console.log("end anim");
    removeClass(lineChrono, 'transformLineChrono')
    removeClassFromElements(arrayElements, 'transformDates')
    removeClassFromElements(arrayElements, 'opacityDates')

    boolState = false
}

btnChrono.addEventListener('click', function () {
    btnChrono.disabled = true;
    setTimeout(function(){
        btnChrono.disabled = false
      }, 3500);
    return !boolState ? start() : end()
}) */

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