import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AddPhraseForm from './components/AddPhraseForm';
import Home from './pages/Home';
import './App.css';

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>PhraseBook</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/add">Add Phrase</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddPhraseForm />} />
      </Routes>
    </div>
  );
};

export default App;
