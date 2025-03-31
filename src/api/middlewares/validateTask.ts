import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const taskSchema = Joi.object({
  title: Joi.string().min(3).required(),
  description: Joi.string().max(500).optional(),
  dueDate: Joi.date().optional(),
});

export const validateTask = (req: Request, res: Response, next: NextFunction): void => {
  const { error } = taskSchema.validate(req.body, { stripUnknown: true });
  if (error) {
    res.status(400).json({ message: "Dados inválidos", details: error.details });
    return; // Encerra a execução
  }
  next(); // Continua para o próximo middleware ou handler
};