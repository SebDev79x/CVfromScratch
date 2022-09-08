/* document.addEventListener('invalid', (function () {
    return function (e) {
      e.preventDefault();
    };
  })(), true); */

/* import {addClass,removeClass} from './functions.js'

let inputs = document.querySelectorAll('input')
let inputsArray = Array.from(inputs)
const listenToChange = () =>{
    inputs.forEach((element,i) => {
        inputs[i].addEventListener('focus',function(e){
            change(e.target.value, inputs[0])
        })
        inputs[i].addEventListener('blur',function(e){
            change(e.target.value, inputs[0])
        })
      
    });
   
 
    
}
const change = (currentValue, element) =>{
    let array = []
    let initialValue = ""
   array = [initialValue]
   array.push(currentValue)
let spanAnimlabels = document.querySelectorAll('.spanAnimlabel')
let spanX = Array.from(spanAnimlabels)
console.log("sapn",spanX);
   if(array[0] !== array[1]){
    spanX[0].style.color = '#f5f0e1';
    spanX[0].style.transform = 'translateX(10px) translateY(-7px)';
    spanX[0].style.padding ='0 10px';
    spanX[0].style.fontSize ='0.65rem';
    spanX[0].style.background = '#1e3d59';
    spanX[0].style.borderLeft = '2px solid #f5f0e1';
    spanX[0].style.borderRight =' 2px solid #f5f0e1';
   }
  
  addClass(element,'testInput') : removeClass(element,'testInput')
  
   if(array.length > 2){
    array.filter((e)=> e !==initialValue)
    initialValue = currentValue
    console.log(array);
   }
   

}
 */