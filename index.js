let menu = document.querySelector('#menu')
let menuBtn = document.querySelector('#menuBtn')
let dropdowns = document.querySelectorAll('.footer_navs_list')


let menuToggle = (e) => {
    e.stopPropagation()
    menu.classList.contains('active') ? menu.classList.remove("active") : menu.classList.add("active");
}

document.addEventListener("click", (e) => {
    const click = e.composedPath().includes(menu);
    if( !click ) {
        menu.classList.remove("active")
    }
})

menuBtn.addEventListener("click", menuToggle)

dropdowns.forEach( dropdown => {
    const arrow = dropdown.querySelector('.arrow')
    const list = dropdown.querySelector('.footer_menu')

    arrow.addEventListener("click", () => {
        list.classList.toggle('open')
        arrow.classList.toggle('open')
        dropdown.classList.toggle('open')
    })
})