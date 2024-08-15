import React from 'react';

const EventCreate = () => {
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
        <h1>Create New Event</h1>
      </div>
      <div className="form-section">
        <form>
          <div className="form-field">
            <label htmlFor="eventName">Event Name</label>
            <input type="text" id="eventName" name="eventName" />
          </div>
          <div className="form-field">
            <label htmlFor="eventDate">Event Date</label>
            <input type="date" id="eventDate" name="eventDate" />
          </div>
          <div className="form-field">
            <label htmlFor="eventLocation">Location</label>
            <input type="text" id="eventLocation" name="eventLocation" />
          </div>
          <div className="form-field">
            <label htmlFor="eventDescription">Event Description</label>
            <textarea id="eventDescription" name="eventDescription"></textarea>
          </div>
          <div className="form-field">
            <label htmlFor="eventResponsible">Event Responsible</label>
            <select id="eventResponsible" name="eventResponsible">
              <option value="user1">User 1</option>
              <option value="user2">User 2</option>
              <option value="user3">User 3</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="eventParticipants">Participants</label>
            <select id="eventParticipants" name="eventParticipants" multiple>
              <option value="participant1">Participant 1</option>
              <option value="participant2">Participant 2</option>
              <option value="participant3">Participant 3</option>
            </select>
          </div>
          <div className="form-field">
            <button type="submit" className="button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventCreate;
