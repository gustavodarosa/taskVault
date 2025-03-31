import { Request, Response, NextFunction } from 'express';
import logger from '../../infrastructure/logger'

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500; // Código de status padrão
  const errorMessage = err.message || 'Erro interno do servidor';

  // Log detalhado do erro
  logger.error({
    method: req.method,
    path: req.path,
    body: req.body,
    query: req.query,
    params: req.params,
    message: errorMessage,
    stack: err.stack, // Inclui o stack trace para depuração
    environment: process.env.NODE_ENV || 'development',
  });

  // Resposta estruturada para o cliente
  res.status(statusCode).json({
    error: {
      message: errorMessage,
      code: statusCode,
    },
  });
};