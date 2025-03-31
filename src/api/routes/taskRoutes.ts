import express from "express";
import TaskController from "../controllers/taskController";
import { validateTask } from "../middlewares/validateTask";

const router = express.Router();

router.post("/tasks", validateTask, TaskController.create);
router.put("/tasks/:id", validateTask, TaskController.update);
router.get("/tasks", TaskController.getAll);
router.get("/tasks/:id", TaskController.getOne);
router.delete("/tasks/:id", TaskController.delete);

// Rota para testar o logger Winston
router.get('/test-error', (req, res, next) => {
    const error = new Error('Erro intencional para teste do logger Winston') as any;
    error.statusCode = 500; // Define um código de status para o erro
    next(error); // Passa o erro para o middleware de tratamento de erros
  });


export default router;