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
        addTaskBlock.style.display = "flex";
    } else {
        addTaskBlock.style.display = "none";
    }
}


// ADD EVENT LISTENERS TO SELECT ELEMENTS
dateInput.addEventListener("change", checkSchedule);
timeInput.addEventListener("change", checkSchedule);


// ARRAY TO CONVERT DAY NUMBER TO DAY NAME
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];



addBTN.addEventListener("click", function(){
    let dateText = dateInput.value
    let timeText = timeInput.value
    let taskText = taskInput.value.trim();
    let taskDescText = taskDesc.value.trim();


    if(dateText !== "" && timeText !== "" && taskText !== ""){
        // CREATE A DATE OBJECT FROM THE SELECTED DATE & TIME AND GET THE DAYNAME 
        let taskDate = new Date(dateText)
        let dayname = days[taskDate.getDay()]


        addTask(dateText, dayname, timeText, taskText, taskDescText);

        dateInput.value = ""
        timeInput.value = ""
        taskInput.value = ""
        taskDesc.value = ""

        checkSchedule()
    }
})



// CREATE A FUNCTION TO ADD TASKS TO THE LIST 
function addTask(date, day, time, task, desc){

    const newLi = document.createElement("li");

    const taskDiv = document.createElement("div");
    taskDiv.className = "task-info"
    taskDiv.innerHTML = `<h2>${task.slice(0,1).toUpperCase() + task.slice(1)}</h2> <p>${desc}</p> <span><strong>Date:</strong> ${day}, ${date} ---- <strong>Time:</strong> ${time}</span>`



    const delListBTN = document.createElement("button")
    delListBTN.className = "del-btn"
    delListBTN.innerHTML = "Delete"

    delListBTN.addEventListener("click", function(){
        newLi.remove()
    })
    


    newLi.appendChild(taskDiv);
    taskDiv.appendChild(delListBTN)

    taskList.appendChild(newLi);
}




































