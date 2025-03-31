import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      // Simulação de login (substitua pela chamada à API)
      if (email === 'user@example.com' && password === 'password') {
        localStorage.setItem('authToken', 'fake-token'); // Salva o token no localStorage
        navigate('/tasks'); // Redireciona para a lista de tarefas
      } else {
        setError('Credenciais inválidas.');
      }
    } catch (err) {
      setError('Erro ao fazer login.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Login</h1>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Entrar
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-600">
        Não tem uma conta?{' '}
        <a href="/register" className="text-blue-500 hover:underline">
          Registre-se
        </a>
      </p>
    </div>
  );
};

export default Login;