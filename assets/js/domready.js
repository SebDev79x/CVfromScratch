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