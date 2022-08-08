export const addClass = (element, classToAdd) => {
    element.classList.add(classToAdd);
}

export const removeClass = (element, classToRemove) => {
    element.classList.remove(classToRemove);
}


/* export const applyNewHeight = (nodelist) => {
    for (let [index, element] of nodelist.entries()) {
        console.log("element", index, element, "from nodelist");
        setTimeout(() => {
            element.style.height = '100px'
        }, index * 200);
    }
}

export const removeNewHeight = (nodelist) => {
    for (let element of nodelist) {
        element.style.height = '0px'
    }
} */

export const addClassToElements = (elementsArray, classToAdd) => {
    elementsArray.forEach((element,i) => {
       
        setTimeout(() => {
            element.classList.add(classToAdd);

                }, i * 500);
        
    });

}

export const removeClassFromElements = (elementsArray, classToRemove) => {
// Array.from(elementsArray).reverse() => to reverse a nodelist
    Array.from(elementsArray).reverse().forEach((element,i) => {
        setTimeout(() => {
            element.classList.remove(classToRemove);
        }, i * 500);
    });}