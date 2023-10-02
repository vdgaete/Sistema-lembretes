# Sistema de lembretes

- Autor: [Victor Daniel]
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

### Back-end

Foi utilizado o framework [Express](https://expressjs.com/pt-br/) para o desenvolvimento do back-end do projeto. Para o banco de dados foi escolhido o [SQLite](https://www.sqlite.org/index.html) por ser um banco de dados simples e que não necessita de configurações adicionais, além de ser um banco de dados que não necessita de um servidor para ser executado, o que facilita a execução do projeto.

Entretanto pensando em escalabilidade e facilidade de manutenção do projeto, todas as funções de acesso ao banco de dados foram encapsuladas em uma classe, dessa forma caso seja necessário a troca do banco de dados, basta implementar uma nova classe filha do modelo.

Foi também utilizado o [Swagger](https://swagger.io/) para documentação automática da API, utilizando o [swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc) e o [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express). A documentação da API pode ser acessada através caminho `/api-docs`.

Pensando em simplificar o deploy do projeto, o back-end também provê o front-end do projeto, mas trabalham virtualmente de forma independente, dessa forma o deploy do projeto pode ser feito em apenas um servidor, facilitando a configuração do projeto.

### Testes

- TO-DO

### Deploy

O deploy do projeto foi feito utilizando o [Heroku](https://www.heroku.com/), 
