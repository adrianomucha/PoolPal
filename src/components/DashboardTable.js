import React, { useState } from 'react';
import axios from 'axios';
import { Loader2 } from 'lucide-react'; // Import Loader icon from lucide-react

const DashboardTable = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Sample resident data - in a real app, this might come from props or a data fetching hook
  const residents = [
    { id: 1, name: 'Jane Doe', handle: '@janedoe', building: 'Google', apartment: '1076', contact: 'xyz@gmail.com', status: 'Tomorrow' },
    { id: 2, name: 'Tom Myspace', handle: '@tom', building: 'Meta', apartment: '1077', contact: 'xyz@gmail.com', status: 'Next month' },
    // ... more residents
  ];

  const sendToSpreadsheet = async () => {
    setIsLoading(true);
    setMessage('');
    const url = 'https://script.google.com/macros/s/AKfycbz_DdO8JBymTUbDc_loXBOeXIQSSQm9NMHacVa8ewv-M85k-KZ_kKvu6qrlTMSKpck/exec';
    
    try {
      const response = await axios.post(url, {
        data: residents.map(resident => ({
          name: resident.name,
          building: resident.building,
          apartment: resident.apartment,
          contact: resident.contact,
          status: resident.status
        }))
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      
      setMessage('Data sent successfully!');
      console.log('Response:', response.data);
    } catch (error) {
      setMessage('Error sending data. Please try again.');
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="table-container">
      <div className="table-actions">
        <button 
          onClick={sendToSpreadsheet} 
          disabled={isLoading}
          className="send-to-spreadsheet-btn"
        >
          {isLoading ? <Loader2 className="animate-spin" /> : 'Send to Spreadsheet'}
        </button>
        {message && <span className="message">{message}</span>}
      </div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Primary Leaseholder</th>
            <th>Building</th>
            <th>Apartment</th>
            <th>Contact</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {residents.map((resident) => (
            <tr key={resident.id}>
              <td><input type="checkbox" className="checkbox" /></td>
              <td>
                <div className="user-info">
                  <img src={`https://i.pravatar.cc/40?u=${resident.id}`} alt={resident.name} className="avatar" />
                  <span>
                    <span className="user-name">{resident.name}</span>
                    <span className="user-handle">{resident.handle}</span>
                  </span>
                </div>
              </td>
              <td>{resident.building}</td>
              <td>{resident.apartment}</td>
              <td>{resident.contact}</td>
              <td><span className={`status status-${resident.status.toLowerCase().replace(' ', '-')}`}>{resident.status}</span></td>
              <td><span className="more-options">...</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTable;