import sequelize from './config/database';
import './api/controllers/taskController';  // Apenas para garantir que o Sequelize seja sincronizado
import './config/server';  // Inicializa o servidor Express

// Sincronizando o banco de dados
sequelize.sync({ force: true }).then(() => {
  console.log('Banco de dados sincronizado');
}).catch((error) => {
  console.error('Erro ao sincronizar o banco de dados:', error);
});
