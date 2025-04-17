import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddExpense from './pages/AddExpense';
import EditExpense from './pages/EditExpense';
import Charts from './pages/Charts';
import "./App.css";

function App() {
  return (
    <>
      <nav className="nav-bar">
        <Link to="/">Dashboard</Link>
        <Link to="/add">Add Expense</Link>
        <Link to="/charts">Charts</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddExpense />} />
        <Route path="/edit/:id" element={<EditExpense />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
export default App;