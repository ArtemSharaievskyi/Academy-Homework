import React, {
    useState,
    useEffect,
    useId,
    useRef,
    useCallback,
    useMemo,
    useReducer
} from 'react';
import { tasksReducer, initialTasks } from '../reducers/tasksReducer';
import { Category, Task } from '../types';
import './ToDoApp.css';
  
const categories: Category[] = [Category.Work, Category.Personal, Category.Study];
  
export default function ToDoApp() {
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
    const [taskText, setTaskText] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<Category>(categories[0]);
    const inputRef = useRef<HTMLInputElement>(null);
    const inputId = useId();
  
    useEffect(() => {
      const storedTasks = localStorage.getItem('tasks');
      if (storedTasks) {
        dispatch({ type: 'LOAD_TASKS', payload: JSON.parse(storedTasks) });
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
  
    useEffect(() => {
      inputRef.current?.focus();
    }, []);
  
    const generateTaskId = () => {
      return inputId + '-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5);
    };
  
    const handleAddTask = useCallback(() => {
      if (taskText.trim() === '') return;
      const newTask: Task = {
        id: generateTaskId(),
        text: taskText,
        category: selectedCategory,
        completed: false
      };
      dispatch({ type: 'ADD_TASK', payload: newTask });
      setTaskText('');
      inputRef.current?.focus();
    }, [taskText, selectedCategory, inputId]);
  
    const handleRemoveTask = useCallback((id: string) => {
      dispatch({ type: 'REMOVE_TASK', payload: id });
    }, []);
  
    const handleToggleTask = (id: string) => {
      dispatch({ type: 'TOGGLE_TASK', payload: id });
    };
  
    const completedCount = useMemo(() => {
      return tasks.filter(task => task.completed).length;
    }, [tasks]);
  
    return (
      <div className="todo-container">
        <h2>To-Do List</h2>
        <div className="input-group">
          <label htmlFor={inputId}>Нове завдання:</label>
          <input
            ref={inputRef}
            id={inputId}
            type="text"
            value={taskText}
            onChange={e => setTaskText(e.target.value)}
          />
        </div>
        <div className="select-group">
          <label>Категорія:</label>
          <select
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value as Category)}
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <button onClick={handleAddTask}>Додати завдання</button>
  
        <h3>Список завдань</h3>
        {tasks.length === 0 ? (
          <p>Немає завдань</p>
        ) : (
          <ul className="task-list">
            {tasks.map(task => (
              <li key={task.id}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggleTask(task.id)}
                />
                <span className={task.completed ? 'completed' : ''}>
                  [{task.category}] {task.text}
                </span>
                <button onClick={() => handleRemoveTask(task.id)}>Видалити</button>
              </li>
            ))}
          </ul>
        )}
        <p className="completed-count">
          Кількість виконаних завдань: {completedCount}
        </p>
      </div>
    );
  }
  