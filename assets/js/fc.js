const spansPercent = document.querySelectorAll('.spanPercent')
const value = document.querySelectorAll('.value')
const valueAsAnArray = Array.from(value)

const count = (element, start, end, duration) =>{
    let from = start;
    let range = end - start
    let increment = end > start ? 1 : -1
    let step = Math.abs(Math.floor(duration / range))
    let timer = setInterval(() => {
        from += increment
        element.textContent = from+' %';
        if (from == end) {
            clearInterval(timer)
        }
    }, step)
}

const animInfo = () => {
    const FCI = document.querySelectorAll('.flip-card')
    const supHalfBack = document.querySelectorAll('.supHalfBack')
    const infHalfBack = document.querySelectorAll('.infHalfBack')
    FCI.forEach((e, i) => {
        infHalfBack[i].style.height = '20%'
        supHalfBack[i].style.height = '80%'
        infHalfBack[i].style.transition = 'height 2s ease-in-out'
        supHalfBack[i].style.transition = 'height 2s ease-in-out'
        value[i].style.display = 'none'
        FCI[i].addEventListener('mouseenter', () => {
            count(spansPercent[i],0,valueAsAnArray[i].innerText.slice(0, 2),2000)
        })
        FCI[i].addEventListener('mouseover', () => {
            infHalfBack[i].style.height = valueAsAnArray[i].innerText.slice(0, 2) + '%'
            supHalfBack[i].style.height = 100 - valueAsAnArray[i].innerText.slice(0, 2) + '%'
        })
        FCI[i].addEventListener('mouseleave', () => {
            infHalfBack[i].style.height = '20%'
            supHalfBack[i].style.height = '80%'
        })
    })
}
animInfo()