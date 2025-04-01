import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/api';
import '../index.css'; // Importa o CSS global

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    try {
      await register(email, password);
      navigate('/login');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Erro ao registrar.');
    }
  };

  return (
    <div className="container">
      <h2 className="title">Registro</h2>
      {error && <div className="error">{error}</div>}
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
        <button type="submit" className="button">Registrar</button>
      </form>
      <a href="/login" className="link">Já tem uma conta? Faça login</a>
    </div>
  );
};

export default Register;