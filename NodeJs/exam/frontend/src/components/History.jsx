import React, { useEffect, useState } from 'react';

export default function History() {
  const [hist, setHist] = useState({ total_seconds:0 });

  useEffect(() => {
    fetch('/history?period=day')
      .then(r=>r.json())
      .then(data => setHist(data));
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Today's Productivity</h2>
      <p className="text-gray-600">Total Time Spent: <span className="font-semibold text-indigo-600">{(hist.total_seconds/60).toFixed(1)} minutes</span></p>
    </div>
  );
}