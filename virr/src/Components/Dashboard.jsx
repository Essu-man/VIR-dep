import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Top bar */}
      <header className="top-bar">
        <div className="logo">MyApp</div>
      </header>

      {/* Sidebar */}
      <aside className="sidebar">
        <ul className="menu">
          <li className="menu-item">Data Entry</li>
          <li className="menu-item">Customization</li>
          <li className="menu-item">Withdrawal</li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="content">
        <h1>Welcome to the Dashboard</h1>
        <p>Select a menu item to get started.</p>
      </main>
    </div>
  );
};

export default Dashboard;
