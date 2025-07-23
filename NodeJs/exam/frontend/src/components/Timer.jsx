import React, { useEffect, useState } from 'react';

export default function Timer({ task, onFinish }) {
  const [seconds, setSeconds] = useState(task.pomodoro_minutes * 60);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running && seconds > 0) {
      interval = setInterval(() => setSeconds(s => s - 1), 1000);
    } else if (running && seconds === 0) {
      setRunning(false);
      const end = new Date();
      const start = new Date(end.getTime() - task.pomodoro_minutes * 60000);
      fetch('/timelogs', {
        method: 'POST', headers:{ 'Content-Type':'application/json' },
        body: JSON.stringify({ task_id: task.id, start_time: start, end_time: end, duration_seconds: task.pomodoro_minutes * 60 })
      }).then(() => onFinish());
    }
    return () => clearInterval(interval);
  }, [running, seconds]);

  const format = s => `${Math.floor(s/60).toString().padStart(2,'0')}:${(s%60).toString().padStart(2,'0')}`;

  return (
    <div className="d-flex align-items-center justify-content-between">
      <span className="badge bg-secondary fs-5 me-3">{format(seconds)}</span>
      <button
        onClick={() => setRunning(r => !r)}
        className={`btn btn-${running ? 'danger' : 'success'} btn-sm`}
      >
        {running ? 'Stop' : 'Start'}
      </button>
    </div>
  );
}
