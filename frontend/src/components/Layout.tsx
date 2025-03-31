import React from 'react';
import { Link } from 'react-router-dom';

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <nav className="bg-gray-800 text-white p-4 fixed w-full top-0 shadow-md">
        <div className="max-w-5xl mx-auto flex justify-between">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/tasks" className="hover:underline">
            Ver Tarefas
          </Link>
          <Link to="/tasks/add" className="hover:underline">
            Adicionar Tarefa
          </Link>
        </div>
      </nav>
      <main className="pt-16">{children}</main>
    </div>
  );
};

export default Layout;