import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const taskSchema = Joi.object({
  title: Joi.string().min(3).required(),
  description: Joi.string().max(500).optional(),
  dueDate: Joi.date().optional(),
});

export const validateTask = (req: Request, res: Response, next: NextFunction) => {
  const { error } = taskSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: 'Dados inválidos', details: error.details });
  }
  next();
};