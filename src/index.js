import { createList } from './createTask.js';
import './style.css';
// eslint-disable-next-line import/no-cycle
import renderTasks from './render.js';

export function newsTask(description, index) {
  return {
    description,
    completed: false,
    index,
  };
}

let list = [];

export function getList() {
  return list;
}

list.forEach((task) => createList(task));

// delete each task
export const deleteOne = (taskNode, i) => {
  const deletOne = taskNode.querySelector('.btn-right');
  deletOne.addEventListener('click', () => {
    list.splice(i, 1);
    localStorage.setItem('lists', JSON.stringify(list));
    renderTasks(list);
  });
};

export const addCheckListener = (taskNode, index) => {
  const check = taskNode.querySelector('.checkbox');
  check.checked = getList()[index].completed;
  if (check.checked) {
    check.nextElementSibling.classList.add('mark');
  }
  check.addEventListener('click', () => {
    check.classList.toggle('check');
    check.nextElementSibling.classList.toggle('mark');
    getList()[index].completed = !getList()[index].completed;
    localStorage.setItem('lists', JSON.stringify(getList()));
  });
  const inputText = taskNode.querySelector('.text');
  inputText.removeAttribute('readonly');
  inputText.addEventListener('keydown', () => {
    getList()[index].description = inputText.value;
    localStorage.setItem('lists', JSON.stringify(getList()));
  });
};

// delete all task checked
const deleteTask = () => {
  list = list.filter((t) => !t.completed);
  localStorage.setItem('lists', JSON.stringify(list));
};

function randomfunct() {
  deleteTask();
  renderTasks(list);
}

const btnDelete = document.getElementById('delete');
btnDelete.addEventListener('click', randomfunct);

// create each task
const formTask = () => {
  const form = document.getElementById('task-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const description = document.getElementById('task-input').value;
    const index = getList().length + 1;
    const t = newsTask(description, index);
    getList().push(t);
    localStorage.setItem('lists', JSON.stringify(getList()));
    renderTasks(getList());
  });
};

// save all info in localStorage
window.onbeforeunload = function () {
  localStorage.setItem('lists', JSON.stringify(list));
};

window.onload = function () {
  const tasks = localStorage.getItem('lists');
  list = JSON.parse(tasks) || [];
  renderTasks(list);
};

formTask();
