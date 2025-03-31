import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import EditTask from './components/EditTask';
import Login from './components/Login';
import Register from './components/Register';

const AppRoutes: React.FC = () => {
  const isAuthenticated = !!localStorage.getItem('authToken'); // Verifica se o usuário está autenticado

  return (
    <Router>
      <Routes>
        {/* Rotas públicas */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rotas protegidas */}
        {isAuthenticated ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<TaskList />} />
            <Route path="/tasks/add" element={<AddTask />} />
            <Route path="/tasks/edit/:id" element={<EditTask />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}
      </Routes>
    </Router>
  );
};

export default AppRoutes;