export const listContainer = document.querySelector('.content');

export function createList(task) {
  const listItem = document.createElement('div');
  listItem.className = 'list';

  const eachTasks = document.createElement('div');
  eachTasks.className = 'eachtask';
  listItem.appendChild(eachTasks);

  const box = document.createElement('input');
  box.type = 'checkbox';
  box.className = 'checkbox';
  eachTasks.appendChild(box);

  const newTask = document.createElement('input');
  newTask.className = 'text';
  newTask.type = 'text';
  newTask.value = task.description;
  newTask.setAttribute('readonly', 'readonly');
  eachTasks.appendChild(newTask);

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'btn-right';
  listItem.appendChild(btn);

  listContainer.appendChild(listItem);
  return listItem;
}