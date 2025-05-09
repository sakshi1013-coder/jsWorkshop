
    const addBtn = document.getElementById('addBtn');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    addBtn.addEventListener('click', () => {
      const taskText = taskInput.value.trim();
      if (taskText === '') return;

      const li = document.createElement('li');
      li.textContent = taskText;

      li.addEventListener('click', () => {
        li.classList.toggle('completed');
      });

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.className = 'delete-btn';
      deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation(); 
        li.remove();
      });

      li.appendChild(deleteBtn);
      taskList.appendChild(li);

      taskInput.value = '';
    });
  