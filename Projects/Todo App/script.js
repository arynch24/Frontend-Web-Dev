document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById("todo-input");
    const addTaskButton = document.getElementById("add-task-btn");
    const todoList = document.getElementById("todo-list");

    //json parse - converse from string to its original data structure
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(task => {
        renderTask(task);
    });

    addTaskButton.addEventListener('click', () => {
        const taskText = todoInput.value.trim();
        if (taskText === "") return;

        const newTask = {
            id: Date.now(),//unique id
            text: taskText,//text inside input 
            completed: false,//tells about delete button
        }

        tasks.push(newTask);
        saveTasks();
        renderTask(newTask)
        todoInput.value = "";//clear input
        console.log(tasks);

    });

    function renderTask(task) {
        const li = document.createElement('li');
        li.setAttribute('data-id', task.id)

        if (task.completed) {
            li.classList.add('Completed')
        }

        li.innerHTML = `
        <span>${task.text}</span>
        <button>Delete</button>
        `;

        li.addEventListener('click', (e) => {
            console.log(e);
            if (e.target.tagName === 'BUTTON') return;
            task.completed = !task.completed;//toggle
            li.classList.toggle('completed');
            saveTasks();
        })

        li.querySelector('button').addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent the click event from bubbling up to the `li`

            // Removing the task from the array
            tasks = tasks.filter((t) => t.id !== task.id);

            // Removing the `li` element from the DOM
            li.remove();

            // Updating the local storage
            saveTasks();
        });

        todoList.appendChild(li);
    }

    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
})