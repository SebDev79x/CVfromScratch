// Animation Développeur .contentJob h2
const textAnim = document.querySelector('.contentJob h1')
const jobAnimation = () =>{
    new Typewriter(textAnim)
    .typeString('Développeur Front')
    .pauseFor(300)
    .start()
}
window.onload = jobAnimation()
setInterval(()=>{
    jobAnimation()
},30000)

