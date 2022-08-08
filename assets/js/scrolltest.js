/*   // Fonction RETOUR en HAUT DE PAGE
  // Si clic sur le bouton, retour haut de page
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  window.onscroll = function () {
    setTimeout(window.scrollFunction(), 200);
  
  };
// Fonctions permettant d'afficher ou masquer le bouton retour haut de page, si l'on se trouve en haut ou bas de page
  // Si l'on est sous 20 pixels du top OU BIEN si l'on est en bas de page >>>> display = none
  // Sinon display = block
  let mybutton = document.getElementById('buttonToScrollToTop');
  
  function scrollFunction() {
  
    //var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
     var scrollBottom = document.body.clientHeight -  window.innerHeight -  window.pageYOffset ;
      if (scrollBottom > 50) {
      mybutton.style.backgroundColor = '#F36F51';
      mybutton.style.color = 'black';
    }
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
    setTimeout(() => {
      mybutton.style.backgroundColor = '#FDD252';
      mybutton.style.color = 'black';
    }, 500)
  }
  
  mybutton.onmouseover = function () {
    changeColorButtonTop()
  } */

