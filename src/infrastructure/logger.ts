import winston from 'winston';

// Configuração do logger Winston
const logger = winston.createLogger({  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/error.log' }),
  ],
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
  ),
});

export default logger;