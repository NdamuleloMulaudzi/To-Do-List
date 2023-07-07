const todoInput = document.getElementById('todo-input');
const addTaskButton = document.getElementById('add-task-btn');
const todoList = document.getElementById('todo-list');

//Add a task
const addTask =() =>{
    const taskText = todoInput.value.trim();

    if (taskText!=='') {
        const taskItem = createTextItem(taskText);
        todoList.appendChild(taskItem);
        todoInput.value = '';
    };
};

//create new tsk items
const createTextItem = (taskText) => {
    const taskItem = document.createElement('li');
    taskItem.className = "todo-item";

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    

    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = taskText

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', deleteTask);
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskTextSpan);
    taskItem.appendChild(deleteBtn);

    return taskItem;
};




//delete task
const deleteTask = (event) =>{
    const taskItem = event.target.parentNode;
    todoList.removeChild(taskItem);
};

//cross out task
const toggleTask = (event) =>{
    const toggleTask = event.target.parentNode;
    toggleTask.className = 'completed'
};


//event listener
addTaskButton.addEventListener('click', addTask);
todoInput.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        addTask();
    };
});

//toggle EventListener
todoList.addEventListener('change',toggleTask)

//example ot tasks
const initialTaks = ["Buy Groceries", "Bath The Children", "Feed The Dogs"];

initialTaks.forEach((task) =>{
    const taskItem = createTextItem(task);
    todoList.appendChild(taskItem);

});

