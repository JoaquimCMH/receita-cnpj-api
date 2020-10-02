/**
 * Arquivo: src/routes/empresas.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionadas a classe 'empresa'.
 */

const router = require('express-promise-router')();
const empresasController = require('../controllers/empresas.controller');

// Busca uma empresas pelo cnpj
// Exemplo: http://localhost:3000/api/empresas/00000000000191
router.get('/empresas/:cnpj', empresasController.getEmpresaByCNPJ);

// Busca uma empresas pelos seus parâmietros
// Exemplo: http://localhost:3000/api/empresas?uf=PB&attributes=cnpj,nome_fantasia,uf&start=0&limit=10
router.get('/empresas', empresasController.getEmpresasByParams);

module.exports = router;
