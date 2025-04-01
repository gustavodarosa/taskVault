import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Extende a interface Request para incluir a propriedade `user`
declare module 'express-serve-static-core' {
  interface Request {
    user?: string | jwt.JwtPayload; // Define o tipo da propriedade `user`
  }
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({ message: 'Token não fornecido' });
    return; // Encerra a execução da função
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    req.user = decoded; // Adiciona os dados do usuário ao objeto `req`
    next(); // Continua para o próximo middleware
  } catch (error) {
    res.status(403).json({ message: 'Token inválido ou expirado' });
    return; // Encerra a execução da função
  }
};