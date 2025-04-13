export enum Category {
    Work = 'Робота',
    Personal = 'Особисте',
    Study = 'Навчання'
}
  
export interface Task {
    id: string;
    text: string;
    category: Category;
    completed: boolean;
}
  
export type TaskAction =
    | { type: 'LOAD_TASKS'; payload: Task[] }
    | { type: 'ADD_TASK'; payload: Task }
    | { type: 'REMOVE_TASK'; payload: string }
    | { type: 'TOGGLE_TASK'; payload: string };
  