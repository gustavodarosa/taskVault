import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import EditTask from './components/EditTask';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/tasks/add" element={<AddTask />} />
        <Route path="/tasks/edit/:id" element={<EditTask />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;