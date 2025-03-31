# Use a imagem base do Node.js
FROM node:18-alpine

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos package.json e package-lock.json para o contêiner
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos do projeto para o contêiner
COPY . .

# Exponha a porta em que a API será executada
EXPOSE 3000

# Comando para iniciar a API
CMD ["npm", "run", "dev"]