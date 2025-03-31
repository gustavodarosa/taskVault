import { Sequelize } from 'sequelize';

// Configuração do Sequelize para conectar ao MySQL
const sequelize = new Sequelize('TASKVAULT', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;