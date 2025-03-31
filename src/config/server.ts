import express from 'express';
import taskRoutes from '../api/routes/taskRoutes';  // Importando as rotas de tarefas

const app = express();
app.use(express.json());  // Para ler o corpo das requisições JSON

// Usando as rotas de tarefas
app.use('/api', taskRoutes);

// Inicializando o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});