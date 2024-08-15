import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import EventCreate from './components/EventCreate';
import EventDetails from './components/EventDetails';
import TaskCreate from './components/TaskCreate';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-event" element={<EventCreate />} />
        <Route path="/event-details" element={<EventDetails />} />
        <Route path="/create-task" element={<TaskCreate />} />
      </Routes>
    </Router>
  );
}

export default App;
