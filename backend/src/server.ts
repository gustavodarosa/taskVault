import dotenv from 'dotenv';
dotenv.config();

import sequelize from "./config/database";
import app from "./app";  // Importando o servidor Express


// Sincronizando o banco de dados
sequelize.sync().then(() => {  
  console.log("Banco de dados sincronizado");
  // Inicializando o servidor Express após a sincronização
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
}).catch((error) => {
  console.error("Erro ao sincronizar o banco de dados:", error);
});