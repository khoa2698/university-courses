const sections = document.querySelectorAll('.scroll_appears')
const counters = document.querySelectorAll('.statistics .number')
const count_number = document.querySelector('.count_number')

function checkSections() {
    const triggerBottom = window.innerHeight   
    sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top
            if(sectionTop < triggerBottom) {
                section.classList.add('show')
            } 
            // else {
            //     section.classList.remove('show')
            // }
    })
}
window.addEventListener('scroll', checkSections)
checkSections()


function checkCountNumber() {
    const triggerBottom = window.innerHeight
    const count_number_Top = count_number.getBoundingClientRect().top
    if(count_number_Top < triggerBottom) {
        counters.forEach(counter => {
            counter.innerHTML = '0'
        
            const target = +counter.getAttribute('data-number') //Dấu '+' để chuyển từ str thành number
            const increment = target / 89
            
            const updaterCounter = () => {
                const c = +counter.innerHTML
                if(c < target) {
                    counter.innerHTML = `${Math.ceil(c + increment)}`
                    setTimeout(updaterCounter, 50)
                } else {
                    counter.innerHTML = target
                }
                window.removeEventListener("scroll", checkCountNumber)
            }
            updaterCounter()
        })
    }
    
}
window.addEventListener('scroll', checkCountNumber)
checkCountNumber()

// nav
// const subnavs = document.querySelectorAll(".dropdown")
// console.log(subnavs)
// const dropmenu = document.querySelectorAll(".dropdown-menu")
// subnavs.forEach((subnav) => {
//     subnav.addEventListener("mouseenter", subnav.classList.add("show"))
    // subnav.addEventListener("mouseleave", subnav.classList.remove("show"))
// })

// const nav = document.querySelector('nav')
// const widthWindow = window.innerWidth

// window.addEventListener('scroll', fixNav)

// function fixNav() {
//         if (widthWindow < 992){ 
//             nav.classList.remove('active')
//         } else {
//             if(window.scrollY > nav.offsetHeight + 50) {
//                 nav.classList.add('active')
//             }
//             else {
//                 nav.classList.remove('active')
//             }
//         }
// }
