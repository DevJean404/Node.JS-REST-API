// Modelo de Dados para nosso Objeto de Contatos.
// Utilizando Mongoose para isso.

// Importação do Mongoose.
const mongoose = require('mongoose');

// Para se criar um modelo com o mongoose, primeiro se deve criar um esquema de dados.
// Como é feito abaixo:
const Customer = new mongoose.Schema({
    name: String,
    phone: String
});

// Exportação do nosso esquema como modelo do Mongoose.
module.exports = mongoose.model('Customer', Customer);
