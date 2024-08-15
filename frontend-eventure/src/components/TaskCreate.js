import React from 'react';

const TaskCreate = () => {
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
        <h1>Create New Task</h1>
      </div>
      <div className="form-section">
        <form>
          <div className="form-field">
            <label htmlFor="relatedEvent">Related Event</label>
            <select id="relatedEvent" name="relatedEvent">
              <option value="event1">Event 1: Tech Conference</option>
              <option value="event2">Event 2: Annual Meetup</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="taskTitle">Task Title</label>
            <input type="text" id="taskTitle" name="taskTitle" />
          </div>
          <div className="form-field">
            <label htmlFor="taskDescription">Task Description</label>
            <textarea id="taskDescription" name="taskDescription"></textarea>
          </div>
          <div className="form-field">
            <label htmlFor="taskDeadline">Deadline</label>
            <input type="date" id="taskDeadline" name="taskDeadline" />
          </div>
          <div className="form-field">
            <label htmlFor="taskAssignee">Assignee</label>
            <select id="taskAssignee" name="taskAssignee">
              <option value="user1">User 1</option>
              <option value="user2">User 2</option>
              <option value="user3">User 3</option>
            </select>
          </div>
          <div className="form-field">
            <button type="submit" className="button">Create Task</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskCreate;
