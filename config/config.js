require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env

module.exports = {
  development: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'taskvault',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'mysql',
  },
  test: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: `${process.env.DB_NAME}_test` || 'taskvault_test',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: `${process.env.DB_NAME}_prod` || 'taskvault_prod',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'mysql',
  },
};