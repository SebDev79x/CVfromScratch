// à conserver
/* <li class="nav-item active">
<a class="nav-link" target="_blank" href="https://sebdev79x.github.io/FirstApp/">Appli Angular</a>
</li> */
// https://www.primative.net/blog/how-to-get-rid-of-the-flash-of-unstyled-content/
// https://stackoverflow.com/questions/9899372/pure-javascript-equivalent-of-jquerys-ready-how-to-call-a-function-when-t
let domReady = (cb) => {
    document.readyState === 'interactive' || document.readyState === 'complete'
      ? cb()
      : document.addEventListener('DOMContentLoaded', cb);
  };
  
  domReady(() => {
    // Display body when DOM is loaded
    document.body.style.visibility = 'visible';
  });
  // Au chargement du DOM, avant tout le reste :
  document.addEventListener("DOMContentLoaded", function () {
    const lineScrollInner = document.querySelector('.lineScrollInner');
  
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
      lineScrollInner.style.backgroundColor = '#F9BF48';
      lineScrollInner.style.color = 'black';
      lineScrollInner.style.height = '5px';
    })
  })
  
  // Function Link pour éviter d 'avoir à répéter la même fonction et cela permet d'éviter le #machin de l'ancre dans l'URL
  // Eléments cliquables
  let formationsLink = document.getElementById('formations');
  let langagesLink = document.getElementById('langages');
  let presentationLink = document.getElementById('presentation');
  let contactMeLink = document.getElementById('goContactMe');
  /// Eléments pointés
  let xpElement = document.getElementById('xp');
  let langagesLinkElement = document.getElementById('firstBoxLanguages');
  let presentationLinkElement = document.getElementById('about');
  let contactMeElement = document.getElementById('contactMe');
  
  /* let FooterElement = document.getElementById('foot');
   */// 1 tableau pour chaque groupe
  let linksArray = Array(formationsLink,presentationLink, langagesLink, contactMeLink);
  let elementsArray = Array(xpElement,presentationLinkElement, langagesLinkElement, contactMeElement);
  // Fonction anchors()
  function anchors() {
    for (let i = 0; i < elementsArray.length; i++) {
      elementsArray[i]
      linksArray.forEach((e) => {
        e = linksArray[i]
        if (e == elementsArray[i]) { }
        e.addEventListener('click', function () {
          elementsArray[i].scrollIntoView()
        })
      })
    }
  }
  anchors();
  
  //https://www.reddit.com/r/firefox/comments/fpptyj/firefox_content_security_policy_console_output/
  // Warnings dans la console, a priori ce serait en raison de Google Maps
  
  
  // Fonction permettant de modifier certains éléments (en CSS) en fonction de la taille de la fenêtre
  function changeContentAccordingToSizeWindow() {
    var div = (document.querySelectorAll('.title'));
    var divAll = [...div];
    // Si taille de la fenêtre supérieure à 600px alors j'applique certaines propriétés aux éléments dont la classe est title
    // Car en mode mobile, la barre de progression est cachée par le background noir de '.title'
    if (window.matchMedia('(max-width:600px)').matches) {
      divAll.forEach(element => {
        element.style.color = 'black';
        element.style.background = 'transparent';
      });
    } else {
      divAll.forEach(element => {
        element.style.color = '#ffcece';
        element.style.background = 'black';
      });
    }
  }
  window.addEventListener('resize', changeContentAccordingToSizeWindow);
  window.addEventListener('resize', refreshSVG);
  window.onload = changeContentAccordingToSizeWindow(), refreshSVG();
  
  
  
  // Fonctions permettant d'afficher ou masquer le bouton retour haut de page, si l'on se trouve en haut ou bas de page
  // Si l'on est sous 20 pixels du top OU BIEN si l'on est en bas de page >>>> display = none
  // Sinon display = block
  let mybutton = document.getElementById('buttonToScrollToTop');
  
  function scrollFunction() {
  
    //var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
     var scrollBottom = document.body.clientHeight -  window.innerHeight -  window.pageYOffset ;
  
    let mybutton = document.getElementById('buttonToScrollToTop');
 /*    if (scrollBottom > 50) {
      mybutton.style.backgroundColor = '#F36F51';
      mybutton.style.color = 'black';
    } */
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = 'block';
    } else {
      mybutton.style.display = 'none';
    }
  }
  function changeColorButtonTop() {
    let mybutton = document.getElementById('buttonToScrollToTop');
    mybutton.style.backgroundColor = '#F36F51';
    mybutton.style.color = 'black';
/*     setTimeout(() => {
      mybutton.style.backgroundColor = '#FDD252';
      mybutton.style.color = 'black';
    }, 500) */
  }
  
  mybutton.onmouseover = function () {
    changeColorButtonTop()
  }
  // Fonction permettant au clic du bouton aboutHidden d'afficher ou masquer la petite modale contenant mes coordonnées ET
  // Google Maps
  
  jQuery(function () {
    $('#buttonAboutHidden').on('click', function () {
      $('#aboutHidden').fadeToggle('slow', function () {
        $('.closeCoords').on('click', function () {
          $('#aboutHidden').hide('slow');
        })
      });
    });
    $('#smallButtonCloseCoords').on('click', function () {
      $('#aboutHidden').fadeToggle('slow');
    })
  });
  jQuery(function () {
    $('#buttonAboutHidden2').on('click', function () {
      $('#aboutHidden2').fadeToggle('slow', function () {
        $('.closeCoords2').on('click', function () {
          $('#aboutHidden2').hide('slow');
        })
      });
    });
    $('#smallButtonCloseMap').on('click', function () {
      $('#aboutHidden2').fadeToggle('slow');
    })
  });
  
  
  // Fonction permettant au texte contenu dans BLOCK de revenir à sa couleur originale
   function addAndRemoveClearText(element) {
     
    setTimeout(() => {
      element.classList.remove('changeColorToWhite');
      element.classList.add('backToOriginalColor');
  
    }, 8000);
   
  }
  // Fonction permettant aux éléments de classe toggle de basculer entre recto et verso au clic.
  function toggleAndDisplayClearText() {
    let toggle = document.querySelectorAll('.toggle');
    toggle.forEach((element) => {
      element.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('cardFlipped');
          element.classList.remove('backToOriginalColor');
      element.classList.add('changeColorToWhite');
        addAndRemoveClearText(e.currentTarget);
      });
    });
  }
  toggleAndDisplayClearText();
  // Fonction ternaire Toggle : la ternaire passe à la 2ème exp si la 1ère n'est pas vérifiée.
  // Si textContent correspond à originalText, on affiche newText, sinon originalText
  // EXEMPLE :  toggleText(buttonText,"Masquer","Afficher");
  // Si le textContent = SUPPRIMER ou n'importe quelle string dans le template, la ternaire passera à la 2ème expression 'Afficher' puisque la 1ère expression n'est pas vérifiée ==> SUPPRIMER != Masquer
  
  // Voir https://medium.com/@izadzandi/javascript-innerhtml-quand-lutiliser-915846ab0056 pour textContent vs inner.HTML
  
  function toggleText(element, originalText, newText) {
  
    element.textContent = element.textContent == originalText ? newText : originalText;
  
  };
  
  // Fonction permettant de stopper les animations des cartes
  function stopAndReloadAnimation() {
    let stopButton = document.getElementById('stopAnimation')
    let stopButton2 = document.getElementById('stopAnimation2')
    let stopButtons = [stopButton, stopButton2]
    let text = document.getElementById('buttonText')
    let text2 = document.getElementById('buttonText2')
    let texts = [text, text2]
    let toggles = document.querySelectorAll('.toggle')
    let arrows1 = document.querySelectorAll('.arrows1');
    let arrows2 = document.querySelectorAll('.arrows2');
    let arrows = [arrows1, arrows2]
  
    for (let i = 0; i < stopButtons.length; i++) {
  
      stopButtons[i].addEventListener('click', function (e) {
  
        toggleText(texts[i], "Suspendre ?", "Relancer ?");
  
        toggles[i].addEventListener('click', (e) => {
          if (e.currentTarget.classList.contains('cardFlipped')) {
            e.currentTarget.classList.remove('cardFlipped')
          } else {
            e.currentTarget.classList.add('cardFlipped')
          }
        })
  
        arrows[i].forEach((e) => {
          console.log('e', e);
          if (e.classList.contains('rotating')) {
            e.classList.remove('rotating')
          } else {
            e.classList.add('rotating')
          }
        })
      })
    }
  }
  stopAndReloadAnimation();
  
  // Rechargement du SVG
  function refreshSVG() {
    $('.svg-wrapper').load(window.location.href + ' .svg-wrapper>*')
  }
  // Fonction qui affiche le nombre de pixels (à partir du top) au scroll (absente en ligne)
  /* window.addEventListener('scroll', function () {
    document.getElementById('showScroll').innerHTML = window.pageYOffset + 'px';
  }); */
  
  // Fonction RETOUR en HAUT DE PAGE
  // Si clic sur le bouton, retour haut de page
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  window.onscroll = function () {
    setTimeout(window.scrollFunction(), 200);
  
  };
  
  // Slide des 3 derniers boutons
  function slideButtons() {
    var test = document.querySelector('.movingBlock');
    // Ajout de la class movingBlockSlide
      test.classList.add('movingBlockSlide');
  
  }
  // Contraire
  function slideBackButtons() {
    var test = document.querySelector('.movingBlock');
      // Retrait de la class movingBlockSlide
      test.classList.remove('movingBlockSlide');
  
  }
  
  // Fonction pour récupérer la valeur en % de la div value
  // Et appliquer cette valeur à la transition de l'élément progress
  function progressBars(){
    var progress = document.querySelectorAll('.progress')
    // On itère dans le tableau Progress
  for(let i = 0;i<progress.length;i++){
    progress[i].style.background = '#ffcece'
    var value = document.querySelectorAll('.value')
      // On itère dans le tableau value
      // on attribue à chaque élément Progress la value correspondante
    for(let i = 0;i<value.length;i++){
        progress[i].style.width = value[i].innerText.slice(0,2)+'%'
    }
     
  }
  }
  function inverseBars(){
    var progress = document.querySelectorAll('.progress')
    for(let i = 0;i<progress.length;i++){
      progress[i].style.background = '#ffcece'
      var value = document.querySelectorAll('.value')
      for(let i = 0;i<value.length;i++){
        if(progress[i].style.width = value[i].innerText.slice(0,2)+'%'){
          progress[i].style.width = 0
  
        }
      }
       
    }
  }
  // Au scroll de la page, on lance les animations ou on inverse
  window.addEventListener('scroll',function(){
    if(window.scrollY > 1001){
      progressBars();
    slideButtons()
    }
    if(window.scrollY < 1000){
      inverseBars()
      slideBackButtons()
    }
  })
  // En cas de reload de la page, on relance les animations
  window.addEventListener('load',function(){
    progressBars();
    slideButtons()
  
  })
  