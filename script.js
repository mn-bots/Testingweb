document.getElementById('add-button').addEventListener('click', function() {
    const input = document.getElementById('todo-input');
    const todoText = input.value.trim();

    if (todoText) {
        const li = document.createElement('li');
        li.textContent = todoText;
        
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        document.getElementById('todo-list').appendChild(li);
        input.value = ''; // Clear the input field
    }
});
