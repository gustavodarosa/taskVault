import React, { useEffect, useState } from 'react';
import api from '../services/api';

interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      try {
        const response = await api.get('/tasks');
        setTasks(response.data);
      } catch (err) {
        setError('Erro ao carregar tarefas.');
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/tasks/${id}`);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (err) {
      setError('Erro ao excluir tarefa.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Lista de Tarefas</h1>
      {loading && (
  <div className="flex justify-center">
    <div className="spinner"></div>
  </div>
)}
      {error && <div className="text-red-500">{error}</div>}
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li
          key={task.id}
          className="p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex justify-between items-center"
        >
          <div>
            <strong className="text-gray-800">{task.title}</strong>
            <p className="text-gray-600">{task.description}</p>
            <p className="text-sm text-gray-500">Vence em: {task.dueDate}</p>
          </div>
          <button
            onClick={() => handleDelete(task.id)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-all duration-300"
          >
            Excluir
          </button>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;