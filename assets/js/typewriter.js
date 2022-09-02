const textAnim = document.querySelector('.contentJob h2')
console.log("textanim",textAnim);

new Typewriter(textAnim,{})
.typeString('Développeur ')
.pauseFor(300)
.typeString('<strong>Web</strong>')
.start()