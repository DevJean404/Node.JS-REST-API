// Este arquivo fica responsável por fazer o roteamento das funções básicas de CRUD.
// Ou seja, é este arquivo que diz para nossa API o que cada endereço vai fazer.

// Importando e instanciando as Rotas (Router) do Express.
const router = require('express').Router();

// Importando o nosso modelo de dados de Contatos (customers.js).
const customersModel = require('./customer');

// CRUD - Banco de dados
//
// Create - Criar uma nova entrada
// Read - Ler uma entrada
// Update - Atualizar uma entrada
// Delete - Remover uma entrada

// ATENÇÃO: os métodos de callback abaixo são assíncronos, ou seja, ele tem uma execução 
// um pouco mais demorada.
// Por isso o uso da anotção "async" no começo deles.

// ATENÇÃO: os métodos de requisição HTTP do Express recebem uma função de callback, 
// esta que por sua vez recebe dois parâmetros:
// geralmente nomeados de "req" e "res", que quer dizer "requisição" e "resposta" respectivamente.

// Create
// Acessando o endereço http://localhost:3000/customers através de um metódo POST o 
// usuário da nossa API deve ser capaz de inserir um Contato no nosso Banco de Dados.
router.post('/customers', async (req, res) => {
    const customers = new customersModel(req.body);

    try {
        await customer.save();
        res.send(customer);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Read
// Acessando o endereço http://localhost:3000/customers através de um metódo GET o 
// usuário da nossa API deve ser capaz de visualizar todos os contatos armazenados no 
// nosso Banco de Dados.
router.get('/customers', async (req, res) => {
    const customers = await customersModel.find({});

    try {
        res.send(customers);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update
// Acessando o endereço http://localhost:3000/customers/id-do-contato através de um metódo
// PUT o usuário da nossa API deve ser capaz de atualizar as informações de um Contato do
// nosso Banco de Dados.
router.put('/customers/:id', async (req, res) => {
    try {
        const customer = await customersModel.findByIdAndUpdate(req.params.id, req.body);

        res.send(customers);

    } catch (error) {
        res.status(500).send(error);
    }
});

// Delete
// Acessando o endereço http://localhost:3000/customers/id-do-contato através de um metódo
// DELETE o usuário da nossa API deve ser capaz de remover um Contato do Banco de Dados.
router.delete('/customers/:id', async (req, res) => {
    try {
        const customer = await customersModel.findByIdAndDelete(req.params.id);

        if (!customer) {
            res.status(404).send("Não foi encontrado um contato com este id");
        }

        res.send(customer);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Exportação das nossa configurações de rotas.
module.exports = router;
