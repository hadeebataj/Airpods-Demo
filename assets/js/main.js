const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'nav-menu');

// Animate GSAP
gsap.from('.home_title', { opacity: 0, duration: 1.5, delay: 0.5, y: 50 })
gsap.from('.home_description', { opacity: 0, duration: 1.5, delay: 0.8, y: 50 })

// Image Airpod
gsap.from('.airpod1', { opacity: 0, duration: 2, delay: 1.2, y: -40 })
gsap.from('.airpod2', { opacity: 0, duration: 2, delay: 1.4, y: 40 })

// Nav
gsap.from('.nav_logo', { opacity: 0, duration: 2.5, delay: 1.5, y: 25 });
gsap.from('.nav_toggle', { opacity: 0, duration: 2.5, delay: 1.7, y: 25 });
gsap.from('.nav_item', { opacity: 0, duration: 2.5, delay: 1.9, y: 25, ease: 'expo.out', stagger: .3 })
gsap.from('.nav_button', { opacity: 0, duration: 2.5, delay: 2, y: 25 });

// Scroll
gsap.from('.home_scroll', { opacity: 0, duration: 1.5, delay: 2.3, y: 30 })

// Animate ScrollMagic
let animate = new TimelineMax({ onUpdate: updatePercentage })
let controller = new ScrollMagic.Controller()

// Details
animate
    .from('.details_img', { opacity: 0, y: 25 })
    .from('.details_box', { opacity: 0, y: 25, duration: 1, ease: 'expo.out', stagger: 0.4 })

let scene = new ScrollMagic.Scene({
    triggerElement: ".details_box"
})
    .setTween(animate)
    .addTo(controller)

function updatePercentage() {
    animate.progress()
}