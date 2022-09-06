/* var test = document.querySelector('.section4');

  const heightOutput = document.querySelector('#height');
  const widthOutput = document.querySelector('#width');
  
  function reportWindowSize() {
    heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth;
  }
  
  window.onresize = reportWindowSize;
  
let btnpush1 = document.querySelector('.btnPush1');
let btnpush2 = document.querySelector('.btnPush2');
let btnpush3 = document.querySelector('.btnPush3'); */

/* let container = document.querySelector('.container3Buttons');
container.classList.remove('container3ButtonsDisplayFlex'); */ /* 
function displayButtons() {
  btnpush1.classList.add('btnPush1Slide');
  btnpush2.classList.add('btnPush2Slide');
  btnpush3.classList.add('btnPush3Slide');
}
function hideButtons() {
  btnpush1.classList.remove('btnPush1Slide');
  btnpush2.classList.remove('btnPush2Slide');
  btnpush3.classList.remove('btnPush3Slide');
}

let breakPoint4 = 1200;
  if (window.matchMedia('(min-width: 768px)').matches) {
    var win = document.defaultView;
    console.log('view',win);
    window.addEventListener('scroll', function () {

    let container = document.querySelector('.container3Buttons');
container.classList.remove('container3ButtonsDisplayFlex');
    if (window.scrollY > breakPoint4) {

      displayButtons()
    } else if (window.scrollY == 0) {
      hideButtons()
    }
  }) 
}

 if (window.matchMedia('(max-width: 767px)').matches){
  hideButtons()

  let buttonsArray = [btnpush1, btnpush2, btnpush3];
  let container = document.querySelector('.container3Buttons');
container.classList.add('container3ButtonsDisplayFlex');
  buttonsArray.forEach((el) => {
    el.style.position = 'relative';
    el.style.left = '75px';
})
} */
/*   window.addEventListener('resize', function () {
    if ((window.matchMedia('(max-width: 967px)').matches)) {
      let buttonsArray = [btnpush1, btnpush2, btnpush3];
      let container = document.querySelector('.container3Buttons');
container.classList.add('container3ButtonsDisplayFlex');
      buttonsArray.forEach((el) => {
        el.style.position = 'relative';
        el.style.left = '75px';

      }) 
    }else if((window.matchMedia('(min-width: 968px)').matches)){
      displayButtons()
      buttonsArray.forEach((el) => {
        el.style.position = 'absolute';
        el.style.left = '-300px';

        container.classList.remove('container3ButtonsDisplayFlex');

      }) 
    }
  }) */

/* function buttonsCentered(){
    container.classList.add('container3ButtonsDisplayFlex');

    buttonsArray.forEach((el)=>{
      el.style.position ='relative';
      el.style.left = '75px';

    })

    btnpush1.classList.remove('btnPush1Slide');

    btnpush2.classList.remove('btnPush2Slide');
    btnpush3.classList.remove('btnPush3Slide');
}
buttonsCentered()
window.addEventListener('resize',buttonsCentered()) */
/* function toggleSlide() {
  $('.slidingDiv').load(location.href + ' .slidingDiv');
} */
//


/*   function hideButtonBottomPage() {
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
      mybutton.style.display = 'none';
    }
  }; */


// Afficher Sébastien Mazur lettre par lettre
/* let htmlElement = document.getElementById('names');
let lettersName = htmlElement.dataset.label;
let lettersNamesNumber = 0;
function displayNamesLetterByLetter() {
  let timeOut;
  if (lettersNamesNumber < lettersName.length) {
    htmlElement.innerHTML += `<span>${lettersName[lettersNamesNumber]}</span>`;
    timeOut = setTimeout(displayNamesLetterByLetter, 200);
    lettersNamesNumber++
  }
  else {
    clearTimeout(timeOut);
  }
} */

// Afficher Dév Web lettre par lettre
/* displayNamesLetterByLetter();
let htmlElement2 = document.getElementById('job');
let lettersJob = htmlElement2.dataset.label;
let lettersJobNumber = 0;
function displayJobLetterByLetter() {
  let timeOut2;
  if (lettersJobNumber < lettersJob.length) {
    htmlElement2.innerHTML += `<span>${lettersJob[lettersJobNumber]}</span>`;
    timeOut2 = setTimeout(displayJobLetterByLetter, 200);
    lettersJobNumber++
  }
  else {
    clearTimeout(timeOut2);
  }
}
displayJobLetterByLetter(); */

// Fondu sur container bigCitation2
/* let wip = document.getElementById('wip');
$(document).ready(function displayWip() {
        $(wip).fadeIn(4000);
  }); */

// Affichage ou non de la noix de coco dans le footer, pour le fun
/*
function displayCoconut(){
  $('.coconutFooter').css('display', 'inline-block');
};
function hideCoconut(){
  $('.coconutFooter').css('display', 'none');
};
$(document).ready(function () {
  $('.credits').hover(displayCoconut);
});
$(document).ready(function () {
  $('.credits').mouseleave(hideCoconut);
});*/

// Effet blink sur la noix de coco et WIP ! :D
/* function blinker() {
  $('.coconut').fadeOut(500);
  $('.coconut').fadeIn(500);
  $('.warning').fadeOut(1000);
  $('.warning').fadeIn(1000);
}
setInterval(blinker, 2000); */



/* window.addEventListener('scroll', function () {
  let breakPoint3 = 1100;
  let breakPoint4 = 1500;
  if (window.scrollY > breakPoint3 || window.scrollY > breakPoint4) {
    animation();
    animation2();
  } else
  if ($(window).scrollTop() == 0) {
    refreshDiv();
    refreshDiv2();
  }
}); */


// Ancienne formule qui renvoyait un warning dans la console FFx :
// This site appears to use a scroll-linked positioning effect. 
//This may not work well with asynchronous panning; 
//see https://developer.mozilla.org/docs/Mozilla/Performance/ScrollLinkedEffects for further details and to join the discussion on related tools and features!
/* || window.scrollY > breakPoint4 */
/* window.addEventListener('scroll', function () {

  

  let breakPoint4 = 2000;

  if (window.scrollY > breakPoint4 ) {
    animation();
    animation2();

  } 

});
window.addEventListener('scroll', function () {


if ($(window).scrollTop() == 0) {
  refreshDiv();
  refreshDiv2();
}
}) */


/*     <div class="container">
<div class="row">
  <div class="text-center mb-2 mt-5 col-lg-4 offset-lg-4">
    <a id="buttonAboutHidden" class="btn btnPush1" href="#aboutHidden">Mes coordonnées...</a>
  </div>
</div>
<div class="row">
  <div class="text-center mb-2 mt-5 col-lg-4 offset-lg-4">
    <a id="buttonAboutHidden2" class="btn btnPush3" href="#aboutHidden2">Me situer...</a>
  </div>
</div>
<div class="row">
  <div class="text-center mb-2 mt-5 col-lg-4 offset-lg-4">
    <a href="#!" class="btn btnPush2" data-toggle="modal" data-target="#exampleModalCenter" id="contactMe">Me contacter par mail ?</a>
  </div>
</div>
</div>  */


/* <p style="color:yellow">Resize the browser window to fire the <code>resize</code> event.</p>
<p style="color:yellow">Window height: <span id="height"></span></p>
<p style="color:yellow">Window width: <span id="width"></span></p> */



/*  <rect class="shape" height="100%" width="100%" pathLength="1"/>
<text x="25" y="30"  fill="red">Sébastien MAZUR</text>
<text x="65" y="45"  fill="red">Développeur Web & Web Mobile Junior</text> */


{/* <div class="container bigCitation2" style="padding:1px;margin-top:50px;max-width:1078px" id="wip">
<div class="cadreInt">
  <div class="row citation2">
    <div class="col-lg-8 offset-lg-2 text-center">
      <h1 id="names" class=" names2" style="margin-top:20px" data-label="Sébastien MAZUR"></h1>
      <h2 id="job" class="lead names" data-label="Développeur Web & Web Mobile Junior"></h2>
      <p id="" class="names warning"> <span class="warning">&#9888;</span> Work In Progress <span class="warning">&#9888;</span> </p>
    </div>
  </div>
</div>
</div>  */}
/* <div class="container" id="" style="border-radius:10px;background:black;">
<div class="row ">
  <div class="col">
    <p class="text-center" style="font-size:17px;color:red">Votre mail est en cours de traitement...</p>
    <div id="loader" style="display:block;border:1px solid red" class="mb-3">
      <img src="assets/img/ajax-loader.gif" alt="loader">
    </div>
  </div>
</div>
</div> */
/* var card = document.querySelector('.card');
card.addEventListener('click', function () {
  card.classList.toggle('cardFlipped');
  console.log('card',card);
});
var card2 = document.querySelector('.card2');
card2.addEventListener('click', function () {
  card2.classList.toggle('cardFlipped2');
}); */

   /*  body: JSON.stringify(this.state),
         headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
         } */


         /////////////////////////////////////////////////////////JS CV
         // Au chargement du DOM, avant tout le reste :
/* document.addEventListener("DOMContentLoaded", function () {
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
    lineScrollInner.style.backgroundColor = 'red';
    lineScrollInner.style.color = 'black';
    lineScrollInner.style.height = '10px';

    
  })
}) */


// Méthode pas trop optimisée :
/* langagesLink.addEventListener('click',function(){
  
  let langagesLinkElement = document.getElementById('firstBoxLanguages');
  langagesLinkElement.scrollIntoView()

}) 
presentationLink.addEventListener('click',function(){
  
  let presentationLinkElement = document.getElementById('about');
  presentationLinkElement.scrollIntoView()

})
contactMeLink.addEventListener('click',function(){
  
  let contactMeElement = document.getElementById('contactMe');
  contactMeElement.scrollIntoView()

}) */
// https://www.primative.net/blog/how-to-get-rid-of-the-flash-of-unstyled-content/
// https://stackoverflow.com/questions/9899372/pure-javascript-equivalent-of-jquerys-ready-how-to-call-a-function-when-t
/* let domReady = (cb) => {
  document.readyState === 'interactive' || document.readyState === 'complete'
    ? cb()
    : document.addEventListener('DOMContentLoaded', cb);
};

domReady(() => {
  // Display body when DOM is loaded
  document.body.style.visibility = 'visible';
}); */

//https://www.reddit.com/r/firefox/comments/fpptyj/firefox_content_security_policy_console_output/
// Warnings dans la console, a priori ce serait en raison de Google Maps
/* window.onload = changeContentAccordingToSizeWindow(), refreshSVG();
 */



// Au scroll, lancer l'animation selon critères

// Fonction permettant de modifier certains éléments (en CSS) en fonction de la taille de la fenêtre
/* function changeContentAccordingToSizeWindow() {
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
      element.style.color = 'red';
      element.style.background = 'black';
    });
  };
}
window.addEventListener('resize', changeContentAccordingToSizeWindow);
window.addEventListener('resize', refreshSVG);
 */

// Fonctions permettant d'afficher ou masquer le bouton retour haut de page, si l'on se trouve en haut ou bas de page
// Si l'on est sous 20 pixels du top OU BIEN si l'on est en bas de page >>>> display = none
// Sinon display = block
let mybutton = document.getElementById('buttonToScrollToTop');

function scrollFunction() {

  var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
  //   var scrollBottom = document.body.clientHeight -  window.innerHeight -  window.scrollY;

  let mybutton = document.getElementById('buttonToScrollToTop');
  if (scrollBottom > 50) {
    mybutton.style.backgroundColor = 'red';
    mybutton.style.color = 'black';
  }
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
};
function changeColorButtonTop() {
  let mybutton = document.getElementById('buttonToScrollToTop');
  mybutton.style.backgroundColor = 'black';
  mybutton.style.color = 'red';
  setTimeout(() => {
    mybutton.style.backgroundColor = 'red';
    mybutton.style.color = 'black';
  }, 500)
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


// Fonction permettant au bouton btnPush2 de revenir à son état initial, sinon reste encadré de bleu. Et c'est pénible !
$('body').on('hidden.bs.modal', '.modal', function () {
  $('.btnPush2').on('blur');
});

// Fonction permettant au texte contenu dans BLOCK de revenir à sa couleur originale (gris)
/* let blocks = document.querySelectorAll('.block')
blocks.forEach((e)=>{
  e.style.color = 'green';
})  */
function removeClearText(element) {
  setTimeout(() => {
    element.classList.remove('changeColorToWhite')
    element.classList.add('backToOriginalColor')

  }, 8000);

};
// Fonction permettant aux éléments de classe toggle de basculer entre recto et verso au clic.

function toggleAndDisplayClearText() {
  let toggle = document.querySelectorAll('.toggle');
  toggle.forEach((element) => {
    element.addEventListener('click', (e) => {
      e.currentTarget.classList.toggle('cardFlipped');
      e.currentTarget.classList.remove('backToOriginalColor');

      e.currentTarget.classList.add('changeColorToWhite');

      removeClearText(e.currentTarget);
    });
  });
};
toggleAndDisplayClearText();
// Fonction ternaire Toggle : la ternaire passe à la 2ème exp si la 1ère n'est pas vérifiée.
// Si textContent correspond à originalText, on affiche newText, sinon originalText
// EXEMPLE :  toggleText(buttonText,"Masquer","Afficher");
// Si le textContent = SUPPRIMER ou n'importe quelle string dans le template, la ternaire passera à la 2ème expression 'Afficher' puisque la 1ère expression n'est pas vérifiée ==> SUPPRIMER != Masquer

// Voir https://medium.com/@izadzandi/javascript-innerhtml-quand-lutiliser-915846ab0056 pour textContent vs inner.HTML

function toggleText(element, originalText, newText) {

  element.textContent = element.textContent == originalText ? newText : originalText;

};

// Fonction permettant d'arrêter le flip des cartes et/ou de le relancer, idem pour la rotation des flèches
/* function stopAndReloadAnimation() {
  let stopButton = document.getElementById('stopAnimation')
  let stopButton2 = document.getElementById('stopAnimation2')
  let stopButtons = [stopButton,stopButton2]
  // Au clic, si 'rotating' existe, on le retire, rotation des flèches désactivée SINON on l' active
  stopButtons.forEach((e)=>{

  
  e.addEventListener('click', function () {

   

    let buttonText = document.getElementById('buttonText')
    let buttonText2 = document.getElementById('buttonText2')

    toggleText(buttonText,"Suspendre ?","Relancer ?");
    toggleText(buttonText2,"Suspendre ?","Relancer ?");

    let toggle = document.querySelectorAll('.toggle');
    let arrows = document.querySelectorAll('.arrows');
    for(let i = 0;i<arrows.length;i++){
      console.log('arrows boucle',arrows[i]);
          }
    arrows.forEach((e)=>{
      if(e.classList.contains('rotating')){
        e.classList.remove('rotating')
      }else{
        e.classList.add('rotating')
      }
    })
    // Au clic, si class 'cardFlipped' existe, on la retire SINON on l'ajoute
    toggle.forEach((element) => {
      element.addEventListener('click', (e) => {
        if (e.currentTarget.classList.contains('cardFlipped')) {
          e.currentTarget.classList.remove('cardFlipped')
        } else {
          e.currentTarget.classList.add('cardFlipped')
        }
      });
    });
  })
})

} */
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

// Fonctions refreshDiv et refreshDiv2 qui permettent de recharger les div concernées, je passe à la fonction load() en 2ème paramètre 
// la fonction changeContentAccordingToSizeWindow permettant de détecter
// le redimensionnement de la fenêtre
// SetTimeout pour appliquer le style après le reload des DIV concernées

function refreshDiv() {
  setTimeout(() => {
    changeContentAccordingToSizeWindow();
  }, 500);
    $('.front4').load(window.location.href + ' .front4>*');
$('.front3').load(window.location.href + ' .front3>*');
  

    

}
function refreshSVG() {
  $('.svg-wrapper').load(window.location.href + ' .svg-wrapper>*')
}
// Fonction qui affiche le nombre de pixels (à partir du top) au scroll (absente en ligne)
window.addEventListener('scroll', function () {
  document.getElementById('showScroll').innerHTML = window.pageYOffset + 'px';
});

// Fonction RETOUR en HAUT DE PAGE
// Si clic sur le bouton, retour haut de page
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
window.onscroll = function () {
  setTimeout(window.scrollFunction(), 200);

};

// Slide des 3 derniers boutons en fonction du niveau du scroll
function slideButtons() {
  var test = document.querySelector('.movingBlock');
  let breakPoint4 = 1000;
// (window.pageYOffset  > breakPoint4)
  if (((window.pageYOffset  > breakPoint4) && window.matchMedia('(min-width:601px)').matches) || (window.matchMedia('(max-width:600px)').matches && window.pageYOffset > 1000)) {
    test.classList.add('movingBlockSlide');
  } else if (window.pageYOffset  < 250) {
    test.classList.remove('movingBlockSlide');
  }
}
function onReloadPageSlideButtons() {
  var test = document.querySelector('.movingBlock');
  if (window.pageYOffset > 300) {
    test.classList.add('movingBlockSlide');
  }
}


// Fonction liée au scroll : je détecte le scroll et à un certain nombre de pixels en partant du haut, la fonction animation() (et la 2ème) s'exécute.
// Et lorsque je scrolle pour remonter, arrivé à un certain nombre de pixels en partant du haut, je recharge la div concernée, pour de nouveau 
// recharger l'animation


window.addEventListener('scroll', function () {
  if (window.scrollY == 0) {

// pas certain
    animation();
    animation2();
  }
});


window.addEventListener('scroll', slideButtons)
window.addEventListener('load', onReloadPageSlideButtons)

function runWhenPageIsFullyParsed() {
window.addEventListener('scroll', function () {
  if (window.scrollY == 0) {

    refreshDiv();

  }
});


if (document.readyState === "complete") {
    // already fired, so run logic right away
    runWhenPageIsFullyParsed();
} else {
    // not fired yet, so let's listen for the event
    window.addEventListener("DOMContentLoaded", runWhenPageIsFullyParsed);
}
}

  //function isBreakPointReached(){
  /*   let breakPoint3 = 300;
    let element;
        if (window.pageYOffset > breakPoint3) { 
            element = true
          
        }else if(window.pageYOffset < breakPoint3){
                    element = false
    
        }
        if(element = true){
            console.log('youpi')
              animation()
        animation2()
        }
    }
    isBreakPointReached() */

    $('.html').animate({ width: '70%' }, 1000,
    function() { 
          setTimeout(function() {
              location.reload();
          }, 2000)});

          uyyyyyyyyyyyyyyyyyyyyyyyyyyyy


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
    lineScrollInner.style.backgroundColor = 'red';
    lineScrollInner.style.color = 'black';
    lineScrollInner.style.height = '10px';

/*         lineScrollInner.innerText =  roundedPercent + '%';
 */    
  })
})

// Function Link pour éviter d 'avoir à répéter la même fonction et cela permet d'éviter le #machin de l'ancre dans l'URL
// Eléments cliquables
let langagesLink = document.getElementById('langages');
let presentationLink = document.getElementById('presentation');
let contactMeLink = document.getElementById('goContactMe');
/* let footerLink = document.getElementById('goToFooter');
 */// Eléments pointés
let langagesLinkElement = document.getElementById('firstBoxLanguages');
let presentationLinkElement = document.getElementById('about');
let contactMeElement = document.getElementById('contactMe');
/* let FooterElement = document.getElementById('foot');
 */// 1 tableau pour chaque groupe
let linksArray = Array(presentationLink, langagesLink, contactMeLink);
let elementsArray = Array(presentationLinkElement, langagesLinkElement, contactMeElement);
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
// Méthode pas trop optimisée :
/* langagesLink.addEventListener('click',function(){
  
  let langagesLinkElement = document.getElementById('firstBoxLanguages');
  langagesLinkElement.scrollIntoView()

}) 
presentationLink.addEventListener('click',function(){
  
  let presentationLinkElement = document.getElementById('about');
  presentationLinkElement.scrollIntoView()

})
contactMeLink.addEventListener('click',function(){
  
  let contactMeElement = document.getElementById('contactMe');
  contactMeElement.scrollIntoView()

}) */


//https://www.reddit.com/r/firefox/comments/fpptyj/firefox_content_security_policy_console_output/
// Warnings dans la console, a priori ce serait en raison de Google Maps
window.onload = changeContentAccordingToSizeWindow(), refreshSVG();

//Shake shake shake !
// Fonctions animation des barres de progression
function animation() {
    
 $('.html').animate({ width: '70%' }, 1000);
  $('.css').animate({ width: '50%' }, 1000);
  $('.javascript').animate({ width: '50%' }, 1000);
  $('.php').animate({ width: '40%' }, 1000);
};
function animation2() {
  $('.angular').animate({ width: '30%' }, 1000);
  $('.jquery').animate({ width: '40%' }, 1000);
  $('.AJAX').animate({ width: '30%' }, 1000);
  $('.SQL').animate({ width: '40%' }, 1000);

};



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
      element.style.color = 'red';
      element.style.background = 'black';
    });
  };
}
window.addEventListener('resize', changeContentAccordingToSizeWindow);
window.addEventListener('resize', refreshSVG);


// Fonctions permettant d'afficher ou masquer le bouton retour haut de page, si l'on se trouve en haut ou bas de page
// Si l'on est sous 20 pixels du top OU BIEN si l'on est en bas de page >>>> display = none
// Sinon display = block
let mybutton = document.getElementById('buttonToScrollToTop');

function scrollFunction() {

  var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
  //   var scrollBottom = document.body.clientHeight -  window.innerHeight -  window.scrollY;

  let mybutton = document.getElementById('buttonToScrollToTop');

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
};
function changeColorButtonTop() {
  let mybutton = document.getElementById('buttonToScrollToTop');
  mybutton.style.backgroundColor = 'black';
  mybutton.style.color = 'red';
  setTimeout(() => {
    mybutton.style.backgroundColor = 'red';
    mybutton.style.color = 'black';
  }, 500)
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


// Fonction permettant au bouton btnPush2 de revenir à son état initial, sinon reste encadré de bleu. Et c'est pénible !
$('body').on('hidden.bs.modal', '.modal', function () {
  $('.btnPush2').on('blur');
});

// Fonction permettant au texte contenu dans BLOCK de revenir à sa couleur originale (gris)
/* let blocks = document.querySelectorAll('.block')
blocks.forEach((e)=>{
  e.style.color = 'green';
})  */
function removeClearText(element) {
  setTimeout(() => {
    element.classList.remove('changeColorToWhite')
    element.classList.add('backToOriginalColor')

  }, 8000);

};
// Fonction permettant aux éléments de classe toggle de basculer entre recto et verso au clic.

function toggleAndDisplayClearText() {
  let toggle = document.querySelectorAll('.toggle');
  toggle.forEach((element) => {
    element.addEventListener('click', (e) => {
      e.currentTarget.classList.toggle('cardFlipped');
      e.currentTarget.classList.remove('backToOriginalColor');

      e.currentTarget.classList.add('changeColorToWhite');

      removeClearText(e.currentTarget);
    });
  });
};
toggleAndDisplayClearText();
// Fonction ternaire Toggle : la ternaire passe à la 2ème exp si la 1ère n'est pas vérifiée.
// Si textContent correspond à originalText, on affiche newText, sinon originalText
// EXEMPLE :  toggleText(buttonText,"Masquer","Afficher");
// Si le textContent = SUPPRIMER ou n'importe quelle string dans le template, la ternaire passera à la 2ème expression 'Afficher' puisque la 1ère expression n'est pas vérifiée ==> SUPPRIMER != Masquer

// Voir https://medium.com/@izadzandi/javascript-innerhtml-quand-lutiliser-915846ab0056 pour textContent vs inner.HTML

function toggleText(element, originalText, newText) {

  element.textContent = element.textContent == originalText ? newText : originalText;

};

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

// Fonctions refreshDiv et refreshDiv2 qui permettent de recharger les div concernées, je passe à la fonction load() en 2ème paramètre 
// la fonction changeContentAccordingToSizeWindow permettant de détecter
// le redimensionnement de la fenêtre
// SetTimeout pour appliquer le style après le reload des DIV concernées

function refreshDiv() {
  setTimeout(() => {
    changeContentAccordingToSizeWindow();
  }, 500);
 // $('.front4').load(window.location.href + ' .front4>*');
 // $('.front3').load(window.location.href + ' .front3>*');
//let back = document.getElementById('back3')
//back.load(window.location.href + ' #back3>*');
  console.log('reload divs front');
}
function refreshSVG() {
  $('.svg-wrapper').load(window.location.href + ' .svg-wrapper>*')
}
// Fonction qui affiche le nombre de pixels (à partir du top) au scroll (absente en ligne)
window.addEventListener('scroll', function () {
  document.getElementById('showScroll').innerHTML = window.scrollY + 'px';
});
// Fonction liée au scroll : je détecte le scroll et à un certain nombre de pixels en partant du haut, la fonction animation() (et la 2ème) s'exécute.
// Et lorsque je scrolle pour remonter, arrivé à un certain nombre de pixels en partant du haut, je recharge la div concernée, pour de nouveau 
// recharger l'animation


window.addEventListener('scroll', function () {
  if (window.pageYOffset == 0) {
    refreshDiv();
    console.log('refresh des div au scroll = 0');

  }
});
// Fonction RETOUR en HAUT DE PAGE
// Si clic sur le bouton, retour haut de page
/* function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
window.onscroll = function () {
  setTimeout(window.scrollFunction(), 200);

}; */

// Slide des 3 derniers boutons en fonction du niveau du scroll
/* function slideButtons() {
  var test = document.querySelector('.movingBlock');
  let breakPoint4 = 200;
// (window.pageYOffset  > breakPoint4)
  if (((window.pageYOffset  > breakPoint4) && window.matchMedia('(min-width:601px)').matches) || (window.matchMedia('(max-width:600px)').matches && window.pageYOffset > 200)) {
    test.classList.add('movingBlockSlide');
  } 
}
function onReloadPageSlideButtons() {
  console.log('au reload des pages,');
  var test = document.querySelector('.movingBlock');
  if (window.innerHeight > 300) {
    test.classList.add('movingBlockSlide');
  }
} */



  
// problème arrive à la fin de l'animation et dure le même temps quand on scrolle
// Au scroll, lancer l'animation selon critères
/* function isBreakPointReached(){
   let breakPoint3 = 300;
  let element;
  window.addEventListener('scroll', function(){
      if (window.pageYOffset > breakPoint3) { 
          element = true
                  console.log(element)

      }else if(window.pageYOffset < breakPoint3){
                   element = false
                                     console.log(element)

  
      }
  })
      if(element = true){
          console.log('youpi')
            animation()
       animation2()
      }else{
          refreshDiv()
      }
  }
  isBreakPointReached()
window.addEventListener('scroll', slideButtons)
window.addEventListener('load', onReloadPageSlideButtons) */


/* CANVAS EYEBALLS */
/* .canvasContainer{
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;

}
#canvas1{
  border:5px solid white;
  width:100%;
  height:100%;
  background-color: #fff;
} */
/* CARDS + CARDS CONTAINER */
/* .sectionCards {
  height: 500px;
  background-color: white;
  border: 5px solid red;
  display: flex;
  justify-content: space-evenly;
  transition: background-color 2s ease;
}
.sectionCardsChangeColor {
  background-color: orange;
}
.sectionCardsChangeFlexDirection {
  flex-direction: column;
}
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 30px;
  margin: 80px 0;
  border: 5px solid rgb(0, 95, 179);
}
.card-wrapper {
  position: relative;
  min-height: 350px;
  perspective: 2000;
  perspective-origin: top;
}
.card-wrapper:hover .card {
  transform: rotateY(180deg);
}
.cardsRotation {
  transform: rotateY(180deg);
}
.card {
  position: relative;
  height: 100%;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
  color: white;
  font-weight: bold;
}
.card-front p {

  line-height: 35px;
}


.card-back {
  background: #0f0b2d;
  transform: rotateY(180deg);
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-back a {
  display: inline-block;
  border-radius: 10px;
  padding: 15px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: normal;
  background-color: orange;

  font-weight: bold;
  color: #fff;
  transition: background-color 0.3s ease-out, color 0.3s ease-out;
}

.card-front,
.card-back {
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 30px;
  border-radius: 8px;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
.card-front {
  background: orange;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
} */
/* h1 {
  margin: 20px 0;
  padding-bottom: 20px;
  border-bottom: 1px dashed grey;
}
h1 span {
  display: block;
}
h1 span:nth-child(1) {
  font-weight: normal;
  color: rgb(220, 148, 148);
} */


/* TREE */
/* .sectionTree1 {
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.Vline {
  z-index: 1;
  height: 0px;
  width: 5px;
  transition: height 10s ease;
  background-color: blue;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  position: absolute;
}
.Hline {
  z-index: 2;
  height: 5px;
  width: 0px;
  transition: width 10s ease;
  background-color: yellow;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  position: absolute;
}
.VerticalLineHeight {
  height: 300px;
  width: 5px;
}

.HorizontalLineWidth {
  width: 300px;
  height: 5px;
} */

/* .sectionTree2 {
  height: 50px;
  border: 3px solid white;
  background-color: palevioletred;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#buttonTree {
  width: 100px;
} */
/* TEST */
/* .sectionTest {
  border: 3px solid white;
} */

/* NAVBAR */
/* .container {
  font-size: 20px;
} */
/* nav {
  background-color: #1e3d59;
  font-size: larger;
  transition: 2s ease-in-out;
  right: 0;
  top: 0;
} */

/* links */ /* 
a.nav-link:hover {
  color: #ffc13b
}
a.nav-link {
  color:#f5f0e1;
}
.navbar-toggler:active,
.navbar-toggler:focus {
  outline: none;
}
.navbar-toggler {
  width: 47px;
  height: 34px;
  background-color: red;
  border: none;
}
.navbar-toggler .line {
  width: 100%;
  float: left;
  height: 2px;
  background-color: black;
  margin-bottom: 5px;
}
#presentation:hover,
#langages:hover,
#goContactMe:hover,
#formations:hover {
  cursor: pointer;
} */
/* Animation ligne horizontale sous le lien*/ /* 
.nav-link {
  display: inline-block;
  position: relative;
}
.nav-link:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: red;
  transition: transform 0.25s ease-out;
}
.nav-link:hover:after {
  transform: scaleX(1);
} */