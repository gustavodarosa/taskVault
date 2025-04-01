// filepath: c:\Users\gustavo.rosa8\OneDrive - SENAC-SC\taskVault\frontend\src\App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import App from './components/App';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import EditTask from './components/EditTask';
import Login from './components/Login';

const AppRoutes: React.FC = () => {
  const isAuthenticated = !!localStorage.getItem('authToken'); // Verifica se o usuário está autenticado

  return (
    <Router>
      <Routes>
        {/* Rotas públicas */}
        <Route path="/login" element={<Login />} />

        {/* Rotas protegidas */}
        {isAuthenticated ? (
          <>
            <Route path="/" element={<App />} />
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