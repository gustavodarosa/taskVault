import React from 'react';
import { Link } from 'react-router-dom';

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/tasks">Ver Tarefas</Link> | <Link to="/tasks/add">Adicionar Tarefa</Link>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;