document.getElementById('add-task').addEventListener('click', function() {
    let taskInput = document.getElementById('new-task');
    let taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        let taskList = document.getElementById('task-list');
        let taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(taskItem);
        });

        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);

        taskInput.value = ''; // Clear the input
    }
});
