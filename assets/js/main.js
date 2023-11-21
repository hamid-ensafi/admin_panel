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


