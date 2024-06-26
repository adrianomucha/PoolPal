import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddResidentsPage from './components/AddResidentsPage';
import './styles/Dashboard.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-residents" element={<AddResidentsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;