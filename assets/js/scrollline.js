  // Au chargement du DOM, avant tout le reste :
  document.addEventListener("DOMContentLoaded", function () {
    const lineScrollInner = document.querySelector('.scrollLineInner');
  
    window.addEventListener('scroll', function () {
      let h = document.documentElement;
      // Mozilla, Chrome etc. OU I.E. Edge etc.
      let st = h.scrollTop || document.body.scrollTop;
      // scrollHeight = height of the whole page
      let sh = h.scrollHeight || document.body.scrollHeight;
      // clientHeight = height of client window
      let percent = st / (sh - h.clientHeight) * 100;
      let roundedPercent = Math.round(percent);
      lineScrollInner.style.width = roundedPercent + '%';
      lineScrollInner.style.backgroundColor = '#ff6e40';
      lineScrollInner.style.height = '5px';
    })
  })