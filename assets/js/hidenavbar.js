let nav = document.getElementById('navbar')

const hideNav = () => {
//   transition: 3s ease dans .navbar
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        nav.style.top = '-116px'
        nav.style.opacity = (0)
    } else {
        nav.style.top = '0'
        nav.style.opacity = (1)
    }
}

window.addEventListener('scroll',hideNav)

