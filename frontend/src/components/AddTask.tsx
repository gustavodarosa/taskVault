import React, { useState } from 'react';
import api from '../services/api';

const AddTask: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');

    try {
      await api.post('/tasks', { title, description, dueDate });
      setSuccess('Tarefa adicionada com sucesso!');
      setTitle('');
      setDescription('');
      setDueDate('');
    } catch (err) {
      setError('Erro ao adicionar tarefa.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Adicionar Nova Tarefa</h1>
      {loading && <div className="text-blue-500">Carregando...</div>}
      {success && <div className="text-green-500">{success}</div>}
      {error && <div className="text-red-500">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">Título:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Descrição:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Data de Vencimento:</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 disabled:opacity-50 transition-all duration-300 focus:ring-2 focus:ring-blue-300"
        >
          {loading ? 'Adicionando...' : 'Adicionar Tarefa'}
        </button>
      </form>
    </div>
  );
};

export default AddTask;