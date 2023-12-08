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


let Todo_value = document.querySelectorAll('.todo-content>li')
let Todo_content = document.querySelectorAll('.counter-notif')
let Todo_container = document.querySelectorAll('.sub-shoping-content')

Todo_value.forEach((value) => {
    value.addEventListener('click', Remove_element)
})

Todo_container.forEach((value) => {
    value.addEventListener('click',(e)=>{
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
        counter=value.querySelector('.todo-content').children.length
        value.querySelector('.counter-items-num').innerHTML =counter 
        value.querySelector('.count').innerHTML = counter
        if(counter==0){
            console.log('hamid')
        }

    })

}

counter_number()