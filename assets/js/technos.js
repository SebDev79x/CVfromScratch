function progressBars2() {
    var progress = document.querySelectorAll('.progress')
    // On itère dans le tableau Progress
    for (let i = 0; i < progress.length; i++) {
      progress[i].style.background = 'red'
      var value = document.querySelectorAll('.value')
      // On itère dans le tableau value
      // on attribue à chaque élément Progress la value correspondante
      for (let i = 0; i < value.length; i++) {
        progress[i].style.width = value[i].innerText.slice(0, 2) + '%'
  
        if (value[i].innerText.length == 4) {
          progress[i].style.width = value[i].innerText.slice(0, 3) + '%'
        }
      }
    }
  }
  
  // Au scroll de la page, on lance les animations ou on inverse
  window.addEventListener('scroll', function () {
    if (window.scrollY > 1001) {
      progressBars2();
    }
   /*  if (window.scrollY < 1000) {
      inverseBars()
   
    } */
  })
  // En cas de reload de la page, on relance les animations
  window.addEventListener('load', function () {
    progressBars2();
  })