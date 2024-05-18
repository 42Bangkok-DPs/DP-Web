document.addEventListener("DOMContentLoaded", () => {
  loadTasks();
});

function addTodoList() {
  const newTodo = prompt("Enter new todo");

  if (newTodo === null || newTodo.trim() === "") {
      return;
  }

  const ftList = document.querySelector('.ft_list');
  const newTask = document.createElement('div');
  newTask.classList.add('task-card');
  newTask.textContent = newTodo;
  newTask.addEventListener('click', removeTask);
  ftList.prepend(newTask);
  saveTasks();
}

function removeTask(event) {
  if (confirm("Do you want to remove this TODO?")) {
      const task = event.target;
      task.remove();
      saveTasks();
  }
}

function saveTasks() {
  const tasks = [];
  document.querySelectorAll('.ft_list .task-card').forEach(taskCard => {
      tasks.push(taskCard.textContent);
  });
  document.cookie = `tasks=${JSON.stringify(tasks)};path=/;`;
}

function loadTasks() {
  const cookies = document.cookie.split('; ');
  for (let cookie of cookies) {
      const [name, value] = cookie.split('=');
      if (name === 'tasks') {
          const tasks = JSON.parse(decodeURIComponent(value));
          const ftList = document.querySelector('.ft_list');
          tasks.forEach(task => {
              const newTask = document.createElement('div');
              newTask.classList.add('task-card');
              newTask.textContent = task;
              newTask.addEventListener('click', removeTask);
              ftList.prepend(newTask);
          });
      }
  }
}