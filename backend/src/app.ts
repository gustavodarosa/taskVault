// filepath: backend/src/app.ts
import express from 'express';
import taskRoutes from './api/routes/taskRoutes';
import authRoutes from './api/routes/authRoutes';
import { errorHandler } from './api/middlewares/errorHandler';

const app = express();

app.use(express.json());

app.use('/api', taskRoutes);
app.use('/api/auth', authRoutes);

app.use(errorHandler);

export default app;