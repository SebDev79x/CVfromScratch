import { addClassToElements, addClass, removeClass } from './functions.js    '

const spansPercent = document.querySelectorAll('.spanPercent')
const value = document.querySelectorAll('.value')
const valueAsAnArray = Array.from(value)
// Animation compteur (Pourcentage de 0 à la valeur de la classe .value)
const count = (element, start, end, duration) => {
    let from = start;
    let range = end - start
    let increment = end > start ? 1 : -1
    let step = Math.abs(Math.floor(duration / range))
    let timer = setInterval(() => {
        from += increment
        element.textContent = from + ' %';
        if (from == end) {
            clearInterval(timer)
        }
    }, step)
}

const animInfo = () => {
    const FCI = document.querySelectorAll('.flip-card')
    const inner = document.querySelectorAll('.flip-card .flip-card-inner')
    const arrowClick = document.querySelectorAll('.arrowClick')
    const arrowClick2 = document.querySelectorAll('.arrowClick2')

    const supHalfBack = document.querySelectorAll('.supHalfBack')
    const infHalfBack = document.querySelectorAll('.infHalfBack')
    FCI.forEach((e, i) => {
        infHalfBack[i].style.height = '20%'
        supHalfBack[i].style.height = '80%'
        infHalfBack[i].style.transition = 'height 2s ease-in-out'
        supHalfBack[i].style.transition = 'height 2s ease-in-out'
        value[i].style.display = 'none'
        let hasTouch = false;
        let hasMouse = false;
        // window.matchMedia("(any-pointer: coarse)").matches ? code pour touch : code pour mouse
        if (window.matchMedia("(any-pointer: coarse)").matches) {
            hasTouch = true;
            if (hasTouch&&!hasMouse) {
                arrowClick[i].addEventListener('touchstart', () => {
                    addClass(inner[i], 'transformInner')
                    count(spansPercent[i], 0, valueAsAnArray[i].innerText.slice(0, 2), 2000)
                    supHalfBack[i].style.height = 100 - valueAsAnArray[i].innerText.slice(0, 2) + '%'
                    infHalfBack[i].style.height = valueAsAnArray[i].innerText.slice(0, 2) + '%'
                })
                arrowClick2[i].addEventListener('touchstart', () => {
                    removeClass(inner[i], 'transformInner')
                    infHalfBack[i].style.height = '20%'
                    supHalfBack[i].style.height = '80%'
                })
            }
        }
        if (window.matchMedia('(pointer:fine)').matches) {
            hasMouse = true;
            if (hasMouse&&!hasTouch) {
                FCI[i].addEventListener('mouseenter', () => {
                    count(spansPercent[i], 0, valueAsAnArray[i].innerText.slice(0, 2), 2000)
                })
                FCI[i].addEventListener('mouseover', () => {
                    infHalfBack[i].style.height = valueAsAnArray[i].innerText.slice(0, 2) + '%'
                    supHalfBack[i].style.height = 100 - valueAsAnArray[i].innerText.slice(0, 2) + '%'
                })
                FCI[i].addEventListener('mouseleave', () => {
                    infHalfBack[i].style.height = '20%'
                    supHalfBack[i].style.height = '80%'
                })
            }
        }
        // Lancement de count 
        /* FCI[i].addEventListener('mouseenter', () => {
            count(spansPercent[i],0,valueAsAnArray[i].innerText.slice(0, 2),2000)
        })
        FCI[i].addEventListener('mouseover', () => {
            infHalfBack[i].style.height = valueAsAnArray[i].innerText.slice(0, 2) + '%'
            supHalfBack[i].style.height = 100 - valueAsAnArray[i].innerText.slice(0, 2) + '%'
        })
        FCI[i].addEventListener('mouseleave', () => {
            infHalfBack[i].style.height = '20%'
            supHalfBack[i].style.height = '80%'
        }) */
    })
}
animInfo()

let icons = document.querySelectorAll('.supHalfFront i')
icons.forEach((e, i) => {
    icons[i].style.color = "#f5f0e1"
})
addClassToElements(icons, 'colored')
