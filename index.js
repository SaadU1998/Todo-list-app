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
  </li>
  `

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

// adding timer
const countDown = document.querySelector('.countdown');
const timeValue = document.querySelector('.timeValue')


let startingMinutes= timeValue.timeValue.value;

let time = startingMinutes * 60
let interval;


const timer = () => {
     


  const minutes= Math.floor(time/60);
  let seconds= time % 60 ; 

 
  seconds = seconds < 10 ? '0' + seconds : seconds;
  countDown.innerHTML = ` <h1 class="timer-clock">
  ${minutes} : ${seconds}
</h1>`






time--;







}  




const play = document.querySelector('.playTimer')
const stopTimer = document.querySelector('.stopTimer')
const resetTimer = document.querySelector('.resetTimer')
const startButton = document.querySelector('.starting')
const displayButton = document.querySelector('.ThreeButtons')


startButton.addEventListener('click', (e)=> {

  if(list.childElementCount){



    e.preventDefault();
    startingMinutes= timeValue.timeValue.value;
    time = startingMinutes * 60;
    
  timer();
  interval = setInterval(timer , 1000);
  displayButton.classList.remove('d-none');
  timeValue.reset();

  } else{
    alert('please add task')
  }


   

    } )

play.addEventListener('click', (e)=> {



    e.preventDefault();

    
  timer();
  interval = setInterval(timer , 1000);


   

    } )
stopTimer.addEventListener('click', (e)=> {

    e.preventDefault();
    
    
  timer();
clearInterval(interval)
   

    } )
    resetTimer.addEventListener('click', (e)=> {

    e.preventDefault();
    
    
clearInterval(interval);

countDown.innerHTML = ` <h1 class="timer-clock">00 :00</h1>`
startingMinutes= timeValue.timeValue.value;
    time = startingMinutes * 60;
    displayButton.classList.add('d-none');
   

    } )



   
    



  


    
   