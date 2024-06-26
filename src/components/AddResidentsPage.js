// src/components/AddResidentsPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AddResidentsPage.css';

const AddResidentsPage = () => {
  return (
    <div className="add-residents-page">
      <div className="logo">
        <div className="logo-icon"></div>
        <span className="logo-text">PoolPal.</span>
      </div>
      <div className="content">
        <h1>Nice, let's get some basic info about you.</h1>
        <p className="subtitle">We need your job title and your profile pic to show with any surveys you create.</p>
        
        <form>
          <div className="form-group">
            <label htmlFor="apartment">Single Apartment</label>
            <input type="text" id="apartment" placeholder="Acme" />
          </div>
          
          <div className="form-group">
            <label>Upload resident list</label>
            <div className="file-upload">
              <div className="file-icon">📊</div>
              <div className="file-info">
                <p className="file-instruction">Please upload the resident list in CSV format.</p>
                <p className="file-format">Format: CSV, Maximum File Size: 2.5 MB</p>
              </div>
            </div>
            <input type="file" accept=".csv" id="file-input" hidden />
            <label htmlFor="file-input" className="file-input-label">Choose file</label>
          </div>
          
          <button type="submit" className="continue-btn">Continue</button>
        </form>
      </div>
    </div>
  );
};

export default AddResidentsPage;