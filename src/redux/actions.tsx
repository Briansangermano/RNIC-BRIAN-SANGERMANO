const addTask = (newTask) => ({
  type: 'ADD_TASK',
  payload: newTask,
});

const selectTask = (taskId) => ({
  type: 'SELECT_TASK',
  payload: taskId,
});

const removeTask = (taskId) => ({
  type: 'REMOVE_TASK',
  payload: taskId,
});

const editTask = (data) => ({
  type: 'EDIT_TASK',
  payload: data,
});

const checkTask = (taskId) => ({
  type: 'CHECK_TASK',
  payload: taskId,
});

export {
  addTask,
  selectTask,
  removeTask,
  editTask,
  checkTask,
}