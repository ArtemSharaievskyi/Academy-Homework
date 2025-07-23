import React from 'react';
import Timer from './Timer.jsx';

export default function TaskList({ tasks, onUpdate }) {
  return (
    <div className="space-y-4">
      {tasks.map(task => (
        <div
          key={task.id}
          className="bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row md:justify-between items-start md:items-center"
        >
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-semibold text-gray-800">{task.title}</h3>
            <p className="text-gray-600">{task.description}</p>
          </div>
          <Timer task={task} onFinish={onUpdate} />
        </div>
      ))}
      {tasks.length===0 && (
        <p className="text-center text-gray-500">No tasks found.</p>
      )}
    </div>
  );
}