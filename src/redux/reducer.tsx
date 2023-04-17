import { combineReducers } from 'redux';
const Task1 = require('../assets/images/taskicon1.png');
const Task2 = require('../assets/images/taskicon2.png');
const Task3 = require('../assets/images/taskicon3.png');
const tasks = [
  {
    id: 1,
    title: 'First Item',
    description: 'Description data to show description data to show',
    status: false,
    uri: Task1
  },
  {
    id: 2,
    title: 'Second Item',
    description: 'Description data to show',
    status: false,
    uri: Task2
  },
  {
    id: 3,
    title: 'Third Item',
    description: 'Description data to show',
    status: false,
    uri: Task3
  },
];

const INITIAL_STATE = {
  tasks: tasks,
  selectedTask: {},
};

const taskReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'ADD_TASK': {
        const { tasks } = state;
        tasks.push(action.payload);
        return {
          ...state,
          tasks,
        }
      }
      case 'SELECT_TASK': {
        const { tasks } = state;
        const taskSelected = tasks.find(task => task.id === action.payload);
        return {
          ...state,
          selectedTask: taskSelected,
        }
      }
      case 'EDIT_TASK': {
        const { tasks } = state;
        const taskEdited = tasks.map(task => {
          if(task.id === action.payload.id){
            task.title = action.payload.title;
            task.description = action.payload.description;
          }
          return task;
        });
        return {
          ...state,
          tasks: taskEdited,
        }
      }
      case 'REMOVE_TASK': {
        const { tasks } = state;
        const taskDeleted = tasks.filter(task => task.id !== action.payload);
        return {
          ...state,
          tasks: taskDeleted,
        }
      }
      default:
        return state
    }
  };

export default combineReducers({
  task: taskReducer
});