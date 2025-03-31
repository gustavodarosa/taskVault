import express from 'express';
import taskRoutes from './api/routes/taskRoutes';

const app = express();

// Middleware
app.use(express.json()); // Para entender o corpo da requisição no formato JSON

// Rotas
app.use('/api', taskRoutes);

export default app;