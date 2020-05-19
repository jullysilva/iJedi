const express = require('express');

const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json({
        evento: 'Soou maravilhosa, mas Deus Pai é mais',
        aluno: 'Jully Silva'
    });
});

module.exports = routes;