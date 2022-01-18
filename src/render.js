import { listContainer, createList } from './createTask.js';
// eslint-disable-next-line import/no-cycle
import { addCheckListener, deleteOne } from './index.js';

const renderTasks = (taks) => {
  listContainer.innerHTML = '';
  taks.forEach((t, i) => {
    t.index = i + 1;
    const taskNode = createList(t);
    deleteOne(taskNode, i);
    addCheckListener(taskNode, i);
  });
};
export default renderTasks;