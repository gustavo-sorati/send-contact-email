<h1 align="center">Send Contact Email</h1>
<p align="center">Captura os dados de um formulário, salva no banco de dados e envia os dados por e-mail</p>

<p align="center">
    <a href="#objetivo">Objetivo</a> •
    <a href="#Utilização">Como executar</a>
</p>

***

## Objetivo
O formulário deve receber dados passados pelo usuário, esses dados serão salvos em um banco de dados (optei por utilizar o `Mysql`), logo em seguida os dados deverão ser enviados por e-mail;

- [x] Criar do formulário
- [x] Validar
- [x] Conectar com banco de dados
- [x] Criar da tabela que armazenará os dados
- [x] Alimentar o banco
- [x] Enviar dados por e-mail 

***

## Utilização

1. Criar um banco de dados **Mysql**

2. Dentro da pasta `config` criar um arquivo chamado ``config.js``, com os dados para conexão com o banco de dados.

    ```javascript
        module.exports = {
            USERNAME: "NOME DE USUARIO",
            PASSWORD: "SENHA",
            DATABASE: "NOME DO BANCO",
            HOST: "localhost",
            DIALECT: 'mysql',
        }
    ```
3. Dentro da pasta `config` criar um arquivo chamado ``config-email.js``, com os dados para conexão com o cliente de email.

    ```javascript
        module.exports = {
            USER: "NOME DE USUARIO",
            PASS: "SENHA",

        }
    ```
4. No ``server.js``, dentro da rota ``.post("/contact")`` realizar a configuração do cliente de email utilizado.
    ```javascript
        module.exports = {
            USER: "NOME DE USUARIO",
            PASS: "SENHA",

        }
    ```
5. Iniciar o projeto ``npm start``