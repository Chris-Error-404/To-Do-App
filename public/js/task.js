//append locations
const taskTable = document.getElementById('taskTable'); //div to hold newly added tasks
const compeltedTable = document.getElementById('completedTable'); //div to hold completed tasks



//error handling
const msg = document.getElementById('msg'); //status pop up
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

    //error handling against empty input
    if(userInput.value === ''){
        msg.style.display = "block";
        msg.innerHTML = `
        <span class="text-[var(--black)] text-center text-base font-semibold flex items-center justify-center gap-2 mt-4 transition-all duration-200"><i class='bx bxs-x-circle text-xl text-red-600'></i>Task was not added</span>
    `
    }

    else{

        //pop up message 'sucessfully added'
        msg.style.display = "block";
        msg.innerHTML = `
        <span class="text-[var(--black)] text-center text-base font-semibold flex items-center justify-center gap-2 mt-4 transition-all duration-200"><i class='bx bxs-check-circle text-xl text-lime-600'></i>Task added sucessfully </span>
    `

        //creating div that works as task card
        let task = document.createElement('div');
        
        //creating the content to be inside the div
        task.innerHTML = 
        `<div class="p-4 bg-[var(--blue)] rounded-sm text-[var(--white)] flex items-center justify-between gap-4">
        <p>${userInput.value}</p>
        <i class="bx bx-check text-2xl cursor-pointer closeBtn"></i>
        </div>`


        //remove btn
        let removeBtn = task.querySelector('.closeBtn');

        removeBtn.addEventListener('click', ()=> {

            task.style.opacity = '0.5';

            removeBtn.classList.remove('closeBtn');
            removeBtn.classList.add('deleteBtn');
            removeBtn.classList.remove('bx-check');
            removeBtn.classList.add('bx-trash');
            compeltedTable.append(task);

            msg.style.display = "block";
            msg.innerHTML = `<span class="text-[var(--black)] text-center text-base font-semibold flex items-center justify-center gap-2 mt-4 transition-all duration-200"><i class='bx bxs-check-circle text-xl text-yellow-600'></i>Task completed</span>`;

            
            //delete button
            let deleteBtn = task.querySelector('.deleteBtn');

            deleteBtn.addEventListener('click', ()=>{
                task.remove()
                completedTaskCounter()
                msg.style.display = "block";
                msg.innerHTML = `<span class="text-[var(--black)] text-center text-base font-semibold flex items-center justify-center gap-2 mt-4 transition-all duration-200"><i class='bx bxs-trash text-xl text-red-600'></i>Task deleted</span>`;
                //completedCounter.innerHTML = x -=1;

   /*              if(taskCounter.innerHTML > 1){
                    taskCounter.innerHTML = i-= 1 ;
                } */
                
            })

            //counter calculations

            //let deleteBtn = task
            //completedCounter.innerHTML = x +=1;
            completedTaskCounter()
            activeTaskCounter()
            //taskCounter.innerHTML = i-= 1 ;
        });

        taskTable.append(task)
        activeTaskCounter()
        //taskCounter.innerHTML = i+= 1 ;
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


//number of childern in an element instead of an onclick counter with if statements
function activeTaskCounter(){
    let numberOfActiveTasks = taskTable.children.length;
    taskCounter.innerHTML = numberOfActiveTasks;
    return numberOfTasks;
};


//check for number of complete tasks using the number of childern available
function completedTaskCounter(){
    let numberOfCompletedTasks = compeltedTable.children.length;
    completedCounter.innerHTML = numberOfCompletedTasks;
    return numberOfCompletedTasks;
}