import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md text-center">
  <h1 className="text-3xl font-bold mb-4 text-gray-800">
    Bem-vindo ao TaskVault
  </h1>
  <nav className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
    <Link
      to="/tasks"
      className="text-blue-500 hover:underline"
    >
      Ver Tarefas
    </Link>
    <Link
      to="/tasks/add"
      className="text-blue-500 hover:underline"
    >
      Adicionar Tarefa
    </Link>
  </nav>
</div>
  );
};

export default Home;