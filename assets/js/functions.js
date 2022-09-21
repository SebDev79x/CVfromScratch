// Ajoute une classe à un élément
export const addClass = (element, classToAdd) => {
    element.classList.add(classToAdd);
}

// Retire une classe à un élément
export const removeClass = (element, classToRemove) => {
    element.classList.remove(classToRemove);
}

// Ajoute une classe à une nodelist
export const addClassToNodeList = (elementsArray, classToAdd) => {
    elementsArray.forEach((element, i) => {
            element.classList.add(classToAdd);
    });
}

// Retire une classe à une nodelist
export const removeClassFromNodeList = (elementsArray, classToAdd) => {
    elementsArray.forEach((element, i) => {
            element.classList.remove(classToAdd);
    });
}

export const addClassToElements = (elementsArray, classToAdd) => {
    elementsArray.forEach((element, i) => {
        setTimeout(() => {
            element.classList.add(classToAdd);
        }, i * 500);
    });
}
// Array
export const removeClassFromElements = (elementsArray, classToRemove) => {
    // Array.from(elementsArray).reverse() => to reverse the nodelist
    Array.from(elementsArray).reverse().forEach((element, i) => {
        setTimeout(() => {
            element.classList.remove(classToRemove);
        }, i * 10);
    });
}
// NodeList
export const removeClassFromElements2 = (elementsArray, classToRemove) => {
    // Array.from(elementsArray).reverse() => to reverse the nodelist
    elementsArray.forEach((element, i) => {
        setTimeout(() => {
            element.classList.remove(classToRemove);
        }, i * 10);
    });
}

 