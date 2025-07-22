const addBtn = document.getElementById('addBtn'); //add task button
const msg = document.getElementById('msg'); //successful adn unsucessful mesage 
let inputTask = document.getElementById('inputTask'); //value gotten from input field
const taskTable = document.getElementById('taskTable'); //container to hold each individual task
let task;
let taskBox = document.querySelector('.task-box');


addBtn.addEventListener('click', () =>{

    if(inputTask.value === ''){
  
        msg.innerHTML = `
        <span class="text-[var(--black)] text-center text-base font-semibold flex items-center justify-center gap-2 mt-4 transition-all duration-200"><i class='bx bxs-x-circle text-xl text-red-600'></i>Task was not added</span>
    `
    }

    else{

       msg.innerHTML = `
        <span class="text-[var(--black)] text-center text-base font-semibold flex items-center justify-center gap-2 mt-4 transition-all duration-200"><i class='bx bxs-check-circle text-xl text-lime-600'></i>Task added sucessfully </span>
    `
    task = `
        <div class="p-4 bg-[var(--blue)] rounded-sm text-[var(--white)] flex items-center justify-between gap-4">
        <p>${inputTask.value}</p>
        <i class="bx bx-x text-2xl cursor-pointer"></i>
        </div>
    `
    taskBox.innerHTML = task;


    taskTable.append(taskBox)
    }
});


function addTask(){

    let task;

    inputTask.value = task;
    console.log(task)

}





//message removal
inputTask.addEventListener('mouseover', () =>{
    setTimeout(()=> {
        msg.innerHTML = '';
    }, 2000)
})