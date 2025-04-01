import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <div className="h-screen bg-gray-100 p-6">
      <header className="bg-blue-500 text-white p-4 rounded-md shadow-md">
        <h1 className="text-2xl font-bold">TaskVault Dashboard</h1>
      </header>

      <main className="mt-6">
        {/* Resumo das Tarefas */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Resumo</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-bold">Pendentes</h3>
              <p className="text-2xl text-blue-500">5</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-bold">Concluídas</h3>
              <p className="text-2xl text-green-500">10</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-bold">Atrasadas</h3>
              <p className="text-2xl text-red-500">2</p>
            </div>
          </div>
        </section>

        {/* Tarefas Recentes */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Tarefas Recentes</h2>
          <ul className="bg-white p-4 rounded shadow">
            <li className="border-b py-2">Tarefa 1 - Prazo: 2023-10-01</li>
            <li className="border-b py-2">Tarefa 2 - Prazo: 2023-10-05</li>
            <li className="py-2">Tarefa 3 - Prazo: 2023-10-10</li>
          </ul>
        </section>

        {/* Botões de Ação Rápida */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Ações Rápidas</h2>
          <div className="flex gap-4">
            <Link
              to="/tasks/add"
              className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
            >
              Adicionar Nova Tarefa
            </Link>
            <Link
              to="/tasks"
              className="bg-gray-500 text-white px-4 py-2 rounded shadow hover:bg-gray-600"
            >
              Ver Todas as Tarefas
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;