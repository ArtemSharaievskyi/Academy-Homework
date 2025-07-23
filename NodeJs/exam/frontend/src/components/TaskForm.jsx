import React, { useState } from 'react';

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [minutes, setMinutes] = useState(25);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    await fetch('/tasks', {
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify({ title, description, pomodoro_minutes: minutes })
    });
    setTitle(''); setDescription(''); setMinutes(25);
    onAdd();
  };

  return (
    <form onSubmit={handleSubmit} className="row g-3">
      <div className="col-md-4">
        <input
          required
          className="form-control"
          placeholder="Task Title"
          value={title}
          onChange={e=>setTitle(e.target.value)}
        />
      </div>
      <div className="col-md-4">
        <input
          className="form-control"
          placeholder="Description (optional)"
          value={description}
          onChange={e=>setDescription(e.target.value)}
        />
      </div>
      <div className="col-md-2">
        <input
          type="number"
          min="1"
          className="form-control"
          value={minutes}
          onChange={e=>setMinutes(+e.target.value)}
        />
      </div>
      <div className="col-md-2 text-end">
        <button className="btn btn-primary w-100">Add Task</button>
      </div>
    </form>
  );
}
