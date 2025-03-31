# TaskVault

## Descrição

O **TaskVault** é uma aplicação para gerenciamento de tarefas, desenvolvida com uma arquitetura estruturada e escalável. O projeto utiliza **TypeScript**, **Express.js** e **Sequelize** para oferecer uma API robusta para operações de CRUD (Criar, Ler, Atualizar e Excluir) de tarefas. Este projeto também serve como um exercício prático para aplicar princípios de **SOLID**, **Clean Code**, **Design Patterns** e **Clean Architecture**.

## Etapas do Projeto

* 1. Configuração Inicial
    * ✅ Criar a estrutura de pastas do projeto
    * ✅ Inicializar o projeto com package.json
    * ✅ Configurar TypeScript (tsconfig.json)
    * ✅ Instalar e configurar Express
    * ✅ Instalar e configurar Sequelize + MySQL
    * ✅ Criar o arquivo de configuração do banco (database.ts)
* 2. Desenvolvimento da API
    * ✅ Criar modelo Task e configurar Sequelize
    * ✅ Criar controladores (TaskController.ts)
    * ✅ Criar rotas (taskRoutes.ts)
    * ✅ Corrigir erros de tipagem no controlador
* 3. Validação e Segurança
    * ✅ Criar middleware de validação de dados com Joi
    * ✅ Criar middleware global de tratamento de erros
* 4. Melhorias no Projeto
    * ✅ Implementar logs com Winston
    * ✅ Configurar variáveis de ambiente com dotenv
* 5. Testes e Qualidade
    * ✅ Criar testes unitários para os controladores com Jest
    * ✅ Configurar ESLint e Prettier para padronização do código
* 6. Infraestrutura e Deploy
    * ✅ Criar um Dockerfile para rodar a API
    * ✅ Criar um docker-compose.yml para subir API + MySQL juntos
    * Configurar o deploy do backend

## Arquitetura de Software e Boas Práticas

* ✅ SOLID e Clean Code
* ✅ Design Patterns (Factory, Singleton, Observer, etc.)
* ✅ Estruturar um projeto com Clean Architecture

A arquitetura do projeto segue os princípios do Clean Architecture, separando as responsabilidades em camadas distintas:

* **Domain:** Contém as regras de negócio e entidades do domínio.
* **Application:** Define os casos de uso da aplicação.
* **Infrastructure:** Implementa as interfaces para acesso a recursos externos (banco de dados, APIs, etc.).
* **Presentation:** Lida com a apresentação da aplicação (rotas, controladores, etc.).

Os padrões de design SOLID e outros padrões (Factory, Singleton, Observer, Repository) são aplicados para garantir a manutenibilidade e escalabilidade do código.

## Estrutura de Diretórios

A estrutura do projeto segue o padrão de separação de responsabilidades:

src/
├── app.ts            # Configuração do servidor Express
├── server.ts         # Inicialização do servidor e sincronização do banco de dados
├── api/
│   ├── controllers/      # Controladores para lidar com requisições HTTP
│   ├── middlewares/      # Middlewares para validação e processamento de dados
│   ├── routes/           # Definição das rotas da API
├── application/         # Lógica de negócios (futuro)
├── config/            # Configurações, como conexão com o banco de dados
├── domain/
│   ├── models/         # Modelos do Sequelize para o banco de dados
├── infrastructure/      # Implementações de infraestrutura, como repositórios
tests/                # Testes unitários e de integração


## Funcionalidades

* **Gerenciamento de Tarefas**:
    * Criar, listar, atualizar e excluir tarefas.
    * Cada tarefa possui os seguintes atributos:
        * `title`: Título da tarefa (obrigatório).
        * `description`: Descrição da tarefa (opcional).
        * `dueDate`: Data de vencimento da tarefa (opcional).
        * `category`: Categoria da tarefa (opcional).
        * `priority`: Nível de prioridade da tarefa (opcional).
        * `status`: Status da tarefa (Pendente, Em andamento, Concluído).
* **Validação de Dados**:
    * Validação de entrada utilizando **Joi**.
* **Banco de Dados**:
    * Integração com **MySQL** utilizando **Sequelize** como ORM.
* **Testes**:
    * Configuração de testes com **Jest**.
* **Qualidade de Código**:
    * Uso de **ESLint** e **Prettier** para manter um código limpo e padronizado.

## Recursos Futuros (Roadmap)

###  Backend (Melhorias Futuras)

* Implementação de autenticação e autorização (JWT)
* Implementação de testes automatizados (Jest, Supertest)
* Otimização de queries no banco de dados
* Configuração de CORS e segurança

###  Frontend (Em Desenvolvimento)

✅ Criar um projeto React com Vite
✅ Configurar React Router para navegação
✅ Criar os componentes principais (Lista, Adicionar, Editar, Excluir Tarefas)
✅ Conectar o frontend à API (fetch/axios)
✅ Implementar estados com React (useState, useEffect)
✅ Criar feedbacks visuais (mensagens de erro/sucesso, loading)
* Implementar estilização (CSS/Tailwind/Styled Components)

###  Melhorias Futuras no Frontend

* Melhorar experiência do usuário (UX/UI)
* Criar um sistema de autenticação para usuários
* Adicionar testes para garantir qualidade do código
* Implementar deploy para publicação online

## Tecnologias Utilizadas

* **TypeScript**: Linguagem fortemente tipada para maior segurança e manutenção do código.
* **Express.js**: Framework web leve e flexível.
* **Sequelize**: ORM para interação com o banco de dados.
* **MySQL**: Banco de dados relacional.
* **Joi**: Biblioteca para validação de dados.
* **Jest**: Framework de testes.
* **ESLint & Prettier**: Ferramentas para linting e formatação de código.
* **Winston**: Biblioteca de Logs.
* **.env**: Biblioteca para variaveis de ambiente.
* **JWT**: Para autenticação e autorização (futuro).
* **bcrypt**: Para criptografia de senhas (futuro).
* **React**: Biblioteca para criação do frontend (em desenvolvimento).
* **Vite**: Ferramenta de build para React (em desenvolvimento).
* **React Router**: Para navegação no frontend (em desenvolvimento).
* **fetch/axios**: Para comunicação com a API (em desenvolvimento).
* **CSS/Tailwind/Styled Components**: Para estilização do frontend (em desenvolvimento).

## Pré-requisitos

* **Node.js** (versão 14 ou superior)
* **MySQL** (instalado e configurado)

## Configuração do Projeto

1.  Clone o repositório:

    ```sh
    git clone [url-do-repositorio]
    ```

2.  Navegue até o diretório do projeto:

    ```sh
    cd taskVault
    ```

3.  Instale as dependências:

    ```sh
    npm install
    ```

4.  Configure as variáveis de ambiente no arquivo `.env`:

    ```env
    DATABASE_URL=seu_url_do_banco_de_dados
    API_KEY=sua_chave_de_api
    PORT=3000
    NODE_ENV=development
    ```

5.  Execute as migrações do banco de dados (se necessário):

    ```sh
    npx sequelize-cli db:migrate
    ```

6.  Inicie o servidor em modo de desenvolvimento:

    ```sh
    npm run dev
    ```

## Uso

* Acesse a API em: `http://localhost:3000/api`.
* Endpoints disponíveis:
    * `POST /api/tasks`: Criar uma nova tarefa. Exemplo de requisição:

        ```json
        {
            "title": "Nova Tarefa",
            "description": "Descrição da tarefa",
            "dueDate": "2024-12-31",
            "category": "Trabalho",
            "priority": "Alta",
            "status": "Pendente"
        }
        ```

    * `GET /api/tasks`: Listar todas as tarefas.
    * `GET /api/tasks/:id`: Obter uma tarefa específica.
    * `PUT /api/tasks/:id`: Atualizar uma tarefa.
    * `DELETE /api/tasks/:id`: Excluir uma tarefa.

## Testes

Para rodar os testes, utilize o comando:

```sh
npm run test
Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request com melhorias ou correções.

Licença
Este projeto está licenciado sob a licença MIT.
