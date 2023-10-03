# Sistema de lembretes

- Autor: Victor Daniel
- Data de Entrega: 03/10/2023

## Descrição do Projeto

O projeto consiste em um sistema de lembretes, onde o usuário poderá criar e excluir lembretes, além de poder visualizar todos os lembretes criados. 

## Funcionalidades

- [x] Criar lembrete
- [x] Excluir lembrete
- [x] Visualizar lembretes
- [x] Formulário de cadastro

## Premissas do Projeto

### Front-end

Foi utilizado o framework [React](https://pt-br.reactjs.org/) para o desenvolvimento do front-end do projeto, como desafio não foi utilizado nenhuma biliboteca de componentes prontos, foi utilizado apenas o [Styled Components](https://styled-components.com/) para estilização dos componentes.

O projeto foi desenvolvido em apenas uma página, onde o usuário poderá visualizar todos os lembretes criados, além de poder criar e excluir lembretes. Para a criação um formulário foi criado, onde o usuário poderá inserir o título e a data do lembrete, foi utilizado o [React Hook Form](https://react-hook-form.com/) para organização e validação dos campos do formulário. Já os lembrtes são exibidos em uma lista em cascata, onde os lembretes são agrupados por data, e os lembretes de uma mesma data são exibidos em uma lista.
 
Para a comunicação com o back-end foi utilizado o [Axios](https://axios-http.com/), que é um cliente HTTP baseado em Promises, que pode ser utilizado tanto no navegador quanto no Node.js. Foi cria um contexto para gerenciar o estado dos lembretes, dessa forma o estado dos lembretes é compartilhado entre os componentes, e quando um lembrete é criado ou excluído, o estado é atualizado e os componentes são atualizados, bem como as requisições para o back-end são feitas através do contexto.

### Back-end

Foi utilizado o framework [Express](https://expressjs.com/pt-br/) para o desenvolvimento do back-end do projeto. Para o banco de dados foi escolhido o [SQLite](https://www.sqlite.org/index.html) por ser um banco de dados simples e que não necessita de configurações adicionais, além de ser um banco de dados que não necessita de um servidor para ser executado, o que facilita a execução do projeto.

Entretanto pensando em escalabilidade e facilidade de manutenção do projeto, todas as funções de acesso ao banco de dados foram encapsuladas em uma classe, dessa forma caso seja necessário a troca do banco de dados, basta implementar uma nova classe filha do modelo.

Foi também utilizado o [Swagger](https://swagger.io/) para documentação automática da API, utilizando o [swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc) e o [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express). A documentação da API pode ser acessada através caminho `/api-docs`.

Pensando em simplificar o deploy do projeto, o back-end também provê o front-end do projeto, mas trabalham virtualmente de forma independente, dessa forma o deploy do projeto pode ser feito em apenas um servidor, facilitando a configuração do projeto.

### Deploy

O deploy do projeto foi feito utilizando o [Heroku](https://www.heroku.com/), caso queira acessar o projeto já em produção, basta acessar [https://teste-victor-dti-a3625cfe6cd1.herokuapp.com/](https://teste-victor-dti-a3625cfe6cd1.herokuapp.com/)

## Como executar o projeto

O Branch main contém o todo o código de forma separada para avaliação porém não possui a estrutura de pastas para execução do projeto, para executar o projeto é necessário fazer o download do branch [deploy](github.com/vdgaete/dti-teste-victor/tree/deploy), que contém a estrutura de pastas para execução do projeto.

### Pré-requisitos

- [Node.js](https://nodejs.org/en/) testado na versão 18.16.1
- [NPM](https://www.npmjs.com/) testado na versão 9.5.1
- [Git](https://git-scm.com/) 

### Executando o projeto

1. Clone o repositório
    ```sh
    git clone
    ```
2. Instale as dependências
    ```sh
    npm install
    ```
3. Execute o projeto
    ```sh
    npm start
    ```
4. Acesse o projeto
    ```sh
    http://localhost:5000 
    ```
5. Acesse a documentação da API
    ```sh
    http://localhost:5000/api-docs
    ```

## Como executar os testes

- TO-DO

## Como fazer o deploy do projeto

1. Login no Heroku
    ```sh
    heroku login
    ```
2. Criar o projeto no Heroku
    ```sh
    heroku create
    ```
3. Fazer o deploy do projeto
    ```sh
    git push heroku main
    ```
4. Acessar o projeto
    ```sh
    heroku open
    ```

## Screenshots

- TO-DO

## Rotas da API

#### Documentação da API
````http
GET /api-docs
````

#### Criar lembrete
````http
POST /tarefa
````
| Parâmetro | Tipo | Descrição |
| :--- | :--- | :--- |
| `nome` | `string` | **Obrigatório**. Título do lembrete |
| `data` | `string` | **Obrigatório**. Data do lembrete |

#### Excluir lembrete
````http
DELETE /tarefa/:id
````

#### Visualizar lembretes
````http
GET /tarefa
````
| Parâmetro | Tipo | Descrição |
| :--- | :--- | :--- |
| `id` | `number` | **Opcional**. ID do lembrete |

#### Obter datas dos lembretes
````http
GET /tarefa/datas
````

#### Obter lembretes de uma data
````http
GET /tarefa/data/:data
````
| Parâmetro | Tipo | Descrição |
| :--- | :--- | :--- |
| `data` | `string` | **Obrigatório**. Data do lembrete |

## Sobre o desenvolvimento do projeto

### Desafios 

O projeto foi desenvolvido em 5 dias, os primeiros 2 dias foram utilizados para o planejamento do projeto, onde foi feito o levantamento de requisitos, criação do protótipo e definição das tecnologias a serem utilizadas. Após o planejamento, no próximo dia  foi desenvolvido tanto o front-end quanto o back-end do projeto utilizando os protótipos como base, e nos últimos 2 dias foram utilizados para deploy, documentação e testes.

### O que aprendi

Durante a execução do projeto foi possível aprender mais sobre o framework React, além de aprender a utilizar o framework Express. Também foi possível aprender mais sobre o banco de dados SQLite e outras tecnologias que não foram utilizadas no projeto, mas que foram estudadas durante o desenvolvimento do projeto, como MongoDB, PostgreSQL e MySQL.

Também foi possível aprender mais sobre o processo de deploy de uma aplicação, além de aprender a utilizar o Heroku para deploy de aplicações. Além disso foi possível aprender mais sobre o processo de documentação, estilos de código , testes e boas práticas de desenvolvimento.

Outras tecnologias que foram utilizadas durante o desenvolvimento do projeto foram o [ESLint](https://eslint.org/) para padronização do código, o [Prettier](https://prettier.io/) para formatação do código, o [Swagger](https://swagger.io/) para documentação da API, o [Jest](https://jestjs.io/) para testes.

### O que eu faria diferente

- Utilizaria um banco de dados diferente do SQLite, como o MongoDB, PostgreSQL ou MySQL, pois o SQLite não é recomendado para aplicações que necessitam de escalabilidade, mas foi escolhido por ser um banco de dados simples e fácil de configurar.

- Utilizaria um framework de componentes prontos, como o [Material UI](https://mui.com/pt/), 
nesse caso foi utilizado apenas o [Styled Components](https://styled-components.com/) para estilização dos componentes, o que não é ruim do ponto de vista de aprendizado e experiência, mas para um projeto real, utilizar um framework de componentes prontos seria mais vantajoso,
principalmente para o caso de um projeto que necessite de configuração de temas, e componentes mais complexos.

- Implementaria testes unitários e de integração desde o início do projeto, pois dessa forma seria possível garantir a qualidade do código e evitar problemas futuros, além de facilitar a manutenção do projeto. O TDD seria uma boa opção para o desenvolvimento do projeto, pois dessa forma os testes seriam desenvolvidos antes do código, guiando o desenvolvimento do projeto.

## Pontos de melhoria

...
