const Search_container = document.querySelector('.search-box-container')
const Search_btn = document.querySelectorAll('.search-btn')



Search_btn.forEach((value) => {

    value.addEventListener('click', (e) => {
        Search_container.classList.toggle('animation-search')
    })

})
Search_container.children[0].addEventListener('click', (e) => {
    e.stopPropagation()
})



const Dropdown_btn = document.querySelectorAll('.drop-down')
const Dropdown_content = document.querySelectorAll('.drop-down-content')
Dropdown_btn.forEach((value) => {
    value.addEventListener('click', () => {
        for (let i of Dropdown_content) {
            i.setAttribute('data-status', 'off')
            if (value.querySelector('.drop-down-content') != i) {
                i.classList.remove('show')
            }
        }
        let temp = value.querySelector('.drop-down-content')

        if (temp.getAttribute('data-status') == 'off') {
            temp.setAttribute('data-status', 'on')
        } else {
            temp.setAttribute('data-status', 'off')
        }
        temp.classList.toggle('show')


    })
})


const Todo_value = document.querySelectorAll('.todo-content>li')
const Todo_content = document.querySelectorAll('.counter-notif')
const Todo_container = document.querySelectorAll('.sub-shoping-content')

Todo_value.forEach((value) => {
    value.addEventListener('click', Remove_element)
})

Todo_container.forEach((value) => {
    value.addEventListener('click', (e) => {
        e.stopPropagation()
    })

})

function Remove_element(e) {
    if (e.target.tagName == 'I') {
        this.remove()
        counter_number()
    }
}

function counter_number() {
    let counter
    Todo_content.forEach((value) => {
        counter = value.querySelector('.todo-content').children.length
        value.querySelector('.counter-items-num').innerHTML = counter
        value.querySelector('.count').innerHTML = counter
        if (counter == 0) {
            value.querySelector('.todo-container').style.display = 'none'
            value.querySelector('.empty-container').style.display = 'block'
        }

    })

}

counter_number()



const Li_Menu = document.querySelectorAll('.slide-container')



Li_Menu.forEach((value, index) => {
    value.addEventListener('click', (e) => {
        let nav_container = value.querySelector('nav')
        if (nav_container) {
            for (let i = 0; i < Li_Menu.length; i++) {
                if (Li_Menu[i].querySelector('.fa-angle-right') && Li_Menu[i].querySelector('nav')) {
                    Li_Menu[i].querySelector('.fa-angle-right').style.transform = 'rotate(0deg)'
                    Li_Menu[i].querySelector('nav').style.height = 0
                }
                if (i != index) {
                    console.log(Li_Menu[i].classList.remove('flag'))
                }
            }
            value.classList.toggle('flag')
            if (value.classList[value.classList.length - 1] == 'flag') {
                value.querySelector('.fa-angle-right').style.transform = 'rotate(90deg)'
                nav_container.style.height = nav_container.children[0].clientHeight + 'px'
            } else {
                value.querySelector('.fa-angle-right').style.transform = 'rotate(0deg)'
                nav_container.style.height = 0
            }
        }

    })
})

const Menu_Humborg = document.querySelector('.menu-humborg-icon')

const Main_content = document.querySelector('.main-content-container')
const menu_content = document.querySelector('.menu-container')

const Menu_container = document.querySelector('.web-container')
let counter = false

Menu_Humborg.addEventListener('click', () => {
    counter = !counter
    Menu_container.classList.remove('mouse-enter')
    Menu_container.classList.remove('mouse-leave')
    if (counter) {
        Menu_Humborg.children[0].setAttribute('class', 'fa-solid fa-xmark ')

        open_window()

    } else {
        Menu_Humborg.children[0].setAttribute('class', 'fa-solid fa-bars-staggered')
      

        close_window()

    }
})

function open_window() {
    Menu_container.classList.add('web-container-close')
    Menu_container.classList.remove('web-container-open')

}

function close_window() {
    Menu_container.classList.add('web-container-open')
    Menu_container.classList.remove('web-container-close')
}

const Menu_content = document.querySelector('.menu-content')

Menu_content.addEventListener('mouseenter', () => {
    if (counter) {
        close_window()
        // Menu_content.style.cssText = 'position:fixed;width:16%'
        Menu_container.classList.add('mouse-leave')
        Menu_container.classList.remove('mouse-enter')
        
    }

})
Menu_content.addEventListener('mouseleave', () => {
    if (counter) {
        open_window()
        // Menu_content.style.cssText = 'position:sticky;width:100%'
        Menu_container.classList.add('mouse-enter')
        Menu_container.classList.remove('mouse-leave')
        
    }
})
// .main-content-container change width then click not mouse enter 