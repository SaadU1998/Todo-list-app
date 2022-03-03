// firs of all we will implement the add function

const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

addForm.addEventListener('submit',(e) => {
    e.preventDefault();

    const todo= addForm.add.value.trim();
    if(todo.length){
        generatingNewItem(todo); 
        addForm.reset();


    }
    
})

const generatingNewItem = (todo) => {
    const html = `<li
    class="list-group-item d-flex justify-content-between align-items-center"
  >
    <span>${todo}</span>
    <i class="bi bi-trash delete"></i>
  </li>`

  list.innerHTML +=html ;


}

// task 2 delete

list.addEventListener('click',(e) => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
        
    


})

// Task 3 searche and filter

const search =document.querySelector('.search input')
// console.log(search);

search.addEventListener('keyup', (e) => {
const term = search.value.trim().toLowerCase();
filtering(term);


})

const filtering= ((term) => {
   

    Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtered'))
    Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('filtered'))
})

