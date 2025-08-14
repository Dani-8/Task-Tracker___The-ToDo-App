// ALL ELEMENTS FORM HTML

// TIME
const dateInput = document.getElementById("date-input");
const timeInput = document.getElementById("time-input");

// TASK
const addTaskBlock = document.getElementById("add-task-block");

const taskInput = document.getElementById("task-input");
const taskDesc = document.getElementById("task-desc");
const addBTN = document.getElementById("add-btn");

const taskList = document.getElementById("task-list");



// FUNCTION TO CHECK IF DATE & TIME ARE SELECTED!!!!
function checkSchedule(){
    if(dateInput.value !== "" && timeInput.value !== ""){
        addTaskBlock.style.display = "block";
    } else {
        addTaskBlock.style.display = "none";
    }

}























































