import React, { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm.jsx';
import TaskList from './components/TaskList.jsx';
import History from './components/History.jsx';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const fetchTasks = async () => {
    const res = await fetch(`/tasks?filter=${filter}`);
    setTasks(await res.json());
  };

  useEffect(() => { fetchTasks(); }, [filter]);

  return (
    <div className="container py-5">
      <h1 className="display-4 text-center text-primary mb-5">ToDo Productivity List</h1>

      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <TaskForm onAdd={fetchTasks} />
        </div>
      </div>

      <ul className="nav nav-pills justify-content-center mb-4">
        {['all','active','completed'].map(f => (
          <li className="nav-item" key={f}>
            <button
              className={`nav-link ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          </li>
        ))}
      </ul>

      <TaskList tasks={tasks} onUpdate={fetchTasks} />

      <div className="mt-5">
        <History />
      </div>
    </div>
  );
}
