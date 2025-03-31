import { Request, Response } from 'express';
import Task from '../../domain/models/tasks';  // Modelo de tarefa

class TaskController {
  // Criar tarefa
  async create(req: Request, res: Response) {
    try {
      const { title, description, dueDate } = req.body;

      const newTask = await Task.create({ title, description, dueDate });

      return res.status(201).json(newTask);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao criar tarefa' });
    }
  }

  // Obter todas as tarefas
  async getAll(req: Request, res: Response) {
    try {
      const tasks = await Task.findAll();
      return res.status(200).json(tasks);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar tarefas' });
    }
  }

  // Obter uma tarefa específica
  async getOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const task = await Task.findByPk(id);

      if (!task) {
        return res.status(404).json({ error: 'Tarefa não encontrada' });
      }

      return res.status(200).json(task);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar tarefa' });
    }
  }

  // Atualizar tarefa
  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { title, description, dueDate } = req.body;

      const task = await Task.findByPk(id);

      if (!task) {
        return res.status(404).json({ error: 'Tarefa não encontrada' });
      }

      task.title = title;
      task.description = description;
      task.dueDate = dueDate;

      await task.save();

      return res.status(200).json(task);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao atualizar tarefa' });
    }
  }

  // Excluir tarefa
  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const task = await Task.findByPk(id);

      if (!task) {
        return res.status(404).json({ error: 'Tarefa não encontrada' });
      }

      await task.destroy();

      return res.status(204).send();  // Status 204 indica que a tarefa foi excluída com sucesso
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao excluir tarefa' });
    }
  }
}

export default new TaskController();
