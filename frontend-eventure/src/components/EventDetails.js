import React from 'react';

const EventDetails = () => {
  return (
    <div className="container">
      <div className="navbar">
        <a href="/">Home</a>
        <a href="/events">Events</a>
        <a href="/tasks">Tasks</a>
        <a href="/profile">Profile</a>
        <a href="/logout">Logout</a>
      </div>
      <div className="form-header">
        <h1>Event Details</h1>
      </div>
      <div className="form-section">
        {/* Populate with details of the event */}
      </div>
    </div>
  );
};

export default EventDetails;
