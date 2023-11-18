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
  
   
 
        // value.querySelector('.drop-down-content').style.display='block'

    })
})