import express from "express";
import TaskController from "../controllers/taskController";
import { validateTask } from "../middlewares/validateTask";
import { authenticateToken } from "../middlewares/authMiddleware"; // Importa o middleware de autenticação

const router = express.Router();

router.post('/tasks', authenticateToken, validateTask, TaskController.create);
router.put('/tasks/:id', authenticateToken, validateTask, TaskController.update);
router.get('/tasks', authenticateToken, TaskController.getAll);
router.get('/tasks/:id', authenticateToken, TaskController.getOne);
router.delete('/tasks/:id', authenticateToken, TaskController.delete);

// Rota para testar o logger Winston
router.get('/test-error', (req, res, next) => {
    const error = new Error('Erro intencional para teste do logger Winston') as any;
    error.statusCode = 500; // Define um código de status para o erro
    next(error); // Passa o erro para o middleware de tratamento de erros
  });


export default router;