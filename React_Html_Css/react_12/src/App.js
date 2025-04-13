import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm";
import FilterForm from "./components/FilterForm";
import "./styles/styles.css";

const App = () => {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/" className="nav-link">Registration</Link>
        <Link to="/filter" className="nav-link">Filter</Link>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
          <Route path="/filter" element={<FilterForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;