import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, register } from '../services/api';
import '../index.css';

const Login: React.FC = () => {
  const [isRegister, setIsRegister] = useState(false); // Estado para alternar entre login e registro
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await login(email, password);
      localStorage.setItem('authToken', response.data.token);
      navigate('/tasks');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Erro ao fazer login.');
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    try {
      await register(email, password);
      setSuccess('Conta criada com sucesso! Faça login.');
      setIsRegister(false); // Volta para o formulário de login após o registro
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Erro ao registrar.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <button
            className={`login-header-link ${!isRegister ? 'active' : ''}`}
            onClick={() => setIsRegister(false)}
          >
            Login
          </button>
          <button
            className={`login-header-link ${isRegister ? 'active' : ''}`}
            onClick={() => setIsRegister(true)}
          >
            Criar Nova Conta
          </button>
        </div>
        {error && <div className="error">{error}</div>}
        {success && <div className="success">{success}</div>}
        {isRegister ? (
          <form onSubmit={handleRegister}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="input"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
              required
              className="input"
            />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirmar Senha"
              required
              className="input"
            />
            <button type="submit" className="button login-button">
              Registrar
            </button>
          </form>
        ) : (
          <form onSubmit={handleLogin}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="input"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
              required
              className="input"
            />
            <button type="submit" className="button login-button">
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;