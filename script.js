const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const plus = document.querySelector(".plus");
const taskCount = document.querySelector(".taskCount");
let listItems = listContainer.getElementsByTagName('li');


//added to list when added with input and task count also gets updated....
let num = 0;
function addTask() {
    if(inputBox.value === "") {  
       return;
    } else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.classList.add("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        //adding taskcount
        num++;
        num = (num < 10) ? "0" + num : num;
        taskCount.innerHTML = num;
    }
    inputBox.value = "";  
}
inputBox.addEventListener("keydown", function(event) {
    if (event.key === "Enter") { 
        addTask(); 
    }
});


// for changing to checked and to remove from list when remove is clicked and task count will get updated when removed or added....
listContainer.addEventListener("click", function(e) {
    if (e.target.matches("li")) {
        e.target.classList.toggle("checked");
    } else if (e.target.matches("span")) {
        e.target.parentElement.remove(); 
        //subtract taskcount
        num--;
        num = (num < 10) ? "0" + num : num;
        taskCount.innerHTML = num;
    }
});





//  for filtering all uncompleted task from the list for the button uncomplete....
function showUncompletedTasks() {
    for (let i = 0; i < listItems.length; i++) {
        let listItem = listItems[i];
        if (listItem.classList.contains('checked')) {
            listItem.style.display = 'none'; // Hide the completed task....
        } else {
            listItem.style.display = 'block'; // Show the incomplete tasks.....
        }
    }
}
// Adding event listener to the Uncompleted button....
document.getElementById('uncompletedButton').addEventListener('click', showUncompletedTasks);





//  for filtering all completed task from the list for the button complete....
function showCompletedTasks() {
    for (let i = 0; i < listItems.length; i++) {
        let listItem = listItems[i];
        if (listItem.classList.contains('checked')) {
            listItem.style.display = 'block'; // Show the completed task.......
        } else {
            listItem.style.display = 'none'; // Hide the incomplete tasks......
        }
    }
}
// Adding event listener to the Completed button
document.getElementById('completedButton').addEventListener('click', showCompletedTasks);





//  for filtering all task to list for the button all....
function showAllTasks() {
    for (let i = 0; i < listItems.length; i++) {
        let listItem = listItems[i];
        listItem.style.display = 'block'; // Show all tasks......
    }
}
// Adding event listener to the all button
document.getElementById('allButton').addEventListener('click', showAllTasks);































