
/* let progress = document.querySelectorAll('.progress')
let value = document.querySelectorAll('.value')

export const runRedLine = (i) => {
  progress[i].style.background = 'red'
  progress[i].style.width = value[i].innerText.slice(0, 2) + '%'
  if (value[i].innerText.length == 4) {
    progress[i].style.width = value[i].innerText.slice(0, 3) + '%'
  }
}

export const reverseRedLineAnimation = (i) => {

  progress[i].style.width = 0
} */



/* GOOOD export const progressBars2 = () =>{
    let progress = document.querySelectorAll('.progress')
    //Tableau Progress
    for (let i = 0; i < progress.length; i++) {
      progress[i].style.background = 'red'
      let value = document.querySelectorAll('.value')
      // Tableau value
      // on attribue à chaque élément Progress la value correspondante
      for (let i = 0; i < value.length; i++) {
        progress[i].style.width = value[i].innerText.slice(0, 2) + '%'
  
        if (value[i].innerText.length == 4) {
          progress[i].style.width = value[i].innerText.slice(0, 3) + '%'
        }
      }
    }
  } */
/*
// Au scroll de la page, on lance les animations ou on inverse
window.addEventListener('scroll', function () {
  if (window.scrollY > 1001) {
    progressBars2();
  }
})
// En cas de reload de la page, on relance les animations
window.addEventListener('load', function () {
  progressBars2();
}) */