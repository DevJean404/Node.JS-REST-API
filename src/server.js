// Este é o arquivo que é responsável pela conexão com o banco de dados e inicialização do nosso servidor.

// Importações do pacotes previamente instalados.
const express = require('express');
const mongoose = require('mongoose');

// Criando uma nova instancia do Express.
const server = express();

// Estamos configurando o nosso servidor Express para entender requisições com json.
server.use(express.json());

// Estamos importando o usando o arquivo de rotas (routes.js) no nosso servidor Express.
server.use(require('./routes'));

// Utilizando o mongoose para se conectar ao nosso serviço de banco de dados.
mongoose.connect(
    'mongodb+srv://ete:etesap3@cluster0.tome3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (error) => {
        if (!error) {
            console.log('Banco de dados conectado com sucesso!');
            
            // Aqui é inicializado o nosso servidor Express, tudo o que foi feito antes com ele foi apenas a sua configuração.
            server.listen(3000, () => {
                console.log('Servidor conectado no endereço http://localhost:3000');
            });
        } else {
            console.log(`Erro ao conectar-se ao Banco de Dados: ${error}`)
        }
    },
);

// Exportando o nosso servidor Express.
module.exports = server;
