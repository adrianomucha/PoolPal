import React from 'react';
import '../styles/Dashboard.css'; // Make sure this path is correct

const DashboardTable = () => {
  // Sample data - in a real application, this would likely come from props or a data fetching hook
  const residents = [
    { id: 1, name: 'Jane Doe', handle: '@janedoe', building: 'Google', apartment: '1076', contact: 'xyz@gmail.com', status: 'Tomorrow' },
    { id: 2, name: 'Tom Myspace', handle: '@tom', building: 'Meta', apartment: '1077', contact: 'xyz@gmail.com', status: 'Next month' },
    { id: 3, name: 'Theodor Lang', handle: '@tlang', building: 'Figma', apartment: '1078', contact: 'xyz@gmail.com', status: 'In 30 minutes' },
    { id: 4, name: 'Lance Morey', handle: '@mor', building: 'Evergreen', apartment: '1079', contact: 'xyz@gmail.com', status: 'In 5 days' },
    { id: 5, name: 'Emmy Woods', handle: '@emmy', building: 'Discord', apartment: '1080', contact: 'xyz@gmail.com', status: 'None' },
  ];

  const getStatusClass = (status) => {
    const statusLower = status.toLowerCase().replace(' ', '-');
    return `status status-${statusLower}`;
  };

  return (
    <div className="table-container">
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
              <td><span className={getStatusClass(resident.status)}>{resident.status}</span></td>
              <td><span className="more-options">...</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTable;