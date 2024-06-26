import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import DashboardTable from './DashboardTable';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleAddResidents = () => {
    navigate('/add-residents');
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <main className="main-content">
        <div className="dashboard-container">
          <div className="dashboard-header">
            <h1>Dashboard</h1>
            <button className="add-residents-btn" onClick={handleAddResidents}>
              Add residents
            </button>
          </div>
          <div className="controls">
            <div className="search-filter">
              <input type="text" className="search-input" placeholder="Search" />
              <button className="filter-btn">Filter</button>
            </div>
            <div className="view-options">
              <button className="view-btn">List</button>
              <button className="view-btn">Grid</button>
            </div>
          </div>
          <DashboardTable />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;