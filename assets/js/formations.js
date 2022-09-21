/* import { addClassToNodeList } from './functions.js'
import { removeClassFromNodeList } from './functions.js'

let nodelistDiplomas = document.querySelectorAll('.diploma')
let nodelistUlLi = document.querySelectorAll('.diploma ul')
let diplomas = document.getElementById('diplomas')

// Function Start Animation
const start = () => {
    addClassToNodeList(nodelistDiplomas, 'transformDiplomas')
    addClassToNodeList(nodelistUlLi, 'transformDiplomas')
}

// Function Reverse Animation
const end = () => {
    removeClassFromNodeList(nodelistDiplomas, 'transformDiplomas')
    removeClassFromNodeList(nodelistUlLi, 'transformDiplomas')
}

diplomas.addEventListener('mouseenter',  () =>{
    btnChrono.disabled = true;
    setTimeout(function(){
        btnChrono.disabled = false
      }, 3500);
    start()
})
diplomas.addEventListener('mouseleave', () => {
     btnChrono.disabled = true;
     setTimeout(function(){
         btnChrono.disabled = false
       }, 3500);
     end()
 }) */