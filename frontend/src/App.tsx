import React from 'react';

const App: React.FC = () => {
  return (
    
    <div className="max-w-5xl mx-auto p-8 text-center">
      <div className="bg-red-500 text-white p-4">
  Testando Tailwind CSS
      </div>
      <header className="mb-8">
        <img
          src="/vite.svg"
          className="mx-auto h-24 transition-transform duration-300 hover:scale-110"
          alt="Vite logo"
        />
        <h1 className="text-4xl font-bold text-gray-800 mt-4">
          Bem-vindo ao TaskVault
        </h1>
      </header>
      <main>
        <p className="text-lg text-gray-600">
          Gerencie suas tarefas de forma simples e eficiente.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600">
          Começar
        </button>
      </main>
    </div>
  );
};

export default App;