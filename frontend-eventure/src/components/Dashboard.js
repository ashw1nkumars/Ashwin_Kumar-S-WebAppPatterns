import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="navbar">
        <a href="/">Home</a>
        <a href="/events">Events</a>
        <a href="/tasks">Tasks</a>
        <a href="/profile">Profile</a>
        <a href="/logout">Logout</a>
      </div>
      {/* Add the rest of your dashboard HTML content here */}
      <div className="container">
        <h1>Welcome to Eventure Dashboard</h1>
        {/* Add other dashboard sections here */}
      </div>
    </div>
  );
};

export default Dashboard;
