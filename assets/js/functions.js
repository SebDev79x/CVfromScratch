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