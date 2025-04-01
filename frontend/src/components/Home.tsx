import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="h-screen bg-white flex flex-col">
      {/* Navbar */}
      <nav className="bg-blue-500 text-white p-4 shadow-md">
        
        <div className="flex justify-between items-center"> {/* Removido max-w-5xl */}
          {/* Nome do App */}
          <h1 className="text-xl font-bold">TaskVault</h1>

          {/* Barra de Pesquisa */}
          <div className="flex items-center w-1/2">
            <input
              type="text"
              placeholder="Pesquisar tarefas..."
              className="w-full p-2 rounded-l-md border-none focus:outline-none"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700">
              
            </button>
          </div>

          {/* Botão de Adicionar Tarefa */}
          <Link
            to="/tasks/add"
            className="flex justify-center items-center w-10 h-10 bg-white text-blue-500 rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300"
            title="Adicionar Tarefa"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </Link>
        </div>
      </nav>

      {/* Conteúdo Principal */}
      <div className="flex-grow flex items-stretch items-center h-full"> {/* Removido justify-center, adicionado items-stretch */}
        <p className="text-gray-600 text-lg">Bem-vindo ao TaskVault!</p>
      </div>
    </div>
  );
};

export default Home;