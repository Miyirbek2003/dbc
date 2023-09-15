const hamburger = document.querySelector('#nav-icon1')
const navBar = document.querySelector('.side-nav')
const quit = document.querySelector('.exit')
const header = document.querySelector('header')


window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        header.style.background = 'white'
    }
    else {
        header.style.background = 'transparent'
    }
})

hamburger.addEventListener('click', () => {
    navBar.style.display = 'block'
    navBar.style.width = '255px'
    navBar.style.height = '100vh'
    navBar.style.opacity = '1'
    navBar.style.visibility = 'visible'
    hamburger.classList.toggle('open')
})

quit.addEventListener('click', () => {
    navBar.style.display = 'none'
    navBar.style.width = '0'
    navBar.style.opacity = '0'
    navBar.style.height = '0'
    navBar.style.visibility = 'hidden'
    hamburger.classList.toggle('open')

})
function scrollId(element) {
    const el = document.getElementById(element)
    window.scrollTo(el.offsetLeft, el.offsetTop - 80)
    navBar.style.width = '0'
    navBar.style.opacity = '0'
    navBar.style.visibility = 'hidden'
    hamburger.classList.toggle('open')
}

const swiperEl = document.querySelector('swiper-container')
Object.assign(swiperEl, {
    slidesPerView: 4,
    spaceBetween: 10,
    pagination: {
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});
swiperEl.initialize();


// git remote add origin https://github.com/Miyirbek2003/dbc.git
// git branch -M main
// git push -u origin main