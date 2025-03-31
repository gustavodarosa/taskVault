import express from 'express';
import TaskController from '../controllers/taskController';  // Controlador de tarefas

const router = express.Router();

// Definindo as rotas da API
router.post('/tasks', TaskController.create);
router.get('/tasks', TaskController.getAll);
router.get('/tasks/:id', TaskController.getOne);
router.put('/tasks/:id', TaskController.update);
router.delete('/tasks/:id', TaskController.delete);

export default router;
