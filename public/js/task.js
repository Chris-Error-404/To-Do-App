//append locations
const taskTable = document.getElementById('taskTable');
const compeltedTable = document.getElementById('completedTable');

//error handling
const msg = document.getElementById('msg'); //successful adn unsucessful message
msg.style.display = "none";
const addBtn = document.getElementById('addBtn'); //add task button
const userInput = document.getElementById('userInput'); //text user put to br added on the task

//task counter
let i = 0;
const taskCounter = document.getElementById('taskCounter');

//completed counter
let x = 0
const completedCounter = document.getElementById('completedCounter');

addBtn.addEventListener('click', ()=>{
    if(userInput.value === ''){
        msg.style.display = "block";
        msg.innerHTML = `
        <span class="text-[var(--black)] text-center text-base font-semibold flex items-center justify-center gap-2 mt-4 transition-all duration-200"><i class='bx bxs-x-circle text-xl text-red-600'></i>Task was not added</span>
    `
    }

    else{

        //pop up message
        msg.style.display = "block";
        msg.innerHTML = `
        <span class="text-[var(--black)] text-center text-base font-semibold flex items-center justify-center gap-2 mt-4 transition-all duration-200"><i class='bx bxs-check-circle text-xl text-lime-600'></i>Task added sucessfully </span>
    `

        //creating div that works as task box
        let task = document.createElement('div');
        
        task.innerHTML = 
        `<div class="p-4 bg-[var(--blue)] rounded-sm text-[var(--white)] flex items-center justify-between gap-4 task-bg">
        <p>${userInput.value}</p>
        <i class="bx bx-check text-2xl cursor-pointer closeBtn"></i>
        </div>`

        //remove btn
        let removeBtn = task.querySelector('.closeBtn');

        removeBtn.addEventListener('click', ()=> {

            task.style.opacity = '0.5';
            compeltedTable.append(task);

            msg.style.display = "block";
            msg.innerHTML = `<span class="text-[var(--black)] text-center text-base font-semibold flex items-center justify-center gap-2 mt-4 transition-all duration-200"><i class='bx bxs-check-circle text-xl text-yellow-600'></i>completed</span>`;

            completedCounter.innerHTML = x +=1;
            taskCounter.innerHTML = i-= 1 ;
        });

        taskTable.append(task)
        taskCounter.innerHTML = i+= 1 ;
        reset()
    }
});

//i.e reset input i.e make field empty
function reset(){
    userInput.value = '';
}

//remove msg
userInput.addEventListener('keypress', ()=> {
        msg.innerHTML = ''; 
        msg.style.display = "none";   
});