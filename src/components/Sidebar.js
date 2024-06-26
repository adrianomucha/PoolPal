import React from 'react';
import { LayoutDashboard, Ticket, BarChart, Settings } from 'lucide-react';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const navItems = [
    { icon: LayoutDashboard, text: 'Dashboard', active: true },
    { icon: Ticket, text: 'Pool Pass Applications' },
    { icon: BarChart, text: 'Statistics' },
    { icon: Settings, text: 'Settings' }
  ];

  return (
    <aside className="sidebar">
      <div className="logo">
        <div className="logo-icon"></div>
        <span className="logo-text">PoolPal.</span>
      </div>
      <nav>
        {navItems.map((item, index) => (
          <div key={index} className={`nav-item ${item.active ? 'active' : ''}`}>
            <item.icon className="nav-icon" />
            <span className="nav-text">{item.text}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;