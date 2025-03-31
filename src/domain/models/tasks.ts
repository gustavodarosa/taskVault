import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/database';  // Importando a conexão com o banco

class Task extends Model {
  public id!: number;
  public title!: string;
  public description!: string;
  public dueDate!: Date;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Definindo o modelo e as colunas da tabela
Task.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dueDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'tasks',  // Nome da tabela no banco de dados
  }
);

export default Task;