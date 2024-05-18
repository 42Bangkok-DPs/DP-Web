$(document).ready(function () {
  loadTasks();

  $('#new-todo').on('click', function () {
      const newTodo = prompt("Enter new todo").trim();

      console.log(newTodo);

      if (newTodo === null || newTodo === "") {
          return;
      }

      const $ftList = $('.ft_list');
      const $newTask = $('<div></div>').addClass('task-card').text(newTodo);
      $newTask.on('click', removeTask);
      $ftList.prepend($newTask);
      saveTasks();
  });

  function removeTask() {
      if (confirm("Do you want to remove this TODO?")) {
          $(this).remove();
          saveTasks();
      }
  }

  function saveTasks() {
      const tasks = [];
      $('.task-card').each(function () {
          tasks.push($(this).text());
      });
      document.cookie = `tasks=${encodeURIComponent(JSON.stringify(tasks))};path=/;`;
  }

  function loadTasks() {
      const cookies = document.cookie.split('; ');
      for (let cookie of cookies) {
          const [name, value] = cookie.split('=');
          if (name === 'tasks') {
              const tasks = JSON.parse(decodeURIComponent(value));
              const $ftList = $('.ft_list');
              tasks.reverse().forEach(task => {
                  const $newTask = $('<div></div>').addClass('task-card').text(task);
                  $newTask.on('click', removeTask);
                  $ftList.prepend($newTask);
              });
          }
      }
  }
});