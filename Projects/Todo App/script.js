// Wait for the DOM content to load before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Get references to the input, button, and list elements
    const todoInput = document.getElementById("todo-input");
    const addTaskButton = document.getElementById("add-task-btn");
    const todoList = document.getElementById("todo-list");

    // Retrieve tasks from local storage and parse them as an array, or initialize an empty array if no data exists
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Render each task saved in local storage
    tasks.forEach(task => {
        renderTask(task);
    });

    // Add event listener to the "Add Task" button
    addTaskButton.addEventListener('click', () => {
        const taskText = todoInput.value.trim(); // Remove extra spaces from input
        if (taskText === "") return; // Prevent adding empty tasks

        // Create a new task object
        const newTask = {
            id: Date.now(), // Generate a unique ID based on the current timestamp
            text: taskText, // Store the input text
            completed: false, // Default completion status is false
        };

        // Add the new task to the tasks array
        tasks.push(newTask);

        // Save updated tasks to local storage
        saveTasks();

        // Render the new task in the DOM
        renderTask(newTask);

        // Clear the input field after adding the task
        todoInput.value = "";

        console.log(tasks); // Log the tasks array for debugging
    });

    // Function to render a task in the DOM
    function renderTask(task) {
        const li = document.createElement('li'); // Create a new list item
        li.setAttribute('data-id', task.id); // Set a data attribute with the task ID

        // If the task is completed, add the 'completed' class for styling
        if (task.completed) {
            li.classList.add('completed');
        }

        // Set the inner HTML of the list item with task text and a delete button
        li.innerHTML = `
        <span>${task.text}</span>
        <button>Delete</button>
        `;

        // Add click event listener for toggling completion
        li.addEventListener('click', (e) => {
            console.log(e); // Log the event object for debugging
            if (e.target.tagName === 'BUTTON') return; // Prevent toggle when clicking the delete button

            li.classList.toggle('completed'); // Toggle the 'completed' class
            task.completed = !task.completed; // Update the completion status in the task object
            saveTasks(); // Save the updated tasks array to local storage
        });

        // Add click event listener for the delete button
        li.querySelector('button').addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent the click event from bubbling up to the `li`

            // Remove the task from the tasks array
            tasks = tasks.filter((t) => t.id !== task.id);

            // Remove the `li` element from the DOM
            li.remove();

            // Save the updated tasks array to local storage
            saveTasks();
        });

        // Append the list item to the todo list
        todoList.appendChild(li);
    }

    // Function to save tasks to local storage
    function saveTasks() {
        // Save the tasks array as a JSON string in local storage
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
});
