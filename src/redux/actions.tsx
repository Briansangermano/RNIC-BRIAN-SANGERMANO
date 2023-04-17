const addTask = (newTask: {
  id: number,
  title: string,
  description: string,
  status: boolean,
  uri: string | null,
}) => ({
  type: 'ADD_TASK',
  payload: newTask,
});

const selectTask = (taskId: number) => ({
  type: 'SELECT_TASK',
  payload: taskId,
});

const removeTask = (taskId: number) => ({
  type: 'REMOVE_TASK',
  payload: taskId,
});

const editTask = (data: {
  id: number,
  title: string,
  description: string,
}) => ({
  type: 'EDIT_TASK',
  payload: data,
});

const checkTask = (taskId: number) => ({
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