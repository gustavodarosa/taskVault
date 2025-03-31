# TaskVault

## Descrição
O **TaskVault** é uma aplicação para gerenciamento de tarefas, desenvolvida com uma arquitetura estruturada e escalável. O projeto utiliza **TypeScript**, **Express.js** e **Sequelize** para oferecer uma API robusta para operações de CRUD (Criar, Ler, Atualizar e Excluir) de tarefas.

## Estrutura de Diretórios
A estrutura do projeto segue o padrão de separação de responsabilidades:

```
src/
├── app.ts                 # Configuração do servidor Express
├── server.ts              # Inicialização do servidor e sincronização do banco de dados
├── api/
│   ├── controllers/       # Controladores para lidar com requisições HTTP
│   ├── middlewares/       # Middlewares para validação e processamento de dados
│   ├── routes/            # Definição das rotas da API
├── application/           # Lógica de negócios (futuro)
├── config/                # Configurações, como conexão com o banco de dados
├── domain/
│   ├── models/            # Modelos do Sequelize para o banco de dados
├── infrastructure/        # Implementações de infraestrutura, como repositórios
tests/                     # Testes unitários e de integração
```

## Funcionalidades
- **Gerenciamento de Tarefas**:
  - Criar, listar, atualizar e excluir tarefas.
  - Cada tarefa possui os seguintes atributos:
    - `title`: Título da tarefa (obrigatório).
    - `description`: Descrição da tarefa (opcional).
    - `dueDate`: Data de vencimento da tarefa (opcional).
- **Validação de Dados**:
  - Validação de entrada utilizando **Joi**.
- **Banco de Dados**:
  - Integração com **MySQL** utilizando **Sequelize** como ORM.
- **Testes**:
  - Configuração de testes com **Jest**.
- **Qualidade de Código**:
  - Uso de **ESLint** e **Prettier** para manter um código limpo e padronizado.

## Tecnologias Utilizadas
- **TypeScript**: Linguagem fortemente tipada para maior segurança e manutenção do código.
- **Express.js**: Framework web leve e flexível.
- **Sequelize**: ORM para interação com o banco de dados.
- **MySQL**: Banco de dados relacional.
- **Joi**: Biblioteca para validação de dados.
- **Jest**: Framework de testes.
- **ESLint & Prettier**: Ferramentas para linting e formatação de código.

## Pré-requisitos
- **Node.js** (versão 14 ou superior)
- **MySQL** (instalado e configurado)

## Configuração do Projeto
1. Clone o repositório:
   ```sh
   git clone [url-do-repositorio]
   ```

2. Navegue até o diretório do projeto:
   ```sh
   cd taskVault
   ```

3. Instale as dependências:
   ```sh
   npm install
   ```

4. Configure as variáveis de ambiente no arquivo `.env`:
   ```env
   DATABASE_URL=seu_url_do_banco_de_dados
   API_KEY=sua_chave_de_api
   PORT=3000
   NODE_ENV=development
   ```

5. Execute as migrações do banco de dados (se necessário):
   ```sh
   npx sequelize-cli db:migrate
   ```

6. Inicie o servidor em modo de desenvolvimento:
   ```sh
   npm run dev
   ```

## Uso
- Acesse a API em: `http://localhost:3000/api`.
- Endpoints disponíveis:
  - `POST /api/tasks`: Criar uma nova tarefa.
  - `GET /api/tasks`: Listar todas as tarefas.
  - `GET /api/tasks/:id`: Obter uma tarefa específica.
  - `PUT /api/tasks/:id`: Atualizar uma tarefa.
  - `DELETE /api/tasks/:id`: Excluir uma tarefa.

## Testes
Para rodar os testes, utilize o comando:
```sh
npm run test
```

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request com melhorias ou correções.

## Licença
Este projeto está licenciado sob a licença MIT.