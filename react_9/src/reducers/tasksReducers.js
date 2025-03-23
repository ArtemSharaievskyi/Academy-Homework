export const initialTasks = [];

export function tasksReducer(state, action) {
  switch (action.type) {
    case 'LOAD_TASKS':
      return action.payload;
    case 'ADD_TASK':
      return [...state, action.payload];
    case 'REMOVE_TASK':
      return state.filter(task => task.id !== action.payload);
    case 'TOGGLE_TASK':
      return state.map(task =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    default:
      return state;
  }
}
