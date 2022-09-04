export const addClass = (element, classToAdd) => {
    element.classList.add(classToAdd);
}

export const removeClass = (element, classToRemove) => {
    element.classList.remove(classToRemove);
}

export const addClassToElements = (elementsArray, classToAdd) => {
    elementsArray.forEach((element, i) => {
        setTimeout(() => {
            element.classList.add(classToAdd);
        }, i * 500);
    });
}

export const removeClassFromElements = (elementsArray, classToRemove) => {
    // Array.from(elementsArray).reverse() => to reverse the nodelist
    Array.from(elementsArray).reverse().forEach((element, i) => {
        setTimeout(() => {
            element.classList.remove(classToRemove);
        }, i * 10);
    });
}

/* const item1 = document.getElementById('item1')
const animInfo = () => {
    item1.addEventListener('mouseover', ()=>{
        let item1Sup = document.querySelector('.item1Sup')
        let item1Inf = document.querySelector('.item1Inf')
       
        item1Sup.style.height = '80%'
        item1Inf.style.height = '20%'
     
     })
}
animInfo() */

 