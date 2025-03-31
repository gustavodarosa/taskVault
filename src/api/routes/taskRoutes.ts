import express from "express";
import TaskController from "../controllers/taskController";
import { validateTask } from "../middlewares/validateTask";

const router = express.Router();

router.post("/tasks", validateTask, TaskController.create);
router.put("/tasks/:id", validateTask, TaskController.update);
router.get("/tasks", TaskController.getAll);
router.get("/tasks/:id", TaskController.getOne);
router.delete("/tasks/:id", TaskController.delete);

export default router;