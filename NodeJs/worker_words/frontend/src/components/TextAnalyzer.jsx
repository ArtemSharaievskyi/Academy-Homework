import React, { useState } from 'react';

export default function TextAnalyzer() {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const analyze = async () => {
    setError('');
    if (!text.trim()) {
      setError('Text cannot be empty');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/analyze-text', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Server error');
      }
      const data = await res.json();
      setResult(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <textarea
        rows="10"
        style={{ width: '100%' }}
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Paste your text here..."
      />
      <br />
      <button onClick={analyze} disabled={loading}>Analyze</button>
      {loading && <p className="loading">Processing...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result && (
        <div>
          <h2>Results</h2>
          <p>Total Words: {result.totalWords}</p>
          <p>Unique Words: {result.uniqueWords}</p>
          <p>Worker PID: {result.workerPid}, Duration: {result.duration} ms</p>
          <h3>Top 10 Words</h3>
          <table border="1" cellPadding="4">
            <thead>
              <tr><th>Word</th><th>Count</th></tr>
            </thead>
            <tbody>
              {result.topWords.map(item => (
                <tr key={item.word}>
                  <td>{item.word}</td>
                  <td>{item.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}