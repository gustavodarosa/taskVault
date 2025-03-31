import { Request, Response } from 'express';
import Task from '../../domain/models/tasks';  // Modelo de tarefa

class TaskController {
  // Criar tarefa
  async create(req: Request, res: Response): Promise<void> {
    try {
      const { title, description, dueDate } = req.body;

      const newTask = await Task.create({ title, description, dueDate });

      res.status(201).json(newTask);  // Retorna a tarefa criada com status 201
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar tarefa' });  // Retorna erro com status 500
    }
  }

  // Obter todas as tarefas
  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const tasks = await Task.findAll();
      res.status(200).json(tasks);  // Retorna todas as tarefas com status 200
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar tarefas' });  // Retorna erro com status 500
    }
  }

  // Obter uma tarefa específica
  async getOne(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const task = await Task.findByPk(id);

      if (!task) {
        res.status(404).json({ error: 'Tarefa não encontrada' });  // Tarefa não encontrada
        return;
      }

      res.status(200).json(task);  // Retorna a tarefa com status 200
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar tarefa' });  // Retorna erro com status 500
    }
  }

  // Atualizar tarefa
  async update(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { title, description, dueDate } = req.body;

      const task = await Task.findByPk(id);

      if (!task) {
        res.status(404).json({ error: 'Tarefa não encontrada' });  // Tarefa não encontrada
        return;
      }

      task.title = title;
      task.description = description;
      task.dueDate = dueDate;

      await task.save();  // Atualiza a tarefa no banco

      res.status(200).json(task);  // Retorna a tarefa atualizada com status 200
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar tarefa' });  // Retorna erro com status 500
    }
  }

  // Excluir tarefa
  async delete(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      const task = await Task.findByPk(id);

      if (!task) {
        res.status(404).json({ error: 'Tarefa não encontrada' });  // Tarefa não encontrada
        return;
      }

      await task.destroy();  // Deleta a tarefa do banco

      res.status(204).send();  // Retorna status 204 (sem conteúdo) após excluir a tarefa
    } catch (error) {
      res.status(500).json({ error: 'Erro ao excluir tarefa' });  // Retorna erro com status 500
    }
  }
}

export default new TaskController();
